import Link from "next/link";
import UseCaseCard from "@/components/landing/UseCaseCard";
import TestimonialCard from "@/components/landing/TestimonialCard";
import FAQItem from "@/components/landing/FAQItem";
import StructuredData from "@/components/StructuredData";

// Hero Robot Icon
function AssistantIcon() {
  return (
    <div className="relative inline-block animate-float">
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-2xl scale-150" />
      {/* Main icon container */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm">
        {/* Robot/Assistant Icon */}
        <svg
          className="w-20 h-20 sm:w-28 sm:h-28 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
          />
        </svg>
      </div>
    </div>
  );
}

// Feature cards data
const BENEFITS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Responde al Instante",
    desc: "Disponible 24/7, nunca duerme, siempre listo para ayudarte",
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "En tu Mensajería Favorita",
    desc: "Funciona en WhatsApp, Telegram y Discord",
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "Privado y Seguro",
    desc: "Solo tú tienes acceso, tus datos están protegidos",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
    text: "text-violet-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "Sin Programar",
    desc: "Configúralo en minutos, sin conocimientos técnicos",
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
    text: "text-amber-400",
  },
];

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-slate-950">
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 dot-pattern" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-cyan-500/[0.07] via-blue-500/[0.05] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-t from-violet-500/[0.05] to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl w-full px-6 py-16 sm:py-24 space-y-12 text-center">
          {/* Assistant Icon */}
          <div className="flex justify-center animate-fadeIn">
            <AssistantIcon />
          </div>

          {/* Main Headline */}
          <div className="space-y-6 animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Tu Asistente Personal IA,
              <br />
              <span className="gradient-text-animated">Disponible 24/7</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Como tener un ayudante que nunca duerme, directamente en tu{" "}
              <span className="text-white font-semibold">WhatsApp</span> o{" "}
              <span className="text-white font-semibold">Telegram</span>
            </p>
          </div>

          {/* Primary CTA */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fadeInUp"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
          >
            <Link
              href="/pricing"
              className="btn-primary inline-flex items-center justify-center gap-3 px-12 py-5 text-lg font-bold animate-pulseGlow rounded-xl"
            >
              Ver Planes y Precios
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="#benefits"
              className="btn-ghost inline-flex items-center justify-center gap-2 px-10 py-5 text-lg"
            >
              Descubre más
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </Link>
          </div>

          {/* Trust Badge */}
          <div
            className="animate-fadeIn"
            style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-sm text-slate-400">
              <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Listo en menos de 10 minutos · Sin tarjeta de crédito para probar
            </span>
          </div>

          {/* Social Proof Numbers */}
          <div
            className="pt-8 grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fadeIn"
            style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}
          >
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">500+</div>
              <div className="text-sm text-slate-400">Asistentes Activos</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">10K+</div>
              <div className="text-sm text-slate-400">Mensajes Procesados</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">4.8/5</div>
              <div className="text-sm text-slate-400">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
      <section id="benefits" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              ¿Por qué <span className="gradient-text">Skillia</span>?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Tu asistente personal IA que te ayuda en tu día a día
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, i) => (
              <div
                key={benefit.title}
                className="group glass-card p-8 hover:scale-[1.03] hover:shadow-xl hover:shadow-black/20 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "backwards" }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} ${benefit.border} border flex items-center justify-center ${benefit.text} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                {/* Content */}
                <h3 className="font-semibold text-xl mb-3 text-white">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== USE CASES SECTION ========== */}
      <section id="use-cases" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              ¿Para qué puedes usar <span className="gradient-text">Skillia</span>?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Casos reales de personas que ya usan su asistente personal IA
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <UseCaseCard
              icon="📅"
              title="Uso Personal"
              description="Organiza tu día a día sin esfuerzo"
              userName="María García"
              userRole="Diseñadora freelance"
              example="Cada mañana le pregunto a mi asistente qué tengo pendiente hoy. Me recuerda reuniones, me dice el clima y me ayuda a priorizar tareas. Es como tener un secretario personal."
              gradient="from-cyan-500 to-blue-600"
              delay={0}
            />
            <UseCaseCard
              icon="💼"
              title="Uso Profesional"
              description="Encuentra información al instante"
              userName="Carlos Ruiz"
              userRole="Consultor de marketing"
              example="Lo uso para buscar datos de mercado, analizar tendencias y generar ideas para campañas. Me ahorra horas de investigación cada semana."
              gradient="from-purple-500 to-pink-600"
              delay={0.1}
            />
            <UseCaseCard
              icon="👥"
              title="Equipos"
              description="Responde clientes automáticamente"
              userName="Equipo Ventas"
              userRole="Startup tecnológica"
              example="Nuestro asistente responde preguntas frecuentes de clientes en Telegram 24/7. Nos liberó tiempo para enfocarnos en cierres importantes."
              gradient="from-emerald-500 to-teal-600"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section id="testimonials" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Lo que dicen nuestros <span className="gradient-text">usuarios</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Más de 500 personas ya confían en Skillia para su día a día
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="No puedo creer lo fácil que fue configurarlo. En 10 minutos tenía mi asistente funcionando en Telegram. Ahora es parte esencial de mi rutina diaria."
              author="Ana López"
              role="Emprendedora"
              rating={5}
              delay={0}
            />
            <TestimonialCard
              quote="Lo mejor es que no necesité saber nada de programación. Seguí los pasos y listo. Mi asistente me ayuda con recordatorios y búsquedas todos los días."
              author="Jorge Martínez"
              role="Estudiante de medicina"
              rating={5}
              delay={0.1}
            />
            <TestimonialCard
              quote="Como freelance, necesitaba algo que me ayudara sin gastar una fortuna. Skillia es perfecto: asequible, fácil de usar y realmente útil."
              author="Laura Sánchez"
              role="Desarrolladora web"
              rating={5}
              delay={0.2}
            />
            <TestimonialCard
              quote="Configuré el asistente para mi equipo y ahora respondemos clientes mucho más rápido. La inversión se paga sola con el tiempo que ahorramos."
              author="Pedro Ramírez"
              role="CEO, TechStartup"
              rating={5}
              delay={0.3}
            />
            <TestimonialCard
              quote="Me encanta poder hacer preguntas directamente en WhatsApp. Es súper cómodo y las respuestas son rápidas y precisas. 100% recomendado."
              author="Carmen Díaz"
              role="Profesora"
              rating={5}
              delay={0.4}
            />
            <TestimonialCard
              quote="Al principio era escéptico, pero después de probarlo una semana no puedo imaginar volver atrás. Es como tener un ayudante que nunca descansa."
              author="Miguel Torres"
              role="Gerente de proyectos"
              rating={5}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Empieza a usar tu asistente{" "}
            <span className="gradient-text-animated">hoy mismo</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Configura tu asistente en menos de 10 minutos y empieza a delegar tareas. Sin compromisos, cancela cuando quieras.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/pricing"
              className="btn-primary inline-flex items-center justify-center gap-3 px-12 py-5 text-lg font-bold animate-pulseGlow rounded-xl"
            >
              Ver Planes
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="#faq"
              className="btn-ghost inline-flex items-center justify-center gap-2 px-10 py-5 text-lg"
            >
              ¿Tienes dudas?
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Sin permanencia
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Cancela cuando quieras
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Soporte en español
            </span>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section id="faq" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Preguntas <span className="gradient-text">Frecuentes</span>
            </h2>
            <p className="text-xl text-slate-400">
              Todo lo que necesitas saber sobre Skillia
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            <FAQItem
              question="¿Necesito saber programar para usar Skillia?"
              answer="No, para nada. Skillia está diseñado para que cualquier persona pueda configurar su asistente sin conocimientos técnicos. Solo necesitas seguir los pasos del configurador y listo."
              delay={0}
            />
            <FAQItem
              question="¿Es seguro? ¿Quién tiene acceso a mis conversaciones?"
              answer="Totalmente seguro. Solo tú tienes acceso a tu asistente. Tus conversaciones son privadas y están protegidas. Por defecto, el asistente solo responde a tu cuenta, y puedes añadir personas de confianza a una lista de acceso si lo deseas."
              delay={0.05}
            />
            <FAQItem
              question="¿Qué canales de mensajería soporta?"
              answer="Actualmente soportamos Telegram, WhatsApp y Discord. Telegram es el más fácil de configurar (toma menos de 5 minutos). WhatsApp y Discord requieren algunos pasos adicionales pero también son sencillos de conectar."
              delay={0.1}
            />
            <FAQItem
              question="¿Puedo cancelar mi suscripción cuando quiera?"
              answer="Sí, puedes cancelar en cualquier momento desde tu dashboard. No hay permanencia ni penalizaciones. Si cancelas, tu asistente seguirá funcionando hasta el final del período que ya pagaste."
              delay={0.15}
            />
            <FAQItem
              question="¿Cómo funciona el pago?"
              answer="Aceptamos pagos con tarjeta de crédito/débito a través de Stripe (plataforma segura usada por millones de empresas). Puedes elegir pago mensual o anual (con descuento de 2 meses gratis al pagar anualmente)."
              delay={0.2}
            />
            <FAQItem
              question="¿Hay límite de mensajes?"
              answer="Depende del plan. El plan Personal tiene un límite generoso de mensajes mensuales ideal para uso diario. Los planes Pro y Business tienen límites mucho más altos o ilimitados. Si necesitas más, siempre puedes hacer upgrade."
              delay={0.25}
            />
            <FAQItem
              question="¿Puedo cambiar de plan después?"
              answer="Sí, puedes hacer upgrade o downgrade cuando quieras desde tu dashboard. Si haces upgrade, solo pagas la diferencia prorrateada. Si haces downgrade, el cambio se aplica al siguiente ciclo de facturación."
              delay={0.3}
            />
            <FAQItem
              question="¿Qué pasa con mis datos si cancelo?"
              answer="Si cancelas, tu asistente deja de funcionar al final del período pagado. Tus datos de configuración se mantienen por 30 días por si decides volver. Después de 30 días, eliminamos toda tu información de forma permanente."
              delay={0.35}
            />
            <FAQItem
              question="¿Ofrecen soporte técnico?"
              answer="Sí, todos los planes incluyen soporte por email en español. Los planes Pro y Business tienen soporte prioritario con tiempos de respuesta más rápidos. También tenemos una documentación completa y tutoriales paso a paso."
              delay={0.4}
            />
            <FAQItem
              question="¿Puedo probar antes de pagar?"
              answer="Sí, ofrecemos una demo gratuita donde puedes chatear con un asistente de ejemplo para que veas cómo funciona. No requiere tarjeta de crédito. Si te gusta, puedes empezar con cualquier plan."
              delay={0.45}
            />
          </div>

          {/* CTA at the end of FAQ */}
          <div className="mt-16 text-center">
            <p className="text-slate-400 mb-6">¿Tienes otra pregunta?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@skillia.app"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Contáctanos
              </a>
              <Link
                href="/pricing"
                className="btn-ghost inline-flex items-center justify-center gap-2 px-8 py-4"
              >
                Ver Planes
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="relative border-t border-slate-800">
        <div className="absolute inset-0 bg-slate-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold gradient-text">Skillia</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <Link href="/pricing" className="hover:text-white transition-colors">
                Precios
              </Link>
              <Link href="#faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
              <a href="mailto:support@skillia.app" className="hover:text-white transition-colors">
                Contacto
              </a>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Términos
              </Link>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/skillia"
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/skillia"
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>&copy; 2026 Skillia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
