import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CISA 2025 | VI Iberian Congress of Biological Systematics 2025",
    template: "%s | CISA 2025",
  },
  description:
    "VI Iberian Congress of Biological Systematics in Tenerife, Spain, October 27-30, 2025. Explore latest advances in systematics and evolutionary biology.",
  authors: [
    { name: "Shaun Nielsen", url: "https://www.shaunnielsen.com.au" },
    { name: "Marius Eisele" },
  ],
  metadataBase: new URL("https://cisaconference.org/"),
  openGraph: {
    type: "website",
    locale: "en_ES",
    url: "https://cisaconference.org/",
    siteName: "CISA 2025",
    images: [
      {
        url: "https://cisaconference.org/logo-og.png",
        width: 1200,
        height: 630,
        alt: "CISA 2025 conference banner",
      },
      {
        url: "https://cisaconference.org/logo-og-square-600.png",
        width: 600,
        height: 600,
        alt: "CISA 2025 conference banner",
      },
      {
        url: "https://cisaconference.org/logo-og-square-300.png",
        width: 300,
        height: 300,
        alt: "CISA 2025 conference banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // title: 'CISA 2025 | VI Iberian Congress of Biological Systematics 2025',
    // description: 'Join leading experts at the International Symposium on Artificial Intelligence (ISAI) 2026 in Madrid, Spain, October 26-28. Discover cutting-edge AI advancements and network with peers.',
    images: [
      "https://cisaconference.org/logo-og.svg",
      "https://cisaconference.org/logo-og-square-600.png",
      "https://cisaconference.org/logo-og-square-300.png"
    ],
  },
  icons: {
    icon: "/favicon.ico", // Default favicon
    apple: "/apple-touch-icon.png", // For iOS devices
    other: [
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
