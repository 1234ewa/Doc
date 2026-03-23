import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Studio North — Set Design & Fabrication",
    template: "%s — Studio North",
  },
  description:
    "Technical design, fabrication and build partner for live events and premium retail experiences worldwide.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Studio North — Set Design & Fabrication",
    description:
      "Technical design, fabrication and build partner for live events and premium retail experiences worldwide.",
    type: "website",
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
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}

