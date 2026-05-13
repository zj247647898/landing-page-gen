import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Target, DollarSign, Users, Clock, Rocket, BarChart3, Zap, Shield, Star, Flame } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startup Landing Page — Launch with Traction from Day One',
  description: 'Create a high-converting startup landing page in 5 minutes. Problem/solution framing, early adopter pricing, social proof. Export clean HTML.',
};

export default function StartupLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50 py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Flame className="w-3 h-3 mr-1" />
              Built for Startups
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Startup Landing Page
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Launch with Traction
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Go from idea to live landing page in 5 minutes. Problem/solution framing, early adopter pricing, and social proof — all baked in. Export clean HTML and ship today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/editor/startup-launch">
                <Button size="lg" className="text-lg px-8 h-14 shadow-lg shadow-indigo-200">
                  <Rocket className="w-5 h-5 mr-2" />
                  Build Your Startup Page
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-600" /> Problem/Solution framing</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-600" /> Early adopter pricing</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-600" /> Social proof sections</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-600" /> Urgency elements</span>
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-green-600" /> Export clean HTML</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Core Features</Badge>
            <h2 className="text-3xl font-bold">Everything your startup launch needs</h2>
            <p className="text-muted-foreground mt-2">Pre-built sections designed to convert visitors into early adopters</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">Problem/Solution Framing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Clearly articulate the pain point and your solution. Visitors understand your value in 5 seconds.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-3">
                  <DollarSign className="w-6 h-6 text-violet-600" />
                </div>
                <CardTitle className="text-lg">Early Adopter Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Tiered pricing with &ldquo;Founding Member&rdquo; deals. Create urgency with limited-time early bird offers.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Social Proof</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Waitlist counters, testimonials, and backer badges. Show traction even before launch day.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle className="text-lg">Urgency Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Countdown timers, limited spots, and expiration badges. Convert hesitation into action.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Launch Phases Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Launch Phases</Badge>
            <h2 className="text-3xl font-bold">From validation to optimization</h2>
            <p className="text-muted-foreground mt-2">A structured approach to launching that maximizes your chances of success</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Pre-Launch Validation</h3>
                <p className="text-sm text-muted-foreground">
                  Ship a waitlist page to validate demand. Collect emails, test your messaging, and refine your value prop before writing a single line of product code.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">Waitlist</Badge>
                  <Badge variant="outline" className="text-xs">Email Capture</Badge>
                  <Badge variant="outline" className="text-xs">A/B Testing</Badge>
                </div>
              </div>
              <div className="hidden md:block absolute top-8 -right-4 text-muted-foreground">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-600">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Launch Day</h3>
                <p className="text-sm text-muted-foreground">
                  Flip the switch. Your landing page converts waitlist signups into paying early adopters with urgency-driven pricing and social proof.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">Early Bird</Badge>
                  <Badge variant="outline" className="text-xs">Countdown</Badge>
                  <Badge variant="outline" className="text-xs">Testimonials</Badge>
                </div>
              </div>
              <div className="hidden md:block absolute top-8 -right-4 text-muted-foreground">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
            <div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Post-Launch Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Iterate based on real data. Swap sections, test copy, adjust pricing tiers. Update and re-export in minutes, not days.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">Analytics</Badge>
                  <Badge variant="outline" className="text-xs">Iteration</Badge>
                  <Badge variant="outline" className="text-xs">Scaling</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">What&apos;s Included</Badge>
            <h2 className="text-3xl font-bold">Every section your startup page needs</h2>
            <p className="text-muted-foreground mt-2">Pre-designed, conversion-optimized sections ready to customize</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {[
                    { icon: '🧭', section: 'Navigation', desc: 'Sticky header with CTA button, keeps conversion within reach' },
                    { icon: '🚀', section: 'Hero with Beta Badge', desc: 'Bold headline, subtext, and a "Join the Beta" CTA that stands out' },
                    { icon: '🎯', section: 'Problem/Solution Section', desc: 'Articulate the pain, present your solution — the core of startup messaging' },
                    { icon: '⚡', section: 'Features Grid', desc: '3-6 feature cards with icons, scannable and compelling' },
                    { icon: '💰', section: 'Early Adopter Pricing with Urgency', desc: 'Tiered plans with "Founding Member" badges and countdown timers' },
                    { icon: '📞', section: 'CTA Section', desc: 'Final push with social proof and a clear, irresistible action button' },
                  ].map((item) => (
                    <div key={item.section} className="flex items-start gap-4 p-4">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <div className="font-medium">{item.section}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Startups Choose LP Gen Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Why LP Gen</Badge>
            <h2 className="text-3xl font-bold">Why startups choose LP Gen</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium text-muted-foreground">Feature</th>
                      <th className="p-4 font-medium text-muted-foreground text-center">Carrd / Framer</th>
                      <th className="p-4 font-medium text-center text-indigo-600 bg-indigo-50/50">LP Gen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Startup-specific sections', false, true],
                      ['Problem/Solution framing', false, true],
                      ['Early adopter pricing templates', false, true],
                      ['Urgency & countdown elements', false, true],
                      ['One-time payment', false, true],
                      ['Clean HTML export', false, true],
                      ['Live preview editor', true, true],
                      ['No subscription needed', false, true],
                      ['Mobile responsive', true, true],
                      ['Deploy anywhere', true, true],
                    ].map(([feature, others, us]) => (
                      <tr key={feature as string} className="border-b last:border-0">
                        <td className="p-4">{feature as string}</td>
                        <td className="p-4 text-center">{others ? <Check className="w-4 h-4 text-green-600 mx-auto" /> : <span className="text-muted-foreground">—</span>}</td>
                        <td className="p-4 text-center bg-indigo-50/50">{us ? <Check className="w-4 h-4 text-indigo-600 mx-auto" /> : <span className="text-muted-foreground">—</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: 'How is this different from a generic landing page builder?',
                a: 'LP Gen\'s startup template includes problem/solution framing, early adopter pricing tiers, urgency elements, and social proof sections — all specifically designed for startup launches. Generic builders give you a blank canvas; we give you a conversion-optimized structure.',
              },
              {
                q: 'Can I use this before my product is ready?',
                a: 'Absolutely. The template is designed for pre-launch validation. Use the waitlist mode to collect emails, test messaging, and build hype before your product ships. Flip to full launch mode when you\'re ready.',
              },
              {
                q: 'Do I need coding skills?',
                a: 'No. Our live preview editor lets you customize text, colors, and content visually. When you\'re done, export clean HTML/CSS and deploy to any hosting provider — GitHub Pages, Netlify, Vercel, or your own server.',
              },
              {
                q: 'What happens after I export?',
                a: 'You get a standalone HTML/CSS file that works anywhere. No dependencies on our platform, no recurring fees. It\'s yours forever. Come back anytime to iterate and re-export.',
              },
            ].map((faq) => (
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to launch with traction?</h2>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
            Your startup landing page is 5 minutes away. Problem/solution framing, early adopter pricing, social proof — all included.
          </p>
          <Link href="/editor/startup-launch">
            <Button size="lg" className="text-lg px-10 h-16 bg-white text-indigo-600 hover:bg-indigo-50 shadow-xl">
              <Rocket className="w-5 h-5 mr-2" />
              Build Your Startup Page
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-indigo-200">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> No signup required</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> 5-minute setup</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Export clean HTML</span>
          </div>
        </div>
      </section>
    </div>
  );
}
