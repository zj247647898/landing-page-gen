import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Zap, Palette, Download, Star, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing Page Builder — Create Pages Without Code',
  description: 'Build landing pages in 5 minutes. 15 templates, live preview, export HTML. No coding, no signup, no subscription. Free to start.',
};

const features = [
  { icon: Palette, title: '9 Templates', desc: 'SaaS, e-commerce, app, course, consulting, AI tool, waitlist, portfolio, event' },
  { icon: Zap, title: 'Live Preview', desc: 'See every change instantly. No save button needed.' },
  { icon: Download, title: 'Export HTML', desc: 'Download clean HTML/CSS. Deploy anywhere.' },
  { icon: Shield, title: 'One-Time Payment', desc: 'No subscription. Pay once, keep forever.' },
];

const useCases = [
  { name: 'SaaS Product Launch', template: 'SaaS Modern', href: '/editor/saas-modern' },
  { name: 'Online Store', template: 'E-Commerce Modern', href: '/editor/ecommerce-modern' },
  { name: 'Mobile App', template: 'App Launch', href: '/editor/app-launch' },
  { name: 'Online Course', template: 'Course Launch', href: '/editor/course-launch' },
  { name: 'Consulting Business', template: 'Consulting Pro', href: '/editor/consulting-pro' },
  { name: 'AI Product', template: 'AI Tool', href: '/editor/ai-tool' },
  { name: 'Pre-launch Waitlist', template: 'Waitlist', href: '/editor/waitlist' },
  { name: 'Freelancer Portfolio', template: 'Portfolio', href: '/editor/portfolio' },
  { name: 'Event / Conference', template: 'Event', href: '/editor/event' },
];

export default function LandingPageBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Landing Page Builder
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Create beautiful, high-converting landing pages without writing a single line of code. Pick a template, customize, and export production-ready HTML.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/editor/saas-modern">
                <Button size="lg">Start Free — No Signup <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {features.map((f) => (
              <Card key={f.title}>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Use cases */}
          <h2 className="text-2xl font-bold text-center mb-8">Templates for Every Use Case</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {useCases.map((uc) => (
              <Link key={uc.name} href={uc.href}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="font-medium">{uc.name}</div>
                    <div className="text-sm text-muted-foreground">{uc.template} template</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* How it differs */}
          <Card className="mb-16">
            <CardHeader><CardTitle>Why LP Gen over other builders?</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  'No subscription — one-time payment of ¥199 for Pro',
                  'Clean HTML export — no vendor lock-in, deploy anywhere',
                  'No signup required — start building immediately',
                  'No bloated code — fast loading, high PageSpeed scores',
                  'Mobile responsive — every template works on all devices',
                  'SEO optimized — proper meta tags, heading structure, semantic HTML',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center p-8 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl text-white">
            <h2 className="text-2xl font-bold mb-3">Ready to build?</h2>
            <p className="text-indigo-100 mb-6">Start with our free template. No signup, no credit card.</p>
            <Link href="/editor/saas-modern">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                Start Building Free <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
