// app/layout.tsx
import "./globals.css"; // ✅ car maintenant il est dans le même dossier




import type { Metadata } from "next";
import { Geist } from "next/font/google";

// Importation de la police Geist (ou change si tu veux une autre)
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "DOK PLAYER",
  description: "Votre application IPTV moderne et sécurisée",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="background">

        {children}
      </body>
    </html>
  );
}
