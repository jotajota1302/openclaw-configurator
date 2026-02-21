"use client";

import { WizardLayout } from "@/components/wizard-layout";
import { useWizard } from "@/lib/wizard-context";
import { useEffect, useMemo, useState } from "react";

type ProviderId = "anthropic" | "openai" | "google" | "ollama";

type Detection = {
  provider?: ProviderId;
  type?: "apiKey" | "sessionToken";
  label: string;
};

const PROVIDERS: Array<{ id: ProviderId; name: string; emoji: string; docs: string; helper: string }> = [
  {
    id: "anthropic",
    name: "Anthropic (Claude)",
    emoji: "🧠",
    docs: "https://console.anthropic.com/settings/keys",
    helper: "Usa API key (Console) o session token (Claude Pro/Max).",
  },
  {
    id: "openai",
    name: "OpenAI (GPT)",
    emoji: "⚡",
    docs: "https://platform.openai.com/api-keys",
    helper: "API keys empiezan normalmente por sk-...",
  },
  {
    id: "google",
    name: "Google (Gemini)",
    emoji: "🔮",
    docs: "https://aistudio.google.com/app/apikey",
    helper: "API keys de Gemini suelen empezar por AIza...",
  },
  {
    id: "ollama",
    name: "Ollama (Local)",
    emoji: "🏠",
    docs: "https://ollama.com/download",
    helper: "No necesitas API key. Recomendado para empezar sin credenciales.",
  },
];

function detectCredential(value: string): Detection {
  const v = value.trim();
  if (!v) return { label: "Sin detectar" };

  if (/^AIza[0-9A-Za-z\-_]{20,}$/.test(v)) {
    return { provider: "google", type: "apiKey", label: "Detectado: Google API key" };
  }

  if (/^sk-ant-api/i.test(v) || /^sk_ant_api/i.test(v)) {
    return { provider: "anthropic", type: "apiKey", label: "Detectado: Anthropic API key" };
  }

  if (/^sk-ant/i.test(v) || /^sk_ant/i.test(v)) {
    return { provider: "anthropic", type: "sessionToken", label: "Detectado: Anthropic session token" };
  }

  if (/^sk-[A-Za-z0-9\-_]{20,}$/.test(v)) {
    return { provider: "openai", type: "apiKey", label: "Detectado: OpenAI API key" };
  }

  return { label: "Formato no reconocido (puede ser válido igualmente)" };
}

function looksValid(provider: ProviderId, value: string, anthropicMode: "sessionToken" | "apiKey") {
  const v = value.trim();
  if (provider === "ollama") return true;
  if (!v) return false;

  if (provider === "openai") return /^sk-[A-Za-z0-9\-_]{20,}$/.test(v);
  if (provider === "google") return /^AIza[0-9A-Za-z\-_]{20,}$/.test(v);
  if (provider === "anthropic") {
    return anthropicMode === "apiKey"
      ? /^sk[-_]ant[-_]api/i.test(v)
      : /^sk[-_]ant/i.test(v);
  }

  return false;
}

