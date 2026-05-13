import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Dumbbell, Calendar, Users, CreditCard, Star, Clock, Shield, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fitness Website & Gym Landing Page — Get More Members Online',
  description: 'Create a fitness website in 5 minutes. Class schedules, trainer profiles, free trial CTA, membership pricing. Export clean HTML.',
};

export default function FitnessWebsitePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Dumbbell className="w-3 h-3 mr-1" />
              Gym & Fitness Template
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Fitness Website &
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Gym Landing Page
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Launch your gym website in 5 minutes. Class schedules, trainer profiles, free trial CTA,
              and membership pricing — all built to convert visitors into members.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/editor/fitness-gym">
                <Button size="lg" className="text-lg px-8 h-14 shadow-lg shadow-emerald-200 bg-emerald-600 hover:bg-emerald-700">
                  <Zap className="w-5 h-5 mr-2" />
                  Build Your Fitness Site — Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  See What&apos;s Included
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Free trial CTA</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Class schedule</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Trainer profiles</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Mobile responsive</span>
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-600" /> Export clean HTML</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Key Features</Badge>
            <h2 className="text-3xl font-bold mb-4">Everything your gym website needs</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Built specifically for fitness businesses. Each section is designed to turn website visitors into gym members.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Free Trial CTA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Prominent free trial call-to-action that lowers the barrier for new members to walk through your door.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-7 h-7 text-teal-600" />
                </div>
                <CardTitle className="text-lg">Class Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Display your weekly class timetable with times, instructors, and class types. Easy to scan on any device.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-amber-600" />
                </div>
                <CardTitle className="text-lg">Trainer Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Showcase your trainers with photos, specialties, and certifications. Build trust before the first visit.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-7 h-7 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">Membership Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Clear pricing tiers with urgency elements. Highlight the best value plan to drive sign-ups.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">What&apos;s Included</Badge>
            <h2 className="text-3xl font-bold mb-4">A complete fitness website — ready to launch</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every section is pre-built and optimized. Just customize the text and you&apos;re live.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { icon: '🧭', title: 'Navigation Bar', desc: 'Clean top nav with logo, links, and a sticky "Free Trial" button that follows the scroll.' },
              { icon: '🏃', title: 'Hero with Free Trial Badge', desc: 'Eye-catching hero section with a bold headline, motivating subtext, and a glowing free trial CTA badge.' },
              { icon: '📋', title: 'Classes Grid', desc: 'Weekly class schedule displayed as a responsive grid. Yoga, HIIT, spinning, boxing — all organized.' },
              { icon: '💪', title: 'Trainer Profiles', desc: 'Professional trainer cards with photo, name, specialty, and certification badges.' },
              { icon: '💰', title: 'Membership Pricing with Urgency', desc: 'Three-tier pricing table with a highlighted "Most Popular" plan and limited-time discount badge.' },
              { icon: '🎯', title: 'CTA Section', desc: 'Final conversion section with a strong headline and prominent sign-up button — the last push to convert.' },
            ].map((item) => (
              <Card key={item.title} className="flex items-start gap-4 p-6 hover:shadow-md transition-shadow">
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Template */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Why This Template</Badge>
            <h2 className="text-3xl font-bold mb-4">Built for gyms — not generic businesses</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium text-muted-foreground">Feature</th>
                      <th className="p-4 font-medium text-muted-foreground text-center">Generic Builder</th>
                      <th className="p-4 font-medium text-center text-emerald-600 bg-emerald-50/50">This Template</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Free trial CTA section', false, true],
                      ['Class schedule layout', false, true],
                      ['Trainer profile cards', false, true],
                      ['Membership pricing tiers', false, true],
                      ['Urgency / scarcity elements', false, true],
                      ['Mobile responsive', true, true],
                      ['Clean HTML export', false, true],
                      ['One-time payment', false, true],
                      ['No subscription needed', false, true],
                      ['5-minute setup', true, true],
                    ].map(([feature, others, us]) => (
                      <tr key={feature as string} className="border-b last:border-0">
                        <td className="p-4">{feature as string}</td>
                        <td className="p-4 text-center">{others ? <Check className="w-4 h-4 text-green-600 mx-auto" /> : <span className="text-muted-foreground">&mdash;</span>}</td>
                        <td className="p-4 text-center bg-emerald-50/50">{us ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <span className="text-muted-foreground">&mdash;</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gym owners love it</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Jake T.', role: 'CrossFit Gym Owner', text: 'Replaced my $200/month website builder with this. Got more free trial sign-ups in the first week than the entire last month.', avatar: 'J' },
              { name: 'Maria L.', role: 'Yoga Studio Founder', text: 'The class schedule section is exactly what I needed. My students can finally find classes easily on their phones.', avatar: 'M' },
              { name: 'Chris D.', role: 'Boxing Gym Manager', text: 'Set up the whole site during lunch break. The trainer profiles really help new members feel confident before their first visit.', avatar: 'C' },
            ].map((t) => (
              <Card key={t.name} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-sm font-bold text-emerald-600">{t.avatar}</div>
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-sm text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold">Common questions</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: 'Can I add my own class schedule?',
                a: 'Yes! The class schedule section is fully editable. Add as many classes as you want with times, instructor names, and class types. Changes are reflected in the live preview instantly.',
              },
              {
                q: 'Does the template work on mobile phones?',
                a: 'Absolutely. Every section — from the hero to the pricing table — is built mobile-first. Your members can browse classes and sign up right from their phones.',
              },
              {
                q: 'How do I get a free trial CTA working?',
                a: 'The free trial button is pre-built into the hero and CTA sections. Just link it to your booking form, Google Form, or any URL. No coding required.',
              },
              {
                q: 'Can I export the HTML and host it myself?',
                a: 'Yes. With the Pro plan you can export clean, production-ready HTML/CSS. Deploy to Netlify, Vercel, GitHub Pages, or your own server — no vendor lock-in.',
              },
            ].map((faq) => (
              <Card key={faq.q}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm">
            <Clock className="w-4 h-4" />
            Takes only 5 minutes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get more gym members?</h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            Launch your fitness website today. Free trial CTAs, class schedules, trainer profiles, and pricing — all included.
            No signup required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/editor/fitness-gym">
              <Button size="lg" className="text-lg px-8 h-14 bg-white text-emerald-600 hover:bg-emerald-50">
                <Dumbbell className="w-5 h-5 mr-2" />
                Build Your Fitness Site — Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-sm text-emerald-100 mt-8">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> No signup</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Live preview</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Export HTML</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Mobile responsive</span>
          </div>
        </div>
      </section>
    </div>
  );
}
