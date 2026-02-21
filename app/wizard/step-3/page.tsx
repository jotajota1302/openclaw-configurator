"use client";

import { WizardLayout } from "@/components/wizard-layout";
import { useWizard } from "@/lib/wizard-context";
import { useState } from "react";

export default function Step3() {
  const { config, updateConfig } = useWizard();
  const [dmPolicy, setDmPolicy] = useState<"allow" | "deny" | "allowlist">(config.security.dmPolicy);
  const [allowlist, setAllowlist] = useState("");

  const handleNext = () => {
    const allowlistArray = allowlist
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
    
    updateConfig({
      security: {
        dmPolicy,
        allowlist: allowlistArray,
      },
    });
    return true;
  };

  return (
    <WizardLayout
      step={3}
      title="Security & Privacy"
      description="Configure who can interact with your OpenClaw instance"
      onNext={handleNext}
    >
      <div className="space-y-6">
        {/* DM Policy */}
        <div>
          <label className="block text-sm font-medium mb-3">Direct Message Policy</label>
          <div className="space-y-2">
            {[
              { value: "allow", label: "Allow All", desc: "Anyone can message (not recommended)" },
              { value: "allowlist", label: "Allowlist Only", desc: "Only specific users (recommended)" },
              { value: "deny", label: "Deny All", desc: "No one can message via DM" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setDmPolicy(option.value as any)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  dmPolicy === option.value
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-slate-600 hover:border-slate-500"
                }`}
              >
                <div className="font-semibold mb-1">{option.label}</div>
                <div className="text-sm text-slate-400">{option.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Allowlist */}
        {dmPolicy === "allowlist" && (
          <div>
            <label className="block text-sm font-medium mb-2">
              Allowed Users (one per line)
            </label>
            <textarea
              value={allowlist}
              onChange={(e) => setAllowlist(e.target.value)}
              placeholder={`+1234567890\n@username\nuser@example.com`}
              rows={6}
              className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none font-mono text-sm"
            />
            <p className="text-xs text-slate-400 mt-2">
              Enter phone numbers, usernames, or email addresses
            </p>
          </div>
        )}

        {/* Info Box */}
        <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <p className="text-sm">
            <strong>Recommendation:</strong> Use allowlist mode with only trusted users for maximum privacy.
          </p>
        </div>
      </div>
    </WizardLayout>
  );
}
