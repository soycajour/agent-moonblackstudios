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
  title: "MoonBlack Studios — Infraestructura de Ventas para Roofing",
  description: "Sistema de calificación y captura de contratos de roofing en piloto automático. Solo 5 contratistas por zona. Acceso exclusivo.",
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
          data-widget-id="69f187cf191334021634ba64"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

