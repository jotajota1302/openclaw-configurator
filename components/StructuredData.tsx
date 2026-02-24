export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Skillia",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "9.99",
      highPrice: "99",
      offerCount: "3",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    description:
      "Asistente personal IA disponible 24/7 en WhatsApp, Telegram y Discord. Configura tu asistente en menos de 10 minutos sin conocimientos técnicos.",
    screenshot: "https://skillia.app/screenshot.png",
    author: {
      "@type": "Organization",
      name: "Skillia",
    },
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Skillia",
    url: "https://skillia.app",
    logo: "https://skillia.app/logo.png",
    sameAs: [
      "https://twitter.com/skillia",
      "https://github.com/skillia",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@skillia.app",
      contactType: "Customer Support",
      areaServed: "ES",
      availableLanguage: ["Spanish", "English"],
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Necesito saber programar para usar Skillia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, para nada. Skillia está diseñado para que cualquier persona pueda configurar su asistente sin conocimientos técnicos. Solo necesitas seguir los pasos del configurador y listo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es seguro? ¿Quién tiene acceso a mis conversaciones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Totalmente seguro. Solo tú tienes acceso a tu asistente. Tus conversaciones son privadas y están protegidas. Por defecto, el asistente solo responde a tu cuenta, y puedes añadir personas de confianza a una lista de acceso si lo deseas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué canales de mensajería soporta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Actualmente soportamos Telegram, WhatsApp y Discord. Telegram es el más fácil de configurar (toma menos de 5 minutos). WhatsApp y Discord requieren algunos pasos adicionales pero también son sencillos de conectar.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo cancelar mi suscripción cuando quiera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, puedes cancelar en cualquier momento desde tu dashboard. No hay permanencia ni penalizaciones. Si cancelas, tu asistente seguirá funcionando hasta el final del período que ya pagaste.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}
