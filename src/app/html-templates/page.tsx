import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HTML Landing Page Templates — Free & Pro',
  description: '15 free and pro HTML landing page templates. SaaS, e-commerce, app, course, startup, restaurant, fitness, real estate, nonprofit, podcast. Download and deploy.',
};

const templates = [
  { id: 'saas-modern', name: 'SaaS Modern', category: 'SaaS', free: true, desc: 'Clean, professional SaaS landing page with hero, features, pricing, and CTA sections.' },
  { id: 'ecommerce-modern', name: 'E-Commerce Modern', category: 'E-Commerce', free: false, desc: 'Product-focused page with image gallery, pricing, and urgency triggers.' },
  { id: 'app-launch', name: 'App Launch', category: 'Mobile App', free: false, desc: 'App store download page with phone mockup and feature highlights.' },
  { id: 'course-launch', name: 'Course Launch', category: 'Education', free: false, desc: 'Online course sales page with curriculum, instructor bio, and enrollment CTA.' },
  { id: 'consulting-pro', name: 'Consulting Pro', category: 'Services', free: false, desc: 'Professional services page with expertise areas, testimonials, and booking CTA.' },
  { id: 'ai-tool', name: 'AI Tool', category: 'AI/ML', free: false, desc: 'AI product page with demo section, trust signals, and clear value proposition.' },
  { id: 'waitlist', name: 'Waitlist', category: 'Pre-launch', free: false, desc: 'Simple, focused waitlist page with email capture and social proof counter.' },
  { id: 'portfolio', name: 'Portfolio', category: 'Creative', free: false, desc: 'Freelancer portfolio with project showcase, testimonials, and contact form.' },
  { id: 'event', name: 'Event', category: 'Events', free: false, desc: 'Conference or meetup page with schedule, speakers, and registration.' },
  { id: 'startup-launch', name: 'Startup Launch', category: 'Startup', free: false, desc: 'Startup page with problem/solution framing, early adopter pricing, and urgency.' },
  { id: 'restaurant', name: 'Restaurant / Café', category: 'Food & Drink', free: false, desc: 'Restaurant page with menu highlights, reservations, gallery, and warm design.' },
  { id: 'fitness-gym', name: 'Fitness / Gym', category: 'Fitness', free: false, desc: 'Gym page with class schedules, trainer profiles, free trial CTA, and memberships.' },
  { id: 'real-estate', name: 'Real Estate', category: 'Real Estate', free: false, desc: 'Property listings, agent profile, market stats, and lead capture form.' },
  { id: 'nonprofit', name: 'Nonprofit / Charity', category: 'Nonprofit', free: false, desc: 'Impact stats, donation tiers, stories, and mission section.' },
  { id: 'podcast', name: 'Podcast', category: 'Media', free: false, desc: 'Episode listings, subscribe buttons, host profile, dark theme design.' },
];

export default function HtmlTemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">HTML Landing Page Templates</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              15 responsive, SEO-optimized HTML templates. Customize in our editor, export clean code, deploy anywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {templates.map((t) => (
              <Card key={t.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{t.category}</Badge>
                    {t.free && <Badge className="bg-green-100 text-green-700">FREE</Badge>}
                  </div>
                  <CardTitle className="text-lg">{t.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                  <Link href={`/editor/${t.id}`}>
                    <Button className="w-full" variant={t.free ? 'default' : 'outline'}>
                      {t.free ? 'Try Free' : 'Use Template'} <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features */}
          <Card className="mb-12">
            <CardHeader><CardTitle>What you get with Pro (¥199)</CardTitle></CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'All 15 templates with full customization',
                  'Clean HTML/CSS export (ZIP download)',
                  'Commercial license for client work',
                  'Mobile responsive by default',
                  'SEO-optimized meta tags & structure',
                  'Fast loading — no bloated frameworks',
                  'Deploy to any hosting platform',
                  'One-time payment, no subscription',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Link href="/pay">
              <Button size="lg" className="text-lg px-8 h-14">Get All Templates — ¥199 <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-3">Or try the SaaS Modern template free →</p>
          </div>
        </div>
      </section>
    </div>
  );
}
