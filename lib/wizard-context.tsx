"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface WizardConfig {
  // Step 1: Providers
  providers: {
    anthropic?: { apiKey?: string; sessionToken?: string };
    openai?: { apiKey: string };
    google?: { apiKey: string };
    ollama?: { baseUrl: string };
  };
  
  // Step 2: Channels
  channels: {
    telegram?: { token: string; allowlist?: string[] };
    whatsapp?: { enabled: boolean };
    discord?: { token: string; allowlist?: string[] };
    signal?: { enabled: boolean };
  };
  
  // Step 3: Security
  security: {
    dmPolicy: "allow" | "deny" | "allowlist";
    allowlist: string[];
  };
  
  // Step 4: Skills
  skills: string[];
  
  // Step 5: Personality
  personality: {
    name: string;
    emoji: string;
    vibe: string;
  };
}

interface WizardContextType {
  config: WizardConfig;
  updateConfig: (updates: Partial<WizardConfig>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const WizardContext = createContext<WizardContextType | undefined>(undefined);

export function WizardProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [config, setConfig] = useState<WizardConfig>({
    providers: {},
    channels: {},
    security: { dmPolicy: "allowlist", allowlist: [] },
    skills: [],
    personality: { name: "JARVIS", emoji: "🤖", vibe: "Professional yet approachable" },
  });

  const updateConfig = (updates: Partial<WizardConfig>) => {
    setConfig((prev) => ({ ...prev, ...updates }));
  };

  return (
    <WizardContext.Provider value={{ config, updateConfig, currentStep, setCurrentStep }}>
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const context = useContext(WizardContext);
  if (!context) throw new Error("useWizard must be used within WizardProvider");
  return context;
}
