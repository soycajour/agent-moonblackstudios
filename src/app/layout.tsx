import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://agente.moonblackstudios.com'),
  title: "MoonBlack Studios — Infraestructura de Ventas para Roofing",
  description: "Sistema de calificación y captura de contratos de roofing en piloto automático. Solo 5 contratistas por zona. Acceso exclusivo.",
  openGraph: {
    title: "MoonBlack Studios — Infraestructura de Ventas para Roofing",
    description: "Sistema de calificación y captura de contratos de roofing en piloto automático. Solo 5 contratistas por zona. Acceso exclusivo.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MoonBlack Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MoonBlack Studios — Infraestructura de Ventas para Roofing",
    description: "Sistema de calificación y captura de contratos de roofing en piloto automático. Solo 5 contratistas por zona. Acceso exclusivo.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport = {
  themeColor: '#0D0D0D',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={manrope.variable}>
      <body>
        <a href="#main" style={{ position: 'absolute', left: '-9999px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }} className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
        <Script 
          src="https://widgets.leadconnectorhq.com/loader.js" 
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
          data-widget-id="6a108143c27f0b3d58206335"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

