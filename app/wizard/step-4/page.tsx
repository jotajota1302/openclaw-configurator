"use client";

import { WizardLayout } from "@/components/wizard-layout";
import { useWizard } from "@/lib/wizard-context";
import { useState } from "react";

const AVAILABLE_SKILLS = [
  { id: "github", name: "GitHub", emoji: "🐙", desc: "Manage repos, issues, PRs" },
  { id: "himalaya", name: "Email (Himalaya)", emoji: "📧", desc: "IMAP/SMTP email client" },
  { id: "weather", name: "Weather", emoji: "🌤️", desc: "Current weather & forecasts" },
  { id: "whisper", name: "Whisper (Speech-to-Text)", emoji: "🎤", desc: "Local transcription" },
  { id: "coding-agent", name: "Coding Agent", emoji: "💻", desc: "Claude Code, Codex, etc." },
  { id: "apple-notes", name: "Apple Notes", emoji: "📝", desc: "Manage notes (macOS)" },
  { id: "apple-reminders", name: "Apple Reminders", emoji: "✅", desc: "Manage reminders (macOS)" },
];

export default function Step4() {
  const { config, updateConfig } = useWizard();
  const [selectedSkills, setSelectedSkills] = useState<string[]>(config.skills);

  const toggleSkill = (skillId: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId) ? prev.filter((id) => id !== skillId) : [...prev, skillId]
    );
  };

  const handleNext = () => {
    updateConfig({ skills: selectedSkills });
    return true;
  };

  return (
    <WizardLayout
      step={4}
      title="Select Skills"
      description="Choose the capabilities your agent will have"
      onNext={handleNext}
    >
      <div className="space-y-4">
        <p className="text-sm text-slate-400 mb-4">
          Selected: {selectedSkills.length} skill{selectedSkills.length !== 1 ? "s" : ""}
        </p>

        <div className="grid grid-cols-1 gap-3">
          {AVAILABLE_SKILLS.map((skill) => {
            const isSelected = selectedSkills.includes(skill.id);
            return (
              <button
                key={skill.id}
                onClick={() => toggleSkill(skill.id)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  isSelected
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-slate-600 hover:border-slate-500"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{skill.emoji}</span>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">{skill.name}</div>
                    <div className="text-sm text-slate-400">{skill.desc}</div>
                  </div>
                  {isSelected && (
                    <span className="text-blue-500 text-xl">✓</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
          <p className="text-sm text-slate-400">
            💡 You can add more skills later from{" "}
            <a href="https://clawhub.com" target="_blank" className="text-blue-400 hover:underline">
              clawhub.com
            </a>
          </p>
        </div>
      </div>
    </WizardLayout>
  );
}
