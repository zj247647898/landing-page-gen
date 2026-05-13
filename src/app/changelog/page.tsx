import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog — What\'s New',
  description: 'Latest updates and features added to LP Gen landing page generator.',
};

const updates = [
  {
    date: '2026-05-13',
    badge: 'New',
    title: '6 New Templates — Now 15 Total',
    items: [
      'Startup Launch template — Problem/Solution layout, early adopter pricing',
      'Restaurant / Café template — Menu highlights, reservations, warm design',
      'Fitness / Gym template — Classes, trainers, free trial CTA',
      'Real Estate template — Featured listings, agent contact, professional design',
      'Nonprofit / Charity template — Mission, impact stats, donation options',
      'Podcast template — Episodes, host info, subscribe platforms, dark theme',
    ],
  },
  {
    date: '2026-05-13',
    badge: 'Launch',
    title: 'LP Gen v1.0 — Public Launch',
    items: [
      '9 landing page templates (SaaS, E-Commerce, App, Course, Consulting, AI Tool, Waitlist, Portfolio, Event)',
      'Live preview editor with real-time customization',
      'HTML/CSS export as ZIP file',
      'Free SaaS Modern template — no signup needed',
      '3 free tools: Meta Tag Generator, OG Preview, Color Palette Generator',
      'Free SEO Audit tool',
      '9 SEO blog articles',
      'Pro Plan (¥199) and Agency Plan (¥699)',
      'Alipay payment with auto-activation',
      'Mobile responsive editor',
      'PWA support',
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Changelog</h1>
            <p className="text-muted-foreground">What&apos;s new in LP Gen</p>
          </div>

          <div className="space-y-8">
            {updates.map((update) => (
              <Card key={update.date}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm text-muted-foreground font-mono">{update.date}</span>
                    <Badge>{update.badge}</Badge>
                  </div>
                  <h2 className="text-xl font-bold mb-4">{update.title}</h2>
                  <ul className="space-y-2">
                    {update.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-indigo-600 mt-0.5">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
