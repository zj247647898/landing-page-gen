import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LayoutTemplate, Pencil, Download, ArrowRight, Check, Zap, Shield, Clock, Gift } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LP Gen on Product Hunt — 50% OFF Launch Special',
  description: 'Ship your landing page in 5 minutes. 15 templates, no code, export clean HTML. Product Hunt launch special: 50% off with code PH50.',
};

const templates = [
  { id: 'saas-modern', name: 'SaaS Modern', category: 'SaaS' },
  { id: 'ecommerce-modern', name: 'E-Commerce', category: 'E-Commerce' },
  { id: 'ai-tool', name: 'AI Tool', category: 'AI/ML' },
  { id: 'startup-launch', name: 'Startup Launch', category: 'Startup' },
  { id: 'restaurant', name: 'Restaurant', category: 'Food' },
  { id: 'podcast', name: 'Podcast', category: 'Media' },
];

const freeTools = [
  { name: 'Meta Tag Generator', href: '/free-tools/meta-tag-generator' },
  { name: 'OG Preview', href: '/free-tools/og-preview' },
  { name: 'Color Palette', href: '/free-tools/color-palette' },
  { name: 'QR Code Generator', href: '/free-tools/qr-code' },
  { name: 'JSON Formatter', href: '/free-tools/json-formatter' },
  { name: 'Base64 Encoder', href: '/free-tools/base64' },
];

export default function ProductHuntPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 text-center">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 flex-wrap">
          <Gift className="w-4 h-4" />
          <span className="font-semibold text-sm">Product Hunt Launch Special</span>
          <span className="text-sm">— ¥199 → ¥99 (50% OFF) — Use code <strong>PH50</strong></span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge className="mb-6 bg-orange-100 text-orange-700 border-orange-200 text-sm px-4 py-1">
            🎉 Product Hunt Launch Day
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Ship your landing page in 5 minutes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            15 templates. No code. Export clean HTML. No subscription — pay once, keep forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/editor/saas-modern">
              <Button size="lg" className="text-lg px-8 h-14 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                Try Free Template <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/html-templates">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                See All Templates
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">No signup required. Start building immediately.</p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white/60">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wide">Join makers who shipped faster</p>
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
            {[
              { num: '15', label: 'Templates' },
              { num: '6', label: 'Free Tools' },
              { num: '54', label: 'Pages' },
              { num: '0', label: 'Subscriptions' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-orange-600">{s.num}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: LayoutTemplate, title: '1. Pick a Template', desc: 'Choose from 15 industry-specific templates. SaaS, e-commerce, restaurant, podcast, and more.' },
              { icon: Pencil, title: '2. Customize Content', desc: 'Fill in your text, choose colors, add your brand. Live preview updates instantly.' },
              { icon: Download, title: '3. Export & Deploy', desc: 'Download clean HTML/CSS. Deploy to Vercel, Netlify, GitHub Pages — anywhere.' },
            ].map((step) => (
              <Card key={step.title} className="text-center border-orange-100">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                    <step.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">{step.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Template Showcase */}
      <section className="py-16 bg-white/60">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">15 Templates for Every Industry</h2>
          <p className="text-center text-muted-foreground mb-12">From SaaS to podcast — find the perfect starting point</p>
          <div className="grid md:grid-cols-3 gap-6">
            {templates.map((t) => (
              <Card key={t.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="w-fit">{t.category}</Badge>
                    {t.id === 'saas-modern' ? (
                      <Badge className="bg-green-100 text-green-700">FREE</Badge>
                    ) : (
                      <Badge className="bg-orange-100 text-orange-700">PRO</Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{t.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href={`/editor/${t.id}`}>
                    <Button className="w-full" variant={t.id === 'saas-modern' ? 'default' : 'outline'}>
                      {t.id === 'saas-modern' ? 'Try Free' : 'Preview'} <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/html-templates">
              <Button variant="link" className="text-orange-600">
                View all 15 templates <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Free Tools */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">6 Free Tools — No Signup</h2>
          <p className="text-center text-muted-foreground mb-12">Useful web dev tools, completely free</p>
          <div className="grid md:grid-cols-3 gap-4">
            {freeTools.map((tool) => (
              <Link key={tool.name} href={tool.href}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="py-6 text-center">
                    <p className="font-medium">{tool.name}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing with Launch Special */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Launch Special Pricing</h2>
          <p className="text-center text-muted-foreground mb-12">Use code <strong className="text-orange-600">PH50</strong> at checkout for 50% off</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Free</CardTitle>
                <div className="text-3xl font-bold">$0</div>
              </CardHeader>
              <CardContent className="space-y-3">
                {['SaaS Modern template', 'Live preview editor', 'No signup required', '6 free tools'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
                <Link href="/editor/saas-modern" className="block mt-4">
                  <Button className="w-full" variant="outline">Start Free</Button>
                </Link>
              </CardContent>
            </Card>
            {/* Pro - Launch Special */}
            <Card className="border-orange-300 border-2 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500">
                50% OFF — PH50
              </Badge>
              <CardHeader className="pt-4">
                <CardTitle className="text-xl">Pro</CardTitle>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">¥99</span>
                  <span className="text-lg text-muted-foreground line-through">¥199</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {['All 15 templates', 'HTML/CSS export (ZIP)', 'Commercial license', 'Mobile responsive', 'SEO optimized', 'One-time payment, no subscription'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
                <Link href="/pay?coupon=PH50" className="block mt-4">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    Get Pro — 50% OFF <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
          <div className="space-y-6">
            {[
              { q: 'What makes this different from Webflow/Framer?', a: 'LP Gen exports clean, standalone HTML — no platform lock-in, no monthly fees, no JavaScript bloat. You own the code and can deploy anywhere.' },
              { q: 'Is the SaaS template really free?', a: 'Yes! The SaaS Modern template is completely free to use. No signup, no credit card. Just click and start building.' },
              { q: 'Can I host the exported pages anywhere?', a: 'Absolutely. The exported HTML/CSS has zero dependencies. Deploy to GitHub Pages, Netlify, Vercel, S3, or any static hosting.' },
              { q: 'What does "clean HTML" mean?', a: 'No framework dependencies, no inline styles, no JavaScript bloat. Pure semantic HTML + Tailwind CSS. PageSpeed scores consistently 95+.' },
            ].map((faq) => (
              <Card key={faq.q}>
                <CardHeader><CardTitle className="text-base">{faq.q}</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">{faq.a}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to ship your landing page?</h2>
          <p className="text-lg opacity-90 mb-8">Join makers who build and launch in minutes, not days.</p>
          <Link href="/editor/saas-modern">
            <Button size="lg" className="text-lg px-10 h-14 bg-white text-orange-600 hover:bg-orange-50">
              Start Building Free <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <p className="text-sm opacity-75 mt-4">No signup. No credit card. Just build.</p>
        </div>
      </section>

      {/* Also check out */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-sm text-muted-foreground">
            Also check out: {' '}
            <Link href="/html-templates" className="text-orange-600 hover:underline">All 15 Templates</Link>
            {' · '}
            <Link href="/free-tools" className="text-orange-600 hover:underline">Free Tools</Link>
            {' · '}
            <Link href="/pricing" className="text-orange-600 hover:underline">Pricing</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
