"use client";

import { WizardLayout } from "@/components/wizard-layout";
import { useWizard } from "@/lib/wizard-context";
import { useState } from "react";

export default function Step2() {
  const { config, updateConfig } = useWizard();
  const [telegramToken, setTelegramToken] = useState("");
  const [discordToken, setDiscordToken] = useState("");
  const [enableWhatsApp, setEnableWhatsApp] = useState(false);
  const [enableSignal, setEnableSignal] = useState(false);

  const handleNext = () => {
    const channels: any = {};
    
    if (telegramToken) {
      channels.telegram = { token: telegramToken, allowlist: [] };
    }
    if (discordToken) {
      channels.discord = { token: discordToken, allowlist: [] };
    }
    if (enableWhatsApp) {
      channels.whatsapp = { enabled: true };
    }
    if (enableSignal) {
      channels.signal = { enabled: true };
    }
    
    updateConfig({ channels });
    return true;
  };

  return (
    <WizardLayout
      step={2}
      title="Configure Messaging Channels"
      description="Connect OpenClaw to your messaging platforms"
      onNext={handleNext}
    >
      <div className="space-y-6">
        {/* Telegram */}
        <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💬</span>
              <span className="font-semibold">Telegram</span>
            </div>
          </div>
          <input
            type="password"
            value={telegramToken}
            onChange={(e) => setTelegramToken(e.target.value)}
            placeholder="Bot token from @BotFather"
            className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Discord */}
        <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎮</span>
              <span className="font-semibold">Discord</span>
            </div>
          </div>
          <input
            type="password"
            value={discordToken}
            onChange={(e) => setDiscordToken(e.target.value)}
            placeholder="Bot token from Discord Developer Portal"
            className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* WhatsApp */}
        <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💚</span>
              <span className="font-semibold">WhatsApp</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={enableWhatsApp}
                onChange={(e) => setEnableWhatsApp(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          {enableWhatsApp && (
            <p className="text-xs text-slate-400 mt-2">Will configure during first run via QR code</p>
          )}
        </div>

        {/* Signal */}
        <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔐</span>
              <span className="font-semibold">Signal</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={enableSignal}
                onChange={(e) => setEnableSignal(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          {enableSignal && (
            <p className="text-xs text-slate-400 mt-2">Will configure during first run via linking</p>
          )}
        </div>
      </div>
    </WizardLayout>
  );
}
