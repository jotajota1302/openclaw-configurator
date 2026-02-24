export interface PricingPlan {
  id: string;
  name: string;
  price: number; // €/mes
  priceAnnual: number; // €/año
  description: string;
  features: string[];
  limitations?: string[];
  highlighted?: boolean;
  stripePriceIdMonthly?: string; // Se configurará después
  stripePriceIdAnnual?: string; // Se configurará después
  cta: string;
}

export const PLANS: Record<string, PricingPlan> = {
  personal: {
    id: "personal",
    name: "Personal",
    price: 9.99,
    priceAnnual: 99, // 2 meses gratis
    description: "Perfecto para uso personal básico",
    features: [
      "1 canal de mensajería (Telegram o WhatsApp)",
      "1,000 mensajes al mes",
      "Respuestas en segundos",
      "Búsqueda web y clima",
      "Recordatorios y tareas",
      "Personalización completa",
      "Soporte por email",
    ],
    limitations: ["1 canal", "1,000 mensajes/mes"],
    cta: "Empezar con Personal",
  },
  pro: {
    id: "pro",
    name: "Pro",
    price: 29.99,
    priceAnnual: 299, // 2 meses gratis
    description: "Para profesionales y freelancers",
    highlighted: true,
    features: [
      "Todos los canales (Telegram + WhatsApp + Discord)",
      "10,000 mensajes al mes",
      "Todo lo de Personal +",
      "Búsqueda avanzada y análisis",
      "Integraciones (GitHub, Email, Calendar)",
      "Respuestas prioritarias",
      "Soporte prioritario (< 24h)",
      "Análisis de uso",
    ],
    cta: "Empezar con Pro",
  },
  business: {
    id: "business",
    name: "Business",
    price: 99,
    priceAnnual: 990, // 2 meses gratis
    description: "Para equipos y empresas",
    features: [
      "Todo lo de Pro +",
      "Mensajes ilimitados",
      "Múltiples usuarios en allowlist",
      "Integraciones empresariales",
      "API personalizada",
      "Onboarding personalizado",
      "Soporte 24/7 prioritario",
      "SLA garantizado",
      "Reportes y analytics avanzados",
    ],
    cta: "Empezar con Business",
  },
};

export const PLAN_IDS = Object.keys(PLANS);

export function getPlan(planId: string): PricingPlan | undefined {
  return PLANS[planId];
}

export function calculateAnnualSavings(plan: PricingPlan): number {
  const monthlyTotal = plan.price * 12;
  const savings = monthlyTotal - plan.priceAnnual;
  return Math.round(savings);
}
