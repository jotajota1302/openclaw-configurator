"use client";

import { WizardLayout } from "@/components/wizard-layout";
import { useWizard } from "@/lib/wizard-context";
import { generateConfigYAML, generateEnvFile, generateInstallScript } from "@/lib/generators";

export default function Step7() {
  const { config } = useWizard();

  const downloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadAllFiles = () => {
    downloadFile("openclaw.yaml", generateConfigYAML(config));
    downloadFile(".env", generateEnvFile(config));
    downloadFile("install.sh", generateInstallScript());
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="w-full max-w-3xl">
        {/* Progress - 100% */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Step 7 of 7</span>
            <span className="text-sm text-slate-400">100%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-full transition-all duration-300" />
          </div>
        </div>

        {/* Success Card */}
        <div className="bg-slate-800 rounded-lg shadow-xl p-8 border border-slate-700">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold mb-2">Configuration Complete!</h1>
            <p className="text-slate-400">
              Your OpenClaw configuration files are ready to download
            </p>
          </div>

          {/* Download Buttons */}
          <div className="space-y-4 mb-8">
            <button
              onClick={downloadAllFiles}
              className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 font-semibold text-lg transition-all shadow-lg"
            >
              📦 Download All Files
            </button>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => downloadFile("openclaw.yaml", generateConfigYAML(config))}
                className="px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors text-sm"
              >
                📄 openclaw.yaml
              </button>
              <button
                onClick={() => downloadFile(".env", generateEnvFile(config))}
                className="px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors text-sm"
              >
                🔐 .env
              </button>
              <button
                onClick={() => downloadFile("install.sh", generateInstallScript())}
                className="px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors text-sm"
              >
                🛠️ install.sh
              </button>
            </div>
          </div>

          <div className="p-4 bg-violet-500/10 border border-violet-500/30 rounded-lg mb-6">
            <div className="font-semibold mb-2">🚀 Deploy (opcional, informativo)</div>
            <p className="text-sm text-slate-300 mb-2">
              No se ejecuta ningún deploy automático desde aquí. Solo enlaces y plantilla para publicar cuando quieras.
            </p>
            <div className="text-sm space-x-3">
              <a href="https://railway.app/new" target="_blank" rel="noreferrer" className="text-violet-300 underline">Railway</a>
              <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-violet-300 underline">Vercel</a>
              <a href="https://dashboard.render.com" target="_blank" rel="noreferrer" className="text-violet-300 underline">Render</a>
            </div>
          </div>

          {/* Next Steps */}
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <div className="font-semibold mb-2">📋 Next Steps:</div>
            <ol className="text-sm text-slate-300 space-y-2 list-decimal list-inside">
              <li>Edit <code className="bg-slate-700 px-1 rounded">.env</code> with your actual API keys</li>
              <li>Run <code className="bg-slate-700 px-1 rounded">bash install.sh</code> to install OpenClaw</li>
              <li>Start the gateway: <code className="bg-slate-700 px-1 rounded">openclaw gateway start</code></li>
              <li>Visit <code className="bg-slate-700 px-1 rounded">http://localhost:18789</code> for the control panel</li>
            </ol>
          </div>

          {/* Resources */}
          <div className="mt-6 pt-6 border-t border-slate-700 space-y-2 text-center text-sm text-slate-400">
            <div>
              📚 <a href="https://docs.openclaw.ai" className="text-blue-400 hover:underline">Documentation</a>
              {" · "}
              💬 <a href="https://discord.gg/clawd" className="text-blue-400 hover:underline">Discord Community</a>
              {" · "}
              🎁 <a href="https://clawhub.com" className="text-blue-400 hover:underline">ClawHub Skills</a>
            </div>
          </div>

          {/* Start Over */}
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-slate-400 hover:text-slate-300 underline"
            >
              ← Start Over
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
