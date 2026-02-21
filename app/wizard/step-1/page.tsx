"use client";

import { WizardLayout } from "@/components/wizard-layout";
import { useWizard } from "@/lib/wizard-context";
import { useState } from "react";

export default function Step1() {
  const { config, updateConfig } = useWizard();
  const [selectedProvider, setSelectedProvider] = useState<string>("anthropic");
  const [apiKey, setApiKey] = useState("");
  const [sessionToken, setSessionToken] = useState("");

  const handleNext = () => {
    const providers = { ...config.providers };
    
    if (selectedProvider === "anthropic") {
      providers.anthropic = sessionToken ? { sessionToken } : { apiKey };
    } else if (selectedProvider === "openai" && apiKey) {
      providers.openai = { apiKey };
    } else if (selectedProvider === "google" && apiKey) {
      providers.google = { apiKey };
    }
    
    updateConfig({ providers });
    return true;
  };

  return (
    <WizardLayout
      step={1}
      title="Choose Your LLM Provider"
      description="Select and configure your primary language model provider"
      onNext={handleNext}
    >
      <div className="space-y-6">
        {/* Provider Selection */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { id: "anthropic", name: "Anthropic (Claude)", emoji: "🧠" },
            { id: "openai", name: "OpenAI (GPT)", emoji: "⚡" },
            { id: "google", name: "Google (Gemini)", emoji: "🔮" },
            { id: "ollama", name: "Ollama (Local)", emoji: "🏠" },
          ].map((provider) => (
            <button
              key={provider.id}
              onClick={() => setSelectedProvider(provider.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedProvider === provider.id
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-slate-600 hover:border-slate-500"
              }`}
            >
              <div className="text-3xl mb-2">{provider.emoji}</div>
              <div className="font-semibold">{provider.name}</div>
            </button>
          ))}
        </div>

        {/* Config Fields */}
        {selectedProvider === "anthropic" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Session Token (recommended)</label>
              <input
                type="password"
                value={sessionToken}
                onChange={(e) => setSessionToken(e.target.value)}
                placeholder="sk_ant_session..."
                className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
              />
              <p className="text-xs text-slate-400 mt-1">From your Claude Pro/Max account</p>
            </div>
            <div className="text-center text-slate-500">— or —</div>
            <div>
              <label className="block text-sm font-medium mb-2">API Key</label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-ant-api..."
                className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {(selectedProvider === "openai" || selectedProvider === "google") && (
          <div>
            <label className="block text-sm font-medium mb-2">API Key</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder={`${selectedProvider === "openai" ? "sk-..." : "AIza..."}`}
              className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
        )}

        {selectedProvider === "ollama" && (
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <p className="text-sm">Ollama will be auto-configured for localhost:11434</p>
          </div>
        )}
      </div>
    </WizardLayout>
  );
}
