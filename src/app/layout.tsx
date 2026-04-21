import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KSPLOITX | Full-Stack · AI · Security",
  description:
    "Personal portfolio of Khushneet Singh (KSPLOITX) — Full-stack developer and AI engineer building intelligent systems at the intersection of security, machine learning, and scalable architecture.",
  openGraph: {
    title: "KSPLOITX | Full-Stack · AI · Security",
    description:
      "Full-stack developer and AI engineer building intelligent systems at the intersection of security, machine learning, and scalable architecture.",
    type: "website",
    locale: "en_US",
    url: "https://ksploitx.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "KSPLOITX | Full-Stack · AI · Security",
    description:
      "Full-stack developer and AI engineer. Security · AI · Hardware.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground scanline-overlay">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
