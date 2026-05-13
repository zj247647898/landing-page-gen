import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, ListMusic, Bell, User, BarChart3 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Podcast Landing Page — Grow Your Audience Beyond Directories',
  description: 'Create a podcast landing page in 5 minutes. Episode listings, subscribe buttons, host profile, dark theme. Export clean HTML.',
};

const features = [
  {
    icon: ListMusic,
    title: 'Episode Listings',
    desc: 'Display your latest episodes in a clean, scannable layout. Show titles, descriptions, and playback links — keep listeners coming back for more.',
  },
  {
    icon: Bell,
    title: 'Subscribe Buttons',
    desc: 'One-click subscribe buttons for Apple Podcasts, Spotify, Google Podcasts, and more. Make it effortless for new listeners to follow your show.',
  },
  {
    icon: User,
    title: 'Host Profile',
    desc: 'Introduce yourself and co-hosts with a professional profile section. Build trust and connection before they even hit play.',
  },
  {
    icon: BarChart3,
    title: 'Listener Stats',
    desc: 'Showcase your reach with listener stats and social proof. Downloads, ratings, and featured mentions — let your numbers do the talking.',
  },
];

const included = [
  'Sticky navigation with your podcast logo and links',
  'Hero section with show tagline and subscribe CTA',
  'Latest episodes grid with titles and descriptions',
  'Subscribe buttons for all major podcast platforms',
  'Host profile section with photo and bio',
  'Listener stats and social proof block',
  'Dark theme optimized for media brands',
];

const advantages = [
  { label: 'No monthly fees', vs: 'Other platforms charge $15–50/month forever' },
  { label: 'Clean HTML export', vs: 'Others lock you into their platform' },
  { label: 'One-time payment', vs: 'No recurring subscription surprises' },
  { label: 'Dark theme ready', vs: 'Match your media brand aesthetic' },
];

const faqs = [
  {
    q: 'Do I need coding skills to use this template?',
    a: 'No. Our visual editor lets you customize everything — text, colors, images, layout — without writing a single line of code. When you\'re done, export clean HTML with one click.',
  },
  {
    q: 'Can I add subscribe buttons for my podcast platforms?',
    a: 'Absolutely. The template includes pre-styled subscribe buttons for Apple Podcasts, Spotify, Google Podcasts, and more. Just paste your show links and you\'re live.',
  },
  {
    q: 'How do I update episodes on my landing page?',
    a: 'Open the editor, add or edit episode entries, and re-export. Since you own the HTML, you can update as often as you publish new episodes — no platform approval needed.',
  },
  {
    q: 'Where can I host my podcast landing page?',
    a: 'Since you get clean HTML/CSS files, you can host anywhere — Netlify, Vercel, GitHub Pages, your own server, or even drop it into an existing WordPress site.',
  },
];

const relatedTemplates = [
  { id: 'consulting-pro', name: 'Consulting Pro' },
  { id: 'event', name: 'Event' },
  { id: 'startup', name: 'Startup' },
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
            Create a podcast landing page in 5 minutes. Episode listings, subscribe buttons, host profile, and dark theme — no coding required. Export clean HTML.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Grow Your Podcast Audience?</h2>
            <p className="text-indigo-100 mb-6 max-w-lg mx-auto">
              Build your podcast landing page now. Customize in minutes, export clean HTML, deploy anywhere.
            </p>
            <Link href="/editor/podcast">
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
