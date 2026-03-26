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
  title: "Curso de Prótese Capilar Profissional | Rafael Bion",
  description:
    "Torne-se um especialista em prótese capilar. Curso completo com Rafael Bion — mais de 10 anos de experiência transformando vidas.",
  keywords: [
    "prótese capilar",
    "curso prótese capilar",
    "especialista prótese capilar",
    "Rafael Bion",
    "curso barbeiro",
  ],
  openGraph: {
    title: "Curso de Prótese Capilar Profissional | Rafael Bion",
    description:
      "Domine a técnica de prótese capilar e entre em um mercado em crescimento.",
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
