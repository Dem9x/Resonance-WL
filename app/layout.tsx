import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Resonance Genesis",
  description: "Generative cymatics NFT collection and Chladni Node miner dashboard.",
  
  // TAMBAHKAN SETTINGAN ICONS TRANSPARAN DI SINI
  icons: {
    icon: [
// Otomatis mengarah ke public/favicon.ico
      { url: "/res.png", type: "image/png", sizes: "32x32" } 
    ],
  },

  openGraph: {
    title: "Resonance Genesis",
    description: "Generative cymatics NFT collection and Chladni Node miner dashboard.",
    url: "/",
    siteName: "Resonance Genesis",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Resonance Genesis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resonance Genesis",
    description: "Generative cymatics NFT collection and Chladni Node miner dashboard.",
    images: ["/og-image.png"],
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
        </ThemeProvider>
      </body>
    </html>
  );
}