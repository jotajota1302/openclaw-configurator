"use client";

import { WizardLayout } from "@/components/wizard-layout";
import { useWizard } from "@/lib/wizard-context";
import { useEffect, useMemo, useState } from "react";

const TELEGRAM_DOCS = "https://core.telegram.org/bots#6-botfather";
const DISCORD_DOCS = "https://discord.com/developers/applications";
const WHATSAPP_DOCS = "https://docs.openclaw.ai/channels/whatsapp";
const SIGNAL_DOCS = "https://docs.openclaw.ai/channels/signal";

function isTelegramToken(token: string) {
  return /^\d{7,}:[A-Za-z0-9_-]{20,}$/.test(token.trim());
}

function isDiscordToken(token: string) {
  return /^[A-Za-z0-9._-]{20,}$/.test(token.trim());
}

function templateChannelDefaults(template: "personal" | "developer" | "business" | "custom") {
  if (template === "personal") return { telegram: true, discord: false, whatsapp: false, signal: false };
  if (template === "developer") return { telegram: true, discord: true, whatsapp: false, signal: false };
  if (template === "business") return { telegram: true, discord: false, whatsapp: true, signal: false };
  return { telegram: false, discord: false, whatsapp: false, signal: false };
}

export default function Step2() {
  const { config, updateConfig, selectedTemplate, touched, markTouched } = useWizard();

  const [telegramToken, setTelegramToken] = useState(config.channels.telegram?.token || "");
  const [discordToken, setDiscordToken] = useState(config.channels.discord?.token || "");
  const [enableWhatsApp, setEnableWhatsApp] = useState(!!config.channels.whatsapp?.enabled);
  const [enableSignal, setEnableSignal] = useState(!!config.channels.signal?.enabled);

  useEffect(() => {
    if (touched.channels) return;
    const d = templateChannelDefaults(selectedTemplate);
    setEnableWhatsApp(d.whatsapp);
    setEnableSignal(d.signal);
    if (!telegramToken && d.telegram) setTelegramToken("");
    if (!discordToken && d.discord) setDiscordToken("");
  }, [selectedTemplate, touched.channels]);

  const telegramValid = useMemo(() => (telegramToken ? isTelegramToken(telegramToken) : null), [telegramToken]);
  const discordValid = useMemo(() => (discordToken ? isDiscordToken(discordToken) : null), [discordToken]);

  const handleNext = () => {
    const channels: {
      telegram?: { token: string; allowlist?: string[] };
      discord?: { token: string; allowlist?: string[] };
      whatsapp?: { enabled: boolean };
      signal?: { enabled: boolean };
    } = {};

    if (telegramToken.trim() && telegramValid) channels.telegram = { token: telegramToken.trim(), allowlist: [] };
    if (discordToken.trim() && discordValid) channels.discord = { token: discordToken.trim(), allowlist: [] };
    if (enableWhatsApp) channels.whatsapp = { enabled: true };
    if (enableSignal) channels.signal = { enabled: true };

    updateConfig({ channels });
    return true;
  };

  return (
    <WizardLayout step={2} title="Messaging Channels" description="Conecta canales con guías rápidas y validación de tokens" onNext={handleNext}>
      <div className="space-y-6">
        <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3"><span className="text-2xl">💬</span><span className="font-semibold">Telegram</span></div>
            <a href={TELEGRAM_DOCS} target="_blank" rel="noreferrer" className="text-xs text-cyan-400 underline hover:text-cyan-300">Obtener token en BotFather</a>
          </div>
          <input type="password" value={telegramToken} onChange={(e) => { setTelegramToken(e.target.value); markTouched("channels"); }} placeholder="123456789:AA..." className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none" />
          {telegramValid === true && <p className="text-xs text-emerald-400 mt-1">✅ Formato válido</p>}
          {telegramValid === false && <p className="text-xs text-rose-400 mt-1">❌ Formato no válido</p>}
        </div>

        <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3"><span className="text-2xl">🎮</span><span className="font-semibold">Discord</span></div>
            <a href={DISCORD_DOCS} target="_blank" rel="noreferrer" className="text-xs text-cyan-400 underline hover:text-cyan-300">Abrir Developer Portal</a>
          </div>
          <input type="password" value={discordToken} onChange={(e) => { setDiscordToken(e.target.value); markTouched("channels"); }} placeholder="Bot token" className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none" />
          {discordValid === true && <p className="text-xs text-emerald-400 mt-1">✅ Formato razonable</p>}
          {discordValid === false && <p className="text-xs text-rose-400 mt-1">❌ Parece incompleto</p>}
        </div>

        <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3"><span className="text-2xl">💚</span><span className="font-semibold">WhatsApp</span></div>
            <input type="checkbox" checked={enableWhatsApp} onChange={(e) => { setEnableWhatsApp(e.target.checked); markTouched("channels"); }} />
          </div>
          <a href={WHATSAPP_DOCS} target="_blank" rel="noreferrer" className="text-xs text-cyan-400 underline hover:text-cyan-300">Guía de configuración WhatsApp</a>
        </div>

        <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3"><span className="text-2xl">🔐</span><span className="font-semibold">Signal</span></div>
            <input type="checkbox" checked={enableSignal} onChange={(e) => { setEnableSignal(e.target.checked); markTouched("channels"); }} />
          </div>
          <a href={SIGNAL_DOCS} target="_blank" rel="noreferrer" className="text-xs text-cyan-400 underline hover:text-cyan-300">Guía de configuración Signal</a>
        </div>
      </div>
    </WizardLayout>
  );
}
