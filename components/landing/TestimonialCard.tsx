interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  rating?: number;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <div
      className="glass-card p-8 h-full flex flex-col animate-fadeInUp"
      style={{ animationDelay: `${delay}s`, animationFillMode: "backwards" }}
    >
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-amber-400" : "text-slate-600"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-slate-300 leading-relaxed mb-6 flex-grow">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-semibold text-lg">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-white">{author}</div>
          <div className="text-sm text-slate-400">{role}</div>
        </div>
      </div>
    </div>
  );
}