export default function Step1() {
  const { config, updateConfig, selectedTemplate, setSelectedTemplate, touched } = useWizard();
  const [selectedProvider, setSelectedProvider] = useState<ProviderId>("anthropic");
  const [anthropicMode, setAnthropicMode] = useState<"sessionToken" | "apiKey">("sessionToken");
  const [credential, setCredential] = useState("");
  const [dontHaveCredentials, setDontHaveCredentials] = useState(false);
  const [ollamaBaseUrl] = useState("http://localhost:11434");
  const [testStatus, setTestStatus] = useState<"idle" | "testing" | "ok" | "error">("idle");
  const [testMessage, setTestMessage] = useState("");

  const selectedMeta = PROVIDERS.find((p) => p.id === selectedProvider)!;
  const detected = useMemo(() => detectCredential(credential), [credential]);
  const hasMismatch = !!detected.provider && detected.provider !== selectedProvider;
  const validByHeuristic = looksValid(selectedProvider, credential, anthropicMode);

  const handleTest = async () => {
    setTestStatus("testing");
    setTestMessage("");

    if (selectedProvider === "ollama") {
      try {
        const r = await fetch("http://localhost:11434/api/tags", { method: "GET" });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        setTestStatus("ok");
        setTestMessage("Conexión OK con Ollama local.");
      } catch {
        setTestStatus("error");
        setTestMessage("No se pudo conectar a Ollama en localhost:11434. ¿Está arrancado?");
      }
      return;
    }

    if (validByHeuristic) {
      setTestStatus("ok");
      setTestMessage("Formato de credencial válido. La validación de red se hará en el deploy/onboarding.");
    } else {
      setTestStatus("error");
      setTestMessage("Formato no válido para este provider. Revisa el tipo de credencial o cambia provider.");
    }
  };

  const applyNoCredentialsFlow = () => {
    setDontHaveCredentials(true);
    setSelectedProvider("ollama");
    setCredential("");
    setTestStatus("idle");
    setTestMessage("");
  };

  const applyTemplateDefaults = () => {
    if (selectedTemplate === "custom") return;

    const patch: Record<string, any> = {};

    if (!touched.channels) {
      if (selectedTemplate === "personal") patch.channels = { telegram: { token: "", allowlist: [] } };
      if (selectedTemplate === "developer") patch.channels = { telegram: { token: "", allowlist: [] }, discord: { token: "", allowlist: [] } };
      if (selectedTemplate === "business") patch.channels = { whatsapp: { enabled: true }, telegram: { token: "", allowlist: [] } };
    }

    if (!touched.security) patch.security = { dmPolicy: "allowlist", allowlist: [] };

    if (!touched.skills) {
      if (selectedTemplate === "personal") patch.skills = ["weather", "web_search"];
      if (selectedTemplate === "developer") patch.skills = ["github", "coding-agent", "himalaya"];
      if (selectedTemplate === "business") patch.skills = ["himalaya", "web_search"];
    }

    if (!touched.personality) {
      if (selectedTemplate === "personal") patch.personality = { name: "JARVIS", emoji: "🤖", vibe: "Professional yet approachable" };
      if (selectedTemplate === "developer") patch.personality = { name: "JARVIS Dev", emoji: "🛠️", vibe: "Technical and direct" };
      if (selectedTemplate === "business") patch.personality = { name: "JARVIS Biz", emoji: "📈", vibe: "Professional and concise" };
    }

    if (Object.keys(patch).length) updateConfig(patch);
  };

  useEffect(() => {
    applyTemplateDefaults();
  }, [selectedTemplate]);

  const handleNext = () => {
    applyTemplateDefaults();
    const providers = { ...config.providers };

    if (selectedProvider === "ollama") {
      providers.ollama = { baseUrl: ollamaBaseUrl };
      delete providers.anthropic;
      delete providers.openai;
      delete providers.google;
      updateConfig({ providers });
      return true;
    }

    if (!credential.trim()) return false;

    if (selectedProvider === "anthropic") {
      providers.anthropic = anthropicMode === "sessionToken" ? { sessionToken: credential.trim() } : { apiKey: credential.trim() };
      delete providers.openai;
      delete providers.google;
      delete providers.ollama;
    }

    if (selectedProvider === "openai") {
      providers.openai = { apiKey: credential.trim() };
      delete providers.anthropic;
      delete providers.google;
      delete providers.ollama;
    }

    if (selectedProvider === "google") {
      providers.google = { apiKey: credential.trim() };
      delete providers.anthropic;
      delete providers.openai;
      delete providers.ollama;
    }

    updateConfig({ providers });
    return true;
  };

  return (
    <WizardLayout
      step={1}
      title="Provider Setup (rápido)"
      description="Elige proveedor, pega credencial y valida en segundos"
      onNext={handleNext}
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm text-slate-300">Template rápido (opcional)</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: "personal", label: "Personal" },
              { id: "developer", label: "Developer" },
              { id: "business", label: "Business" },
              { id: "custom", label: "Custom" },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setSelectedTemplate(t.id as "personal" | "developer" | "business" | "custom");
                }}
                className={`px-3 py-2 rounded-lg border text-sm ${
                  selectedTemplate === t.id ? "border-cyan-500 text-cyan-300 bg-cyan-500/10" : "border-slate-600 text-slate-300"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          {selectedTemplate !== "custom" && (
            <p className="text-xs text-emerald-300">
              Template {selectedTemplate} aplicado al resto del wizard (channels/security/skills/personality).
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROVIDERS.map((provider) => (
            <button
              key={provider.id}
              type="button"
              onClick={() => {
                setSelectedProvider(provider.id);
                setDontHaveCredentials(false);
                setTestStatus("idle");
                setTestMessage("");
              }}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                selectedProvider === provider.id ? "border-cyan-500 bg-cyan-500/10" : "border-slate-600 hover:border-slate-500"
              }`}
            >
              <div className="text-2xl mb-1">{provider.emoji}</div>
              <div className="font-semibold">{provider.name}</div>
              <p className="text-xs text-slate-400 mt-1">{provider.helper}</p>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <a href={selectedMeta.docs} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">
            Cómo conseguir credencial de {selectedMeta.name}
          </a>
          <button type="button" onClick={applyNoCredentialsFlow} className="text-emerald-400 hover:text-emerald-300 underline">
            No tengo credenciales todavía
          </button>
        </div>

        {dontHaveCredentials && (
          <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-sm text-emerald-200">
            Modo rápido activado: usaremos Ollama local para que puedas arrancar sin API keys.
          </div>
        )}

        {selectedProvider === "anthropic" && (
          <div className="space-y-3">
            <div className="flex gap-3 text-sm">
              <button
                type="button"
                onClick={() => setAnthropicMode("sessionToken")}
                className={`px-3 py-1 rounded border ${anthropicMode === "sessionToken" ? "border-cyan-500 text-cyan-300" : "border-slate-600 text-slate-300"}`}
              >
                Session token (recomendado)
              </button>
              <button
                type="button"
                onClick={() => setAnthropicMode("apiKey")}
                className={`px-3 py-1 rounded border ${anthropicMode === "apiKey" ? "border-cyan-500 text-cyan-300" : "border-slate-600 text-slate-300"}`}
              >
                API key
              </button>
            </div>
            <input
              type="password"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              placeholder={anthropicMode === "sessionToken" ? "sk-ant-... / sk_ant..." : "sk-ant-api..."}
              className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none"
            />
          </div>
        )}

        {(selectedProvider === "openai" || selectedProvider === "google") && (
          <input
            type="password"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder={selectedProvider === "openai" ? "sk-..." : "AIza..."}
            className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none"
          />
        )}

        {selectedProvider === "ollama" && (
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm">
            Se usará Ollama en <code>{ollamaBaseUrl}</code>.
          </div>
        )}

        {credential && (
          <div className="text-sm text-slate-300">
            {detected.label}
          </div>
        )}

        {hasMismatch && (
          <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/10 text-sm text-amber-200 flex items-center justify-between gap-3">
            <span>La credencial parece de <b>{detected.provider}</b>, pero tienes seleccionado <b>{selectedProvider}</b>.</span>
            <button
              type="button"
              onClick={() => setSelectedProvider(detected.provider!)}
              className="px-3 py-1 rounded bg-amber-500/20 border border-amber-400/40 hover:bg-amber-500/30"
            >
              Cambiar automáticamente
            </button>
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleTest}
            disabled={testStatus === "testing"}
            className="px-4 py-2 rounded-lg border border-slate-500 hover:border-cyan-500 text-sm"
          >
            {testStatus === "testing" ? "Probando..." : "Test connection"}
          </button>
          {testStatus === "ok" && <span className="text-emerald-400 text-sm">✅ {testMessage}</span>}
          {testStatus === "error" && <span className="text-rose-400 text-sm">❌ {testMessage}</span>}
        </div>
      </div>
    </WizardLayout>
  );
}
