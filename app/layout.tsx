import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WizardProvider } from "@/lib/wizard-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skillia - Tu Asistente Personal IA, Disponible 24/7",
  description: "Como tener un ayudante que nunca duerme, directamente en tu WhatsApp o Telegram. Configura tu asistente personal IA en menos de 10 minutos.",
  keywords: [
    "asistente IA",
    "asistente personal",
    "inteligencia artificial",
    "WhatsApp bot",
    "Telegram bot",
    "automatización",
    "productividad",
    "asistente virtual",
  ],
  authors: [{ name: "Skillia" }],
  creator: "Skillia",
  publisher: "Skillia",
  metadataBase: new URL("https://skillia.app"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://skillia.app",
    title: "Skillia - Tu Asistente Personal IA, Disponible 24/7",
    description: "Como tener un ayudante que nunca duerme, directamente en tu WhatsApp o Telegram. Configura tu asistente personal IA en menos de 10 minutos.",
    siteName: "Skillia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Skillia - Asistente Personal IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skillia - Tu Asistente Personal IA",
    description: "Como tener un ayudante que nunca duerme, directamente en tu WhatsApp o Telegram.",
    images: ["/og-image.png"],
    creator: "@skillia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        <WizardProvider>{children}</WizardProvider>
      </body>
    </html>
  );
}
