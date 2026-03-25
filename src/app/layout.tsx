import type { Metadata } from "next";
import { Barlow_Condensed, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const roboto = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guia Prático de Auto Manutenção em Prótese Capilar | Rafael Bion",
  description:
    "Aprenda a fazer sua própria manutenção de prótese capilar com segurança, economia e autonomia. Passo a passo completo por Rafael Bion.",
  keywords: [
    "prótese capilar",
    "manutenção prótese capilar",
    "auto manutenção capilar",
    "Rafael Bion",
    "curso prótese capilar",
  ],
  openGraph: {
    title: "Guia Prático de Auto Manutenção em Prótese Capilar",
    description:
      "O passo a passo completo para remover, limpar e reaplicar sua prótese — sem depender de ninguém.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${barlow.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
