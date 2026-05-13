import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Headphones, Mic2, ListChecks, Rss } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Podcast Landing Page — Grow Your Audience & Subscribers',
  description: 'Create a podcast landing page in 5 minutes. Episode highlights, subscribe links, host bio, and reviews. No coding. Export clean HTML.',
};

const features = [
  {
    icon: Headphones,
    title: 'Episode Highlights',
    desc: 'Feature your latest or best episodes with titles, descriptions, and play buttons. Hook new listeners from the first scroll.',
  },
  {
    icon: Rss,
    title: 'Subscribe Links',
    desc: 'One-click links to Apple Podcasts, Spotify, Google Podcasts, and more. Make subscribing effortless on every platform.',
  },
  {
    icon: Mic2,
    title: 'Host Bio & Social',
    desc: 'Introduce yourself and co-hosts. Link to social profiles so listeners can connect and follow beyond the show.',
  },
  {
    icon: ListChecks,
    title: 'Episode Directory',
    desc: 'Organized list of episodes with search-friendly structure. Great for SEO and helping listeners find specific topics.',
  },
];

const included = [
  'Sticky navigation with podcast name and subscribe button',
  'Hero section with show tagline and latest episode CTA',
  'Episode highlights carousel or grid',
  'Subscribe links for all major platforms',
  'Host bio with photo and social links',
  'Listener reviews and testimonials section',
  'Subscribe call-to-action block',
  'Footer with links and RSS feed',
];

const advantages = [
  { label: 'No monthly fees', vs: 'Podcast website builders charge $12–49/month' },
  { label: 'Clean HTML export', vs: 'No platform lock-in, own your site' },
  { label: 'One-time payment', vs: 'Keep your budget for better equipment' },
  { label: 'SEO-optimized', vs: 'Rank for your show name and topics' },
];

const faqs = [
  {
    q: 'Do I need coding skills to use this template?',
    a: 'No. Our visual editor lets you customize everything — show name, episode details, colors, images — without writing code. Export clean HTML when you\'re ready to publish.',
  },
  {
    q: 'Can I add my Apple Podcasts and Spotify links?',
    a: 'Absolutely. The subscribe section supports links to Apple Podcasts, Spotify, Google Podcasts, Amazon Music, YouTube, and any other platform with a URL.',
  },
  {
    q: 'How do I add new episodes after launch?',
    a: 'Open the editor, update the episode section, and re-export. Since it\'s clean HTML, you can also edit the files directly — no proprietary backend required.',
  },
  {
    q: 'Is this template good for podcast SEO?',
    a: 'Yes. The template uses proper heading hierarchy, structured content sections, and fast-loading static HTML — all key factors for search engine ranking.',
  },
];

const relatedTemplates = [
  { id: 'event', name: 'Event' },
  { id: 'portfolio', name: 'Portfolio' },
  { id: 'consulting-pro', name: 'Consulting Pro' },
];

export default function PodcastLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge className="mb-4" variant="secondary">Podcast Template</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Podcast Landing Page
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Create a podcast landing page in 5 minutes. Episode highlights, subscribe links, host bio, and listener reviews — no coding required. Export clean HTML.
          </p>
          <Link href="/editor/podcast">
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Everything Your Podcast Needs Online</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <Card key={f.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-violet-50">
                      <f.icon className="w-5 h-5 text-violet-600" />
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
                    <Check className="w-4 h-4 text-violet-600 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Grow Your Audience?</h2>
            <p className="text-violet-100 mb-6 max-w-lg mx-auto">
              Build your podcast landing page now. Customize in minutes, export clean HTML, and give listeners a home base for your show.
            </p>
            <Link href="/editor/podcast">
              <Button size="lg" className="text-lg px-8 h-14 bg-white text-violet-600 hover:bg-violet-50">
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
                <Badge variant="outline" className="text-sm py-1.5 px-3 cursor-pointer hover:bg-violet-50 transition-colors">
                  {t.name}
                </Badge>
              </Link>
            ))}
            <Link href="/html-templates">
              <Badge variant="outline" className="text-sm py-1.5 px-3 cursor-pointer hover:bg-violet-50 transition-colors">
                All Templates
              </Badge>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
