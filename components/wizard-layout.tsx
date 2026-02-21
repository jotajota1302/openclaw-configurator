"use client";

import { useWizard } from "@/lib/wizard-context";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface WizardLayoutProps {
  children: ReactNode;
  step: number;
  title: string;
  description: string;
  onNext?: () => boolean;
  nextLabel?: string;
}

export function WizardLayout({ children, step, title, description, onNext, nextLabel = "Next" }: WizardLayoutProps) {
  const { currentStep, setCurrentStep } = useWizard();
  const router = useRouter();

  const handleNext = () => {
    if (onNext && !onNext()) return;
    
    if (step < 7) {
      setCurrentStep(step + 1);
      router.push(`/wizard/step-${step + 1}`);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setCurrentStep(step - 1);
      router.push(`/wizard/step-${step - 1}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="w-full max-w-3xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Step {step} of 7</span>
            <span className="text-sm text-slate-400">{Math.round((step / 7) * 100)}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${(step / 7) * 100}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-slate-800 rounded-lg shadow-xl p-8 border border-slate-700">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-slate-400">{description}</p>
          </div>

          <div className="mb-8">{children}</div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="px-6 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold transition-colors"
            >
              {nextLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
