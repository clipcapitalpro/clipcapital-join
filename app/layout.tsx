import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Join Clip Capital - Apply",
  description:
    "Apply to join Clip Capital. We move fast, play to win, and reward the ones who deliver.",
  icons: { icon: "/cc-logo-cyan.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${bricolage.variable}`}>
      <body>
        {children}
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
