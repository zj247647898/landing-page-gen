import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Heart, Users, Globe, BarChart3 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nonprofit Website Template — Build Trust & Raise More',
  description: 'Create a professional nonprofit website in 5 minutes. Mission statement, donation CTA, impact stats, team, and events. No coding. Export clean HTML.',
};

const features = [
  {
    icon: Heart,
    title: 'Donation CTA',
    desc: 'Prominent, conversion-optimized donation section. Connect to Stripe, PayPal, or any payment processor with a single link.',
  },
  {
    icon: Users,
    title: 'Team & Board',
    desc: 'Showcase your team and board members. Build trust and credibility with real faces behind your mission.',
  },
  {
    icon: Globe,
    title: 'Impact Stories',
    desc: 'Share the change you make. Dedicated sections for impact stats, success stories, and beneficiary testimonials.',
  },
  {
    icon: BarChart3,
    title: 'Transparency Section',
    desc: 'Show where the money goes. Visual breakdown of fund allocation builds donor confidence and repeat giving.',
  },
];

const included = [
  'Sticky navigation with your nonprofit name and donate button',
  'Hero section with mission statement and donation CTA',
  'Impact statistics with animated counters',
  'Programs and initiatives showcase grid',
  'Team and board members section',
  'Upcoming events and volunteer opportunities',
  'Donation call-to-action block',
  'Footer with contact info and social links',
];

const advantages = [
  { label: 'No monthly fees', vs: 'Other platforms charge $20–75/month' },
  { label: 'Clean HTML export', vs: 'No vendor lock-in, deploy anywhere' },
  { label: 'One-time payment', vs: 'Save your budget for the mission' },
  { label: 'Customizable branding', vs: 'Match your organization\'s identity' },
];

const faqs = [
  {
    q: 'Do I need coding skills to use this template?',
    a: 'Not at all. Our visual editor lets you customize text, colors, images, and layout without writing code. When you\'re happy with the result, export clean HTML with one click.',
  },
  {
    q: 'Can I accept donations through the website?',
    a: 'Yes. The donation CTA can link to any payment processor — Stripe, PayPal, Givebutter, or a custom donation page. Just paste your link and it works.',
  },
  {
    q: 'Is this template accessible and WCAG-friendly?',
    a: 'The template follows accessibility best practices — proper heading hierarchy, alt text support, sufficient color contrast, and keyboard-navigable components.',
  },
  {
    q: 'Can I use this for free for our nonprofit?',
    a: 'You can try the template for free in our editor. The one-time Pro payment (¥199) gives you full customization and clean HTML export — far less than any monthly platform.',
  },
];

const relatedTemplates = [
  { id: 'consulting-pro', name: 'Consulting Pro' },
  { id: 'event', name: 'Event' },
  { id: 'portfolio', name: 'Portfolio' },
];

export default function NonprofitWebsitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge className="mb-4" variant="secondary">Nonprofit Template</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nonprofit Website Template
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Create a professional nonprofit website in 5 minutes. Mission statement, donation CTA, impact stats, team profiles, and events — no coding required. Export clean HTML.
          </p>
          <Link href="/editor/nonprofit">
            <Button size="lg" className="text-lg px-8 h-14">
              Build Your Website <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-3">No signup required — start free</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Built for Mission-Driven Organizations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <Card key={f.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-50">
                      <f.icon className="w-5 h-5 text-emerald-600" />
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
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Amplify Your Mission?</h2>
            <p className="text-emerald-100 mb-6 max-w-lg mx-auto">
              Build your nonprofit website now. Customize in minutes, export clean HTML, deploy anywhere. Every dollar saved on web platforms goes toward your cause.
            </p>
            <Link href="/editor/nonprofit">
              <Button size="lg" className="text-lg px-8 h-14 bg-white text-emerald-600 hover:bg-emerald-50">
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
                <Badge variant="outline" className="text-sm py-1.5 px-3 cursor-pointer hover:bg-emerald-50 transition-colors">
                  {t.name}
                </Badge>
              </Link>
            ))}
            <Link href="/html-templates">
              <Badge variant="outline" className="text-sm py-1.5 px-3 cursor-pointer hover:bg-emerald-50 transition-colors">
                All Templates
              </Badge>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
