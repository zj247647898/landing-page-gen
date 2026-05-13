import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Development Services — Landing Pages, MVPs & Full-Stack Apps',
  description: 'Hire a developer for your next project. Custom landing pages from ¥3,499, MVP development from ¥13,999. Fixed pricing, 7-day delivery.',
};
import { Check, ArrowRight, Zap, Clock, Shield, Code, Palette, Rocket } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Landing Page Development',
    price: 'From $499',
    description: 'High-converting landing pages built with modern tech stack. Responsive, fast, SEO-optimized.',
    features: ['Custom design based on your brand', 'Mobile-first responsive', 'SEO optimization', 'Analytics integration', 'A/B test ready'],
    delivery: '3-5 days',
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Full-Stack Web App',
    price: 'From $2,999',
    description: 'Complete web applications with frontend, backend, and database. Scalable architecture.',
    features: ['React/Next.js frontend', 'Node.js/Python backend', 'Database design', 'Authentication', 'API development', 'Deployment'],
    delivery: '2-4 weeks',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'MVP in 7 Days',
    price: 'From $1,999',
    description: 'Rapid MVP development to validate your idea. Ship fast, iterate faster.',
    features: ['Core features only', 'Clean codebase', 'Deploy-ready', 'User auth', 'Database', 'Post-launch support'],
    delivery: '7 days',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Automation & Scripts',
    price: 'From $299',
    description: 'Custom automation scripts to save hours of manual work. Data scraping, workflows, integrations.',
    features: ['Python/Node.js scripts', 'API integrations', 'Data processing', 'Scheduled tasks', 'Error handling'],
    delivery: '1-3 days',
  },
];

const process = [
  { step: '01', title: 'Discovery Call', desc: 'Free 30-min call to understand your needs and goals.' },
  { step: '02', title: 'Quote & Timeline', desc: 'Fixed-price quote with clear deliverables and timeline.' },
  { step: '03', title: 'Development', desc: 'Daily updates via Slack/Discord. You see progress in real-time.' },
  { step: '04', title: 'Delivery', desc: 'Code review, deployment, and handoff documentation.' },
];

const testimonials = [
  { text: 'Delivered our landing page in 4 days. Conversion rate doubled compared to our old page.', author: 'Founder, SaaS Startup', location: 'San Francisco' },
  { text: 'Built our entire MVP in a week. Clean code, great communication, shipped on time.', author: 'CTO, Fintech Company', location: 'Singapore' },
  { text: 'The automation scripts saved our team 20+ hours per week. Worth every penny.', author: 'Operations Manager', location: 'London' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6" variant="secondary">
            <Zap className="w-3 h-3 mr-1" />
            Available for new projects
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Custom Development
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              done fast, done right
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Ship your product in days, not months. Fixed pricing, daily updates, no surprises.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="#contact">
              <Button size="lg">
                Book Free Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="#services">
              <Button size="lg" variant="outline">
                See Services
              </Button>
            </Link>
          </div>
          <div className="flex gap-8 justify-center mt-12 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600" /> Fixed pricing</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600" /> Daily updates</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600" /> Source code included</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services</h2>
            <p className="text-muted-foreground">Choose what fits your needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                      {service.icon}
                    </div>
                    <Badge variant="outline">{service.delivery}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <div className="text-2xl font-bold text-indigo-600">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact">
                    <Button className="w-full">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How it works</h2>
            <p className="text-muted-foreground">Simple 4-step process</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="text-4xl font-bold text-indigo-200 mb-4">{p.step}</div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Results</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-slate-50 border-0">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="text-sm font-semibold">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Vercel', 'Stripe'].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">{tech}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to ship?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Book a free 30-minute discovery call. No commitment. Let&apos;s discuss your project.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Book Free Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="mailto:hello@landingpagegen.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Email Me
              </Button>
            </a>
          </div>
          <div className="flex gap-6 justify-center mt-8 text-sm opacity-80">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Response in 2 hours</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> 100% satisfaction</span>
          </div>
        </div>
      </section>
    </div>
  );
}
