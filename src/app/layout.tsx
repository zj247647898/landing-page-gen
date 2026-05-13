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
  description: "Create beautiful, high-converting landing pages without coding. 9 templates, live preview, export clean HTML. One-time payment ¥199, keep forever.",
  keywords: ["landing page builder", "landing page generator", "HTML exporter", "no code", "SaaS template", "landing page templates", "free landing page", "HTML template", "landing page maker"],
  openGraph: {
    title: "LP Gen — Ship your landing page in 5 minutes",
    description: "9 templates. Live preview. Export clean HTML. No coding needed.",
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
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              LP Gen
            </Link>
            <nav className="flex items-center gap-2 md:gap-6">
              <Link href="/" className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Templates
              </Link>
              <Link href="/toolkit" className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Toolkit
              </Link>
              <Link href="/services" className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/free-tools" className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Free Tools
              </Link>
              <Link href="/free-seo-audit" className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Free Audit
              </Link>
              <Link href="/pay" className="text-sm font-medium bg-indigo-600 text-white px-3 md:px-4 py-1.5 rounded-md hover:bg-indigo-700 transition-colors">
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
