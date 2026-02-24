interface UseCaseCardProps {
  icon: string;
  title: string;
  description: string;
  userName: string;
  userRole: string;
  example: string;
  gradient: string;
  delay?: number;
}

export default function UseCaseCard({
  icon,
  title,
  description,
  userName,
  userRole,
  example,
  gradient,
  delay = 0,
}: UseCaseCardProps) {
  return (
    <div
      className="glass-card p-8 hover:scale-[1.02] transition-all duration-300 animate-fadeInUp"
      style={{ animationDelay: `${delay}s`, animationFillMode: "backwards" }}
    >
      {/* Icon and Title */}
      <div className="flex items-start gap-4 mb-6">
        <div className={`text-5xl flex-shrink-0 bg-gradient-to-br ${gradient} bg-clip-text`}>
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-400">{description}</p>
        </div>
      </div>

      {/* Example */}
      <div className="bg-slate-900/50 rounded-lg p-4 mb-4 border border-slate-700/50">
        <p className="text-sm text-slate-300 italic leading-relaxed">
          &ldquo;{example}&rdquo;
        </p>
      </div>

      {/* User info */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-semibold`}>
          {userName.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{userName}</div>
          <div className="text-xs text-slate-400">{userRole}</div>
        </div>
      </div>
    </div>
  );
}
