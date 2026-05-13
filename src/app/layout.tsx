import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing Page Generator - Build & Export in Minutes",
  description: "Create beautiful, high-converting landing pages without coding. Choose a template, customize, and export clean HTML. One-time payment, keep forever.",
  keywords: ["landing page builder", "landing page generator", "HTML exporter", "no code", "SaaS template"],
  openGraph: {
    title: "Landing Page Generator",
    description: "Build beautiful landing pages in minutes",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              LP Gen
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Templates
              </Link>
              <Link href="/toolkit" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Toolkit
              </Link>
              <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
