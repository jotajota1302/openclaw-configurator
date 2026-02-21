import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <div className="max-w-4xl w-full space-y-8 text-center">
        {/* Logo/Icon */}
        <div className="text-8xl mb-4">🤖</div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tight">
            OpenClaw <span className="text-blue-400">Configurator</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            WordPress-style wizard to configure your OpenClaw instance.
            <br />
            <span className="text-slate-400">No code, no complexity—just a guided setup in 7 minutes.</span>
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2">Fast Setup</h3>
            <p className="text-sm text-slate-400">Complete configuration in under 10 minutes</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold mb-2">Secure by Default</h3>
            <p className="text-sm text-slate-400">Privacy-first configuration with allowlists</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold mb-2">Ready to Deploy</h3>
            <p className="text-sm text-slate-400">Download complete config + install script</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/wizard/step-1"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-8 py-4 text-lg font-semibold transition-all shadow-lg"
          >
            Start Configuration →
          </Link>
          <a
            href="https://docs.openclaw.ai"
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg bg-slate-700 hover:bg-slate-600 px-8 py-4 text-lg font-semibold transition-colors"
          >
            📚 Read Docs
          </a>
        </div>

        {/* Footer */}
        <div className="pt-12 text-sm text-slate-400">
          Part of the{" "}
          <a href="https://openclaw.ai" className="text-blue-400 hover:underline">
            OpenClaw
          </a>{" "}
          ecosystem ·{" "}
          <a href="https://github.com/openclaw/openclaw" className="text-blue-400 hover:underline">
            Open Source
          </a>
        </div>
      </div>
    </main>
  );
}
