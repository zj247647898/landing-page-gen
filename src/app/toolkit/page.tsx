import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Zap } from 'lucide-react';

const tools = [
  {
    name: 'SEO Audit Tool',
    price: '$49',
    description: 'Automated SEO auditing for any website. Find issues, get fix recommendations.',
    features: ['Title & meta analysis', 'Heading structure check', 'Image alt audit', 'Page speed assessment', 'HTTPS verification', 'Markdown report output'],
    icon: '🔍',
  },
  {
    name: 'Competitor Spy',
    price: '$79',
    description: 'Analyze competitor tech stacks, SEO strategies, and content approaches.',
    features: ['Tech stack detection', 'SEO keyword analysis', 'Content strategy review', 'Server & hosting info', 'Link profile overview', 'Competitive insights'],
    icon: '🕵️',
  },
  {
    name: 'Email Outreach Automator',
    price: '$99',
    description: 'Personalized cold email at scale. Built-in templates and reply tracking.',
    features: ['CSV contact import', '3 built-in templates', 'Personalization variables', 'Follow-up sequences', 'Campaign analytics', 'CSV export for mail merge'],
    icon: '📧',
  },
  {
    name: 'Landing Page Analyzer',
    price: '$69',
    description: 'CRO analysis for any landing page. Find conversion killers instantly.',
    features: ['CTA button detection', 'Social proof check', 'Urgency element scan', 'Guarantee detection', 'Video presence check', 'Conversion score + grade'],
    icon: '📊',
  },
];

export default function ToolkitPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6" variant="secondary">
            <Zap className="w-3 h-3 mr-1" />
            Developer Toolkit
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Automation tools that
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              save hours every week
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Python scripts you can run today. No dependencies. No subscriptions.
            Just clean, useful automation for marketers and developers.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tools.map((tool) => (
              <Card key={tool.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{tool.icon}</span>
                    <span className="text-2xl font-bold text-indigo-600">{tool.price}</span>
                  </div>
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://gumroad.com/l/dev-toolkit-single" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full" variant="outline">Buy {tool.name}</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Get All 4 Tools</h2>
          <p className="text-lg opacity-90 mb-4">Save 50% with the complete bundle</p>
          <div className="mb-8">
            <span className="text-5xl font-bold">$149</span>
            <span className="text-xl line-through opacity-60 ml-4">$296</span>
          </div>
          <ul className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            {tools.map((t) => (
              <li key={t.name} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Check className="w-4 h-4" /> {t.name}
              </li>
            ))}
          </ul>
          <a href="https://gumroad.com/l/dev-toolkit-bundle" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              Get the Bundle — $149
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">How it works</h2>
          <ol className="space-y-6 text-left">
            <li className="flex gap-4">
              <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
              <div><strong>Purchase</strong> — Buy individual tools or the bundle via Gumroad</div>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
              <div><strong>Download</strong> — Get Python scripts instantly. No installation needed.</div>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
              <div><strong>Run</strong> — Execute with <code className="bg-slate-200 px-2 py-0.5 rounded text-sm">python3 tool.py target.com</code></div>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
              <div><strong>Profit</strong> — Use reports for your own site or sell audits to clients</div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
