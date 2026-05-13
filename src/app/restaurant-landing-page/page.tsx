import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, UtensilsCrossed, CalendarCheck, ImageIcon, Smartphone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Landing Page — Get More Reservations Online',
  description: 'Create a beautiful restaurant landing page in 5 minutes. Menu highlights, reservations, gallery, and contact. No coding. Export clean HTML.',
};

const features = [
  {
    icon: UtensilsCrossed,
    title: 'Menu Highlights',
    desc: 'Showcase your best dishes with beautiful sections. Add prices, descriptions, and dietary labels effortlessly.',
  },
  {
    icon: CalendarCheck,
    title: 'Online Reservations',
    desc: 'Let customers book a table directly from your page. Integrated reservation CTA that converts visitors into diners.',
  },
  {
    icon: ImageIcon,
    title: 'Photo Gallery',
    desc: 'Stunning image gallery to show off your ambiance, plating, and atmosphere. A picture is worth a thousand reservations.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    desc: 'Looks perfect on every device. 60% of restaurant searches happen on mobile — your page will be ready.',
  },
];

const included = [
  'Sticky navigation with your logo and menu links',
  'Hero section with headline, tagline, and reservation CTA',
  'Menu highlights grid with dish names and prices',
  'Photo gallery section with responsive layout',
  'Reservation call-to-action block',
  'Contact info section (address, phone, hours)',
];

const advantages = [
  { label: 'No monthly fees', vs: 'Other platforms charge $15–50/month forever' },
  { label: 'Clean HTML export', vs: 'Others lock you into their platform' },
  { label: 'One-time payment', vs: 'No recurring subscription surprises' },
  { label: 'Customizable colors', vs: 'Match your restaurant branding exactly' },
];

const faqs = [
  {
    q: 'Do I need coding skills to use this template?',
    a: 'No. Our visual editor lets you customize everything — text, colors, images, layout — without writing a single line of code. When you\'re done, export clean HTML with one click.',
  },
  {
    q: 'Can I change the colors to match my restaurant brand?',
    a: 'Absolutely. Pick from curated color palettes or enter your own hex codes. The entire template updates instantly — header, buttons, accents, all of it.',
  },
  {
    q: 'How do I receive reservations through the page?',
    a: 'The reservation CTA can link to your existing booking system (OpenTable, Resy, etc.) or a simple contact form. We support both approaches out of the box.',
  },
  {
    q: 'Where can I host my restaurant landing page?',
    a: 'Since you get clean HTML/CSS files, you can host anywhere — Netlify, Vercel, GitHub Pages, your own server, or even drop it into an existing WordPress site.',
  },
];

const relatedTemplates = [
  { id: 'consulting-pro', name: 'Consulting Pro' },
  { id: 'ecommerce-modern', name: 'E-Commerce Modern' },
  { id: 'event', name: 'Event' },
];

export default function RestaurantLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge className="mb-4" variant="secondary">Restaurant Template</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Restaurant Landing Page
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Create a stunning restaurant landing page in 5 minutes. Menu highlights, online reservations, photo gallery, and contact info — no coding required. Export clean HTML.
          </p>
          <Link href="/editor/restaurant">
            <Button size="lg" className="text-lg px-8 h-14">
              Build Your Page <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-3">No signup required — start free</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Everything Your Restaurant Needs Online</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <Card key={f.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-50">
                      <f.icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <CardTitle className="text-lg">{f.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card>
            <CardHeader><CardTitle>What&apos;s Included in This Template</CardTitle></CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why This Template */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why This Template Over Others</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a) => (
              <Card key={a.label} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="font-semibold mb-1">{a.label}</p>
                  <p className="text-xs text-muted-foreground">{a.vs}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.q}>
                <CardHeader>
                  <CardTitle className="text-base">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Get More Reservations?</h2>
            <p className="text-indigo-100 mb-6 max-w-lg mx-auto">
              Build your restaurant landing page now. Customize in minutes, export clean HTML, deploy anywhere.
            </p>
            <Link href="/editor/restaurant">
              <Button size="lg" className="text-lg px-8 h-14 bg-white text-indigo-600 hover:bg-indigo-50">
                Start Building <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Also check out */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-sm text-muted-foreground mb-3">Also check out</p>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedTemplates.map((t) => (
              <Link key={t.id} href={`/editor/${t.id}`}>
                <Badge variant="outline" className="text-sm py-1.5 px-3 cursor-pointer hover:bg-indigo-50 transition-colors">
                  {t.name}
                </Badge>
              </Link>
            ))}
            <Link href="/html-templates">
              <Badge variant="outline" className="text-sm py-1.5 px-3 cursor-pointer hover:bg-indigo-50 transition-colors">
                All Templates
              </Badge>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
