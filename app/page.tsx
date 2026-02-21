import Link from "next/link";

function RobotIcon() {
  return (
    <div className="relative inline-block animate-float">
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-2xl scale-150" />
      {/* Main icon container */}
      <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm">
        <svg className="w-16 h-16 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 4.5 8.25v9a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h7.5m-7.5 3H15m-7.5 3H15" />
        </svg>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: "Fast Setup",
    desc: "Complete configuration in under 10 minutes with guided steps",
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
    text: "text-amber-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Secure by Default",
    desc: "Privacy-first configuration with allowlists and role policies",
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    title: "Ready to Deploy",
    desc: "Download complete config + install script, deploy anywhere",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
    text: "text-violet-400",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 dot-pattern" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-cyan-500/[0.07] via-blue-500/[0.05] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-t from-violet-500/[0.05] to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl w-full px-6 py-16 sm:py-24 space-y-12 text-center">
        {/* Robot Icon */}
        <div className="flex justify-center animate-fadeIn">
          <RobotIcon />
        </div>

        {/* Title */}
        <div className="space-y-5 animate-fadeInUp">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
            OpenClaw{" "}
            <span className="gradient-text-animated">Configurator</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            WordPress-style wizard to configure your OpenClaw instance.
          </p>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            No code, no complexity — just a guided setup in 7 simple steps.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="group glass-card p-6 hover:scale-[1.03] hover:shadow-xl hover:shadow-black/20 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: "backwards" }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${f.gradient} ${f.border} border flex items-center justify-center ${f.text} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fadeInUp"
          style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
        >
          <Link
            href="/wizard/step-1"
            className="btn-primary inline-flex items-center justify-center gap-3 px-10 py-4 text-lg animate-pulseGlow rounded-xl"
          >
            Start Configuration
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <a
            href="https://docs.openclaw.ai"
            target="_blank"
            className="btn-ghost inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
          >
            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            Read Docs
          </a>
        </div>

        {/* Badge */}
        <div className="animate-fadeIn" style={{ animationDelay: "0.7s", animationFillMode: "backwards" }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/50 text-sm text-slate-400">
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            7 steps &middot; ~10 min &middot; No account required
          </span>
        </div>

        {/* Social Proof */}
        <div
          className="pt-8 animate-fadeIn"
          style={{ animationDelay: "0.8s", animationFillMode: "backwards" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              Powered by{" "}
              <a href="https://openclaw.ai" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                OpenClaw
              </a>
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href="https://github.com/openclaw/openclaw"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Open Source
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href="https://discord.gg/clawd"
              className="flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Discord
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
