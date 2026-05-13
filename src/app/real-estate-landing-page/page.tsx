import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Home, User, BarChart3, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Landing Page — Get More Property Leads Online',
  description: 'Create a real estate landing page in 5 minutes. Property listings, agent profile, lead capture, local SEO. Export clean HTML.',
};

const features = [
  {
    icon: Home,
    title: 'Featured Listings',
    description: 'Showcase your best properties with beds, area, and price. Filter by type and location to help buyers find their dream home.',
  },
  {
    icon: User,
    title: 'Agent Profile',
    description: 'Build trust with a professional agent bio, photo, certifications, and direct contact information.',
  },
  {
    icon: BarChart3,
    title: 'Market Stats',
    description: 'Display local market data — average prices, days on market, and inventory trends that position you as the local expert.',
  },
  {
    icon: Mail,
    title: 'Lead Capture Form',
    description: 'Convert visitors into clients with a strategically placed inquiry form. Collect name, email, budget, and property preferences.',
  },
];

const included = [
  'Responsive navigation with logo and CTA',
  'Hero section with property search bar',
  'Featured listings grid with beds / area / price',
  'Market stats section (avg. price, days on market, homes sold)',
  'Agent profile and contact section',
  'Lead capture form with budget selector',
  'Final CTA with gradient background',
  'SEO-optimized meta tags and semantic HTML',
];

const comparisons = [
  {
    us: 'Pre-built real estate sections — listings, agent, stats',
    others: 'Generic sections you have to customize from scratch',
  },
  {
    us: 'Property cards with beds, area, price baked in',
    others: 'Blank cards — you add every field manually',
  },
  {
    us: 'Mobile-first, tested on all devices',
    others: 'Looks OK on desktop, broken on mobile',
  },
  {
    us: 'Export clean HTML, host anywhere',
    others: 'Locked into their platform forever',
  },
  {
    us: 'One-time payment, no subscription',
    others: 'Monthly fees that never stop',
  },
];

const faqs = [
  {
    question: 'Can I customize the property listing fields?',
    answer: 'Yes. The template uses clear variable names for beds, area, price, and location. You can add or remove fields to match your market — no code restructuring needed.',
  },
  {
    question: 'Does it work for commercial real estate?',
    answer: 'Absolutely. Just swap residential labels (beds, baths) for commercial ones (sqft, zoning). The layout and lead capture form work for any property type.',
  },
  {
    question: 'How do I collect leads from the form?',
    answer: 'The form posts to any endpoint you choose — your own API, Formspree, Netlify Forms, or any backend. Just update the action URL in the editor.',
  },
  {
    question: 'Can I add more listings later?',
    answer: 'Yes. The listings are data-driven — just duplicate a listing card and update the details. No design work needed. The grid auto-adjusts.',
  },
];

export default function RealEstateLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Badge className="mb-6" variant="secondary">
            Real Estate Template
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Real Estate Landing Page
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Launch a property landing page in 5 minutes. Featured listings, agent
            profile, lead capture form, and local SEO — all included. Export
            clean HTML and host anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/editor/real-estate">
              <Button size="lg" className="text-lg px-8">
                Customize This Template
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="text-lg px-8">
                See What&apos;s Included
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything a Real Estate Page Needs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Purpose-built sections for property marketing — not generic blocks
              you have to bend to fit.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What&apos;s Included
            </h2>
            <p className="text-lg text-muted-foreground">
              Every section is production-ready and fully customizable in the
              visual editor.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-lg bg-white shadow-sm"
              >
                <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Template */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why This Template
            </h2>
            <p className="text-lg text-muted-foreground">
              Built for real estate professionals — not designers who also sell
              templates.
            </p>
          </div>
          <div className="space-y-6">
            {comparisons.map((row, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-4 items-stretch"
              >
                <div className="flex items-start gap-3 p-5 rounded-xl bg-indigo-50 border border-indigo-100">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{row.us}</span>
                </div>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-muted-foreground">{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <Card key={faq.question} className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-violet-600">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Selling Properties Online Today
          </h2>
          <p className="text-lg text-indigo-100 mb-10 max-w-xl mx-auto">
            Customize this template in the visual editor, export clean HTML, and
            launch your real estate landing page in minutes.
          </p>
          <Link href="/editor/real-estate">
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-white text-indigo-700 hover:bg-indigo-50"
            >
              Customize This Template
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
