import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, Eye, Palette, QrCode, Braces, FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Web Tools — Meta Tags, OG Preview, Color Palettes, QR Code, JSON, Base64',
  description: 'Free online tools for web developers and marketers. Generate meta tags, preview Open Graph cards, create color palettes, generate QR codes, format JSON, and encode/decode Base64.',
};

const tools = [
  {
    title: 'Meta Tag Generator',
    description: 'Generate SEO-ready meta tags including Open Graph and Twitter Cards. Real-time character count and Google preview.',
    href: '/free-tools/meta-tag-generator',
    icon: Code,
    tag: 'SEO',
  },
  {
    title: 'OG Preview',
    description: 'Preview how your links look on Twitter, Facebook, LinkedIn, and Slack before you share them.',
    href: '/free-tools/og-preview',
    icon: Eye,
    tag: 'Social',
  },
  {
    title: 'Color Palette Generator',
    description: 'Curated color palettes and custom builder. Copy as CSS variables for your landing page.',
    href: '/free-tools/color-palette',
    icon: Palette,
    tag: 'Design',
  },
  {
    title: 'QR Code Generator',
    description: 'Generate QR codes for any URL or text. Customize colors, size, and download as PNG.',
    href: '/free-tools/qr-code',
    icon: QrCode,
    tag: 'Marketing',
  },
  {
    title: 'JSON Formatter',
    description: 'Format, validate, and minify JSON. Color-coded output with error detection and stats.',
    href: '/free-tools/json-formatter',
    icon: Braces,
    tag: 'Developer',
  },
  {
    title: 'Base64 Encode/Decode',
    description: 'Encode text to Base64 or decode Base64 to text. Real-time conversion with error handling.',
    href: '/free-tools/base64',
    icon: FileText,
    tag: 'Developer',
  },
];

export default function FreeToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">100% Free</Badge>
            <h1 className="text-4xl font-bold mb-4">Free Web Tools</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              No signup. No limits. Build better websites with these free tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tools.map((tool) => (
              <Card key={tool.title} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <tool.icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <Badge variant="outline">{tool.tag}</Badge>
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                  <Link href={tool.href}>
                    <Button className="w-full">Use Free <ArrowRight className="w-4 h-4 ml-1" /></Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Also mention other free tools */}
          <div className="text-center p-6 bg-indigo-50 rounded-xl mb-8">
            <h3 className="font-bold text-lg mb-2">Also try our Free SEO Audit</h3>
            <p className="text-sm text-muted-foreground mb-4">Enter any URL and get an instant SEO health check.</p>
            <Link href="/free-seo-audit"><Button variant="outline">Free SEO Audit →</Button></Link>
          </div>

          {/* Pro CTA */}
          <div className="text-center p-8 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl text-white">
            <h3 className="font-bold text-xl mb-2">Need landing page templates?</h3>
            <p className="text-indigo-100 mb-4">15 industry-specific templates. Customize, preview, export clean HTML.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/editor/saas-modern">
                <Button className="bg-white text-indigo-600 hover:bg-indigo-50">Try Free Template</Button>
              </Link>
              <Link href="/html-templates">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">View All Templates →</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
