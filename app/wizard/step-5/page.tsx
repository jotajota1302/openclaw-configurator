"use client";

import { WizardLayout } from "@/components/wizard-layout";
import { useWizard } from "@/lib/wizard-context";
import { useState } from "react";

const EMOJI_OPTIONS = ["🤖", "🧠", "⚡", "🔮", "🦾", "👾", "🚀", "💎", "🌟", "🔥"];
const VIBE_PRESETS = [
  "Professional yet approachable",
  "Friendly and casual",
  "Concise and direct",
  "Witty and humorous",
  "Scholarly and thorough",
];

export default function Step5() {
  const { config, updateConfig } = useWizard();
  const [name, setName] = useState(config.personality.name);
  const [emoji, setEmoji] = useState(config.personality.emoji);
  const [vibe, setVibe] = useState(config.personality.vibe);

  const handleNext = () => {
    if (!name.trim()) {
      alert("Please enter a name for your agent");
      return false;
    }
    
    updateConfig({
      personality: { name: name.trim(), emoji, vibe },
    });
    return true;
  };

  return (
    <WizardLayout
      step={5}
      title="Personalize Your Agent"
      description="Give your assistant a name and personality"
      onNext={handleNext}
    >
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Agent Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="JARVIS, Alfred, Friday..."
            className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Emoji */}
        <div>
          <label className="block text-sm font-medium mb-2">Avatar Emoji</label>
          <div className="grid grid-cols-5 gap-2">
            {EMOJI_OPTIONS.map((e) => (
              <button
                key={e}
                onClick={() => setEmoji(e)}
                className={`text-4xl p-4 rounded-lg border-2 transition-all ${
                  emoji === e
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-slate-600 hover:border-slate-500"
                }`}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        {/* Vibe */}
        <div>
          <label className="block text-sm font-medium mb-2">Personality Vibe</label>
          <div className="space-y-2 mb-3">
            {VIBE_PRESETS.map((preset) => (
              <button
                key={preset}
                onClick={() => setVibe(preset)}
                className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                  vibe === preset
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-slate-600 hover:border-slate-500"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
          <textarea
            value={vibe}
            onChange={(e) => setVibe(e.target.value)}
            placeholder="Describe the personality..."
            rows={3}
            className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Preview */}
        <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
          <p className="text-sm text-slate-400 mb-2">Preview:</p>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{emoji}</span>
            <div>
              <div className="font-semibold">{name || "Your Agent"}</div>
              <div className="text-sm text-slate-400">{vibe}</div>
            </div>
          </div>
        </div>
      </div>
    </WizardLayout>
  );
}
