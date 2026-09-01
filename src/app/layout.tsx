import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Calculadora de Créditos Colombia — Simula tu cuota y conoce los intereses reales",
  description:
    "Simula cualquier crédito o préstamo en Colombia. Conoce la cuota mensual, total de intereses y sobrecosto real antes de endeudarte. Gratis y sin registro.",
  keywords: [
    "calculadora credito colombia",
    "simulador prestamo colombia",
    "cuota mensual credito",
    "calculadora intereses colombia",
    "tasa de usura colombia",
    "simulador credito gratis",
    "cuanto pago de intereses",
    "credito de consumo colombia",
  ],
  authors: [{ name: "CanonCodeCraft" }],
  openGraph: {
    title: "Calculadora de Créditos Colombia — ¿Cuánto pagarás realmente?",
    description:
      "Simula tu crédito y descubre los intereses reales antes de firmar. Gratis, sin registro.",
    url: "https://tudominio.com", // ← CAMBIA ESTO por tu dominio real
    siteName: "CanonCodeCraft",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Créditos Colombia",
    description:
      "¿Cuánto pagarás realmente? Simula tu crédito y ve los intereses antes de firmar.",
  },
  alternates: {
    canonical: "https://tudominio.com", // ← CAMBIA ESTO por tu dominio real
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO">
      <body className={geist.className}>{children}</body>
    </html>
  );
}