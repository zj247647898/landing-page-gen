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
  title: {
    default: "LP Gen — Landing Page Generator | Build & Export in 5 Minutes",
    template: "%s | LP Gen",
  },
  description: "Create beautiful, high-converting landing pages without coding. 15 templates, live preview, export clean HTML. One-time payment ¥199, keep forever.",
  keywords: ["landing page builder", "landing page generator", "HTML exporter", "no code", "SaaS template", "landing page templates", "free landing page", "HTML template", "landing page maker"],
  openGraph: {
    title: "LP Gen — Ship your landing page in 5 minutes",
    description: "15 templates. Live preview. Export clean HTML. No coding needed.",
    type: "website",
    url: "https://zj247647898.github.io/landing-page-gen",
  },
  twitter: {
    card: "summary_large_image",
    title: "LP Gen — Landing Page Generator",
    description: "Ship your landing page in 5 minutes. No coding.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="manifest" href="/landing-page-gen/manifest.json" />
        <meta name="theme-color" content="#4F46E5" />
      </head>
      <body className="min-h-full flex flex-col">
        <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              LP Gen
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/html-templates" className="hidden md:inline text-sm text-muted-foreground hover:text-foreground transition-colors">
                Templates
              </Link>
              <Link href="/free-tools" className="hidden md:inline text-sm text-muted-foreground hover:text-foreground transition-colors">
                Free Tools
              </Link>
              <Link href="/pricing" className="hidden md:inline text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="/pay" className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-4 py-1.5 rounded-lg hover:from-indigo-700 hover:to-violet-700 transition-all">
                Get Pro
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
