import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://www.resonancegenesis.xyz";

const ogImageUrl = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Resonance Genesis",
  description:
    "Generative Chladni NFT collection. Stake Chladni Nodes and mine RE native power.",

  icons: {
    icon: [{ url: "/res.png", type: "image/png", sizes: "32x32" }],
    shortcut: "/res.png",
    apple: "/res.png",
  },

  openGraph: {
    title: "Resonance Genesis",
    description:
      "Generative Chladni NFT collection. Stake Chladni Nodes and mine RE native power.",
    url: siteUrl,
    siteName: "Resonance Genesis",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Resonance Genesis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Resonance Genesis",
    description:
      "Generative Chladni NFT collection. Stake Chladni Nodes and mine RE native power.",
    images: [ogImageUrl],
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
      data-theme="terminal-matrix-sand"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}