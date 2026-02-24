import Link from "next/link";
import { PricingPlan } from "@/lib/plans";

interface PricingCardProps {
  plan: PricingPlan;
  billingPeriod: "monthly" | "annual";
  delay?: number;
}

export default function PricingCard({ plan, billingPeriod, delay = 0 }: PricingCardProps) {
  const price = billingPeriod === "monthly" ? plan.price : plan.priceAnnual / 12;
  const isAnnual = billingPeriod === "annual";
  const monthlySavings = isAnnual ? (plan.price * 12 - plan.priceAnnual) / 12 : 0;

  return (
    <div
      className={`glass-card p-8 hover:scale-[1.02] transition-all duration-300 animate-fadeInUp ${
        plan.highlighted ? "ring-2 ring-cyan-500/50 relative" : ""
      }`}
      style={{ animationDelay: `${delay}s`, animationFillMode: "backwards" }}
    >
      {/* Recommended Badge */}
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold">
            Recomendado
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-slate-400 text-sm">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-bold gradient-text">
            €{price.toFixed(2)}
          </span>
          <span className="text-slate-400">/mes</span>
        </div>
        {isAnnual && monthlySavings > 0 && (
          <p className="text-sm text-green-400 mt-2">
            Ahorras €{monthlySavings.toFixed(2)}/mes
          </p>
        )}
        {isAnnual && (
          <p className="text-xs text-slate-500 mt-1">
            Facturado anualmente (€{plan.priceAnnual})
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-slate-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href={`/checkout?plan=${plan.id}&billing=${billingPeriod}`}
        className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
          plan.highlighted
            ? "btn-primary animate-pulseGlow"
            : "bg-slate-700/50 hover:bg-slate-700 border border-slate-600"
        }`}
      >
        {plan.cta}
      </Link>

      {/* Fine print */}
      {plan.limitations && (
        <p className="text-xs text-slate-500 text-center mt-4">
          Límites: {plan.limitations.join(", ")}
        </p>
      )}
    </div>
  );
}
