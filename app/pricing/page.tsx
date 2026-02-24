"use client";

import { useState } from "react";
import Link from "next/link";
import PricingCard from "@/components/pricing/PricingCard";
import { PLANS, calculateAnnualSavings } from "@/lib/plans";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const plans = [PLANS.personal, PLANS.pro, PLANS.business];

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header with back link */}
      <div className="relative border-b border-slate-800">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 dot-pattern" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-cyan-500/[0.05] via-blue-500/[0.03] to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Title */}
          <div className="text-center space-y-6 mb-12 animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Elige el plan perfecto para ti
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Sin permanencia. Cancela cuando quieras. Cambia de plan en cualquier momento.
            </p>
          </div>

          {/* Billing Toggle */}
          <div
            className="flex items-center justify-center gap-4 mb-16 animate-fadeInUp"
            style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
          >
            <span className={`text-sm ${billingPeriod === "monthly" ? "text-white font-semibold" : "text-slate-400"}`}>
              Mensual
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annual" : "monthly")}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                billingPeriod === "annual" ? "bg-cyan-500" : "bg-slate-700"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform ${
                  billingPeriod === "annual" ? "translate-x-7" : ""
                }`}
              />
            </button>
            <span className={`text-sm ${billingPeriod === "annual" ? "text-white font-semibold" : "text-slate-400"}`}>
              Anual
              <span className="ml-2 px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                2 meses gratis
              </span>
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                billingPeriod={billingPeriod}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>

          {/* Trust indicators */}
          <div
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400 animate-fadeInUp"
            style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Sin permanencia
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Pago seguro con Stripe
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Cancela en cualquier momento
            </span>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Compara todos los <span className="gradient-text">planes</span>
            </h2>
            <p className="text-xl text-slate-400">
              Encuentra el plan que mejor se adapta a tus necesidades
            </p>
          </div>

          <div className="glass-card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-6 text-slate-300 font-semibold">Características</th>
                  <th className="text-center p-6 text-slate-300 font-semibold">Personal</th>
                  <th className="text-center p-6 text-slate-300 font-semibold">
                    <div className="flex flex-col items-center">
                      <span>Pro</span>
                      <span className="text-xs text-cyan-400 font-normal">Recomendado</span>
                    </div>
                  </th>
                  <th className="text-center p-6 text-slate-300 font-semibold">Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="p-6 text-slate-300">Canales de mensajería</td>
                  <td className="p-6 text-center text-slate-400">1</td>
                  <td className="p-6 text-center text-white font-semibold">Todos</td>
                  <td className="p-6 text-center text-white font-semibold">Todos</td>
                </tr>
                <tr>
                  <td className="p-6 text-slate-300">Mensajes al mes</td>
                  <td className="p-6 text-center text-slate-400">1,000</td>
                  <td className="p-6 text-center text-white">10,000</td>
                  <td className="p-6 text-center text-white font-semibold">Ilimitados</td>
                </tr>
                <tr>
                  <td className="p-6 text-slate-300">Búsqueda web y clima</td>
                  <td className="p-6 text-center">
                    <svg className="w-5 h-5 text-cyan-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="p-6 text-center">
                    <svg className="w-5 h-5 text-cyan-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="p-6 text-center">
                    <svg className="w-5 h-5 text-cyan-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="p-6 text-slate-300">Integraciones avanzadas</td>
                  <td className="p-6 text-center text-slate-600">
                    <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="p-6 text-center">
                    <svg className="w-5 h-5 text-cyan-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="p-6 text-center">
                    <svg className="w-5 h-5 text-cyan-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="p-6 text-slate-300">Múltiples usuarios</td>
                  <td className="p-6 text-center text-slate-600">
                    <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="p-6 text-center text-slate-600">
                    <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="p-6 text-center">
                    <svg className="w-5 h-5 text-cyan-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="p-6 text-slate-300">Soporte</td>
                  <td className="p-6 text-center text-slate-400">Email</td>
                  <td className="p-6 text-center text-white">Prioritario</td>
                  <td className="p-6 text-center text-white font-semibold">24/7</td>
                </tr>
                <tr>
                  <td className="p-6 text-slate-300">SLA</td>
                  <td className="p-6 text-center text-slate-600">
                    <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="p-6 text-center text-slate-600">
                    <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="p-6 text-center">
                    <svg className="w-5 h-5 text-cyan-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ específica de pricing */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Preguntas sobre <span className="gradient-text">precios</span>
            </h2>
          </div>

          <div className="space-y-6 text-slate-300">
            <div className="glass-card p-6">
              <h3 className="font-semibold text-lg text-white mb-2">
                ¿Qué método de pago aceptan?
              </h3>
              <p className="text-slate-400">
                Aceptamos todas las tarjetas de crédito y débito principales (Visa, Mastercard, American Express) a través de Stripe, nuestra plataforma de pago segura.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold text-lg text-white mb-2">
                ¿Puedo cambiar de plan en cualquier momento?
              </h3>
              <p className="text-slate-400">
                Sí, puedes hacer upgrade o downgrade cuando quieras. Si haces upgrade, solo pagas la diferencia prorrateada. Si haces downgrade, el cambio se aplica en tu próximo ciclo de facturación.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold text-lg text-white mb-2">
                ¿Hay descuento para equipos grandes?
              </h3>
              <p className="text-slate-400">
                Para equipos de más de 10 personas o necesidades empresariales especiales, contáctanos en{" "}
                <a href="mailto:sales@skillia.app" className="text-cyan-400 hover:underline">
                  sales@skillia.app
                </a>{" "}
                para un plan personalizado.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold text-lg text-white mb-2">
                ¿Ofrecen reembolsos?
              </h3>
              <p className="text-slate-400">
                Sí, ofrecemos garantía de devolución de dinero de 14 días. Si no estás satisfecho por cualquier motivo, te devolvemos el 100% de tu pago, sin preguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-slate-300">
            Configura tu asistente en menos de 10 minutos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="btn-primary inline-flex items-center justify-center gap-3 px-12 py-5 text-lg font-bold animate-pulseGlow">
              Empezar ahora
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/#faq" className="btn-ghost inline-flex items-center justify-center gap-2 px-10 py-5 text-lg">
              Ver más FAQs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
