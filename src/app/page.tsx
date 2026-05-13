import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getAllTemplates } from '@/lib/templates';
import { ArrowRight, Palette, Code2, Globe, Zap, Sparkles, Check, Shield, Download } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

const gradientMap: Record<string, string> = {
  'saas-modern': 'from-indigo-500 to-blue-500',
  'ecommerce-modern': 'from-emerald-500 to-teal-500',
  'app-launch': 'from-violet-500 to-purple-500',
  'course-launch': 'from-amber-500 to-orange-500',
  'consulting-pro': 'from-slate-600 to-slate-800',
  'ai-tool': 'from-cyan-500 to-blue-500',
  'waitlist': 'from-pink-500 to-rose-500',
  'portfolio': 'from-fuchsia-500 to-purple-500',
  'event': 'from-blue-500 to-indigo-500',
  'startup-launch': 'from-orange-500 to-red-500',
  'restaurant': 'from-red-500 to-rose-500',
  'fitness-gym': 'from-green-500 to-emerald-500',
  'real-estate': 'from-yellow-500 to-amber-500',
  'nonprofit': 'from-emerald-500 to-green-500',
  'podcast': 'from-purple-500 to-violet-500',
};

const iconMap: Record<string, string> = {
  'saas-modern': '☁️',
  'ecommerce-modern': '🛒',
  'app-launch': '📱',
  'course-launch': '📚',
  'consulting-pro': '💼',
  'ai-tool': '🤖',
  'waitlist': '🔔',
  'portfolio': '🎨',
  'event': '🎪',
  'startup-launch': '🚀',
  'restaurant': '🍽️',
  'fitness-gym': '💪',
  'real-estate': '🏠',
  'nonprofit': '💚',
  'podcast': '🎙️',
};

export default function Home() {
  const templates = getAllTemplates();
  const featured = templates.slice(0, 6);
  const rest = templates.slice(6);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-24 md:py-36 lg:py-44">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative max-w-5xl text-center">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-1">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            {templates.length} templates — no code required
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
            Ship your landing page{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              in 5 minutes
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Pick a template. Customize it. Export clean HTML. No subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/editor/saas-modern">
              <Button size="lg" className="text-lg px-8 h-14 shadow-lg shadow-indigo-200/50">
                Start Building — Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/html-templates" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              View all templates →
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center mt-10 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />No signup</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />Live preview</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />Export clean HTML</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-green-500" />One-time payment</span>
          </div>
        </div>
      </section>

      {/* Featured Templates — Large gradient cards */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Templates that convert</h2>
            <p className="text-muted-foreground text-lg">Each one optimized for its industry</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featured.map((template) => (
              <Link key={template.id} href={`/editor/${template.id}`} className="group">
                <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradientMap[template.id] || 'from-indigo-500 to-violet-500'} p-8 aspect-[4/3] flex flex-col justify-end transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl`}>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
                      {template.category}
                    </Badge>
                    {template.id === 'saas-modern' ? (
                      <Badge className="bg-white/90 text-green-700 text-xs">FREE</Badge>
                    ) : (
                      <Badge className="bg-white/90 text-indigo-700 text-xs">PRO</Badge>
                    )}
                  </div>
                  <div className="text-4xl mb-4 opacity-90">{iconMap[template.id]}</div>
                  <h3 className="text-2xl font-bold text-white mb-1">{template.name}</h3>
                  <p className="text-white/80 text-sm">{template.description}</p>
                  <div className="mt-4 flex items-center text-white/70 text-sm group-hover:text-white transition-colors">
                    <span className="font-medium">{template.id === 'saas-modern' ? 'Try free' : 'Pro'}</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {rest.length > 0 && (
            <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
              {rest.map((template) => (
                <Link key={template.id} href={`/editor/${template.id}`} className="group">
                  <div className={`relative rounded-xl bg-gradient-to-br ${gradientMap[template.id] || 'from-indigo-500 to-violet-500'} p-4 transition-all hover:scale-[1.03] hover:shadow-lg`}>
                    {template.id !== 'saas-modern' && (
                      <span className="absolute top-2 right-2 text-[10px] font-bold bg-white/90 text-indigo-700 px-1.5 py-0.5 rounded">PRO</span>
                    )}
                    <div className="text-lg mb-1">{iconMap[template.id]}</div>
                    <div className="font-semibold text-white text-sm">{template.name}</div>
                    <div className="text-white/70 text-xs">{template.category}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <div className="text-center mt-10">
            <Link href="/html-templates">
              <Button variant="outline" size="lg" className="gap-2">
                View all {templates.length} templates
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three steps. Five minutes.</h2>
            <p className="text-muted-foreground text-lg">No learning curve</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              { icon: Palette, title: 'Pick a template', desc: `${templates.length} designs for SaaS, e-commerce, apps, restaurants, and more`, color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { icon: Code2, title: 'Customize it', desc: 'Edit text and colors with live preview. See every change instantly', color: 'text-violet-600', bg: 'bg-violet-50' },
              { icon: Globe, title: 'Export & ship', desc: 'Download clean HTML/CSS. Deploy to GitHub Pages, Netlify, or anywhere', color: 'text-emerald-600', bg: 'bg-emerald-50' },
            ].map((step, i) => (
              <div key={step.title} className="text-center">
                <div className={`w-16 h-16 ${step.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <div className="text-sm text-muted-foreground mb-2">Step {i + 1}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { num: '15', label: 'Templates' },
              { num: '95+', label: 'PageSpeed' },
              { num: '5 min', label: 'Avg. build time' },
              { num: '$0', label: 'Monthly cost' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  {stat.num}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — Simplified */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing. No surprises.</h2>
            <p className="text-muted-foreground text-lg">One-time payment. Use forever.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free */}
            <div className="rounded-2xl border p-8">
              <div className="text-sm text-muted-foreground mb-1">Free</div>
              <div className="text-4xl font-bold mb-4">$0</div>
              <ul className="space-y-3 mb-8 text-sm">
                {['SaaS Modern template', 'Live preview editor', '6 free tools', 'No signup required'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/editor/saas-modern" className="block">
                <Button variant="outline" className="w-full h-12">Start Free</Button>
              </Link>
            </div>
            {/* Pro */}
            <div className="rounded-2xl border-2 border-indigo-600 p-8 relative shadow-lg shadow-indigo-100">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600">Most Popular</Badge>
              <div className="text-sm text-muted-foreground mb-1">Pro</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold">¥199</span>
                <span className="text-sm text-muted-foreground">one-time</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {['All 15 templates', 'HTML/CSS export (ZIP)', 'Commercial license', 'Mobile responsive', 'SEO optimized', 'No subscription ever'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/pay" className="block">
                <Button className="w-full h-12">Get Pro — ¥199</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tools */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Free forever</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">6 free tools. No signup.</h2>
            <p className="text-muted-foreground text-lg">Useful web dev utilities, completely free</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Meta Tag Generator', desc: 'SEO + OG + Twitter tags with live preview', href: '/free-tools/meta-tag-generator' },
              { name: 'OG Preview', desc: 'See how your links look on social', href: '/free-tools/og-preview' },
              { name: 'Color Palette', desc: 'Curated palettes with CSS export', href: '/free-tools/color-palette' },
              { name: 'QR Code Generator', desc: 'Custom colors, PNG download', href: '/free-tools/qr-code' },
              { name: 'JSON Formatter', desc: 'Validate, format, minify', href: '/free-tools/json-formatter' },
              { name: 'Base64 Encoder', desc: 'Real-time encode/decode', href: '/free-tools/base64' },
            ].map((tool) => (
              <Link key={tool.name} href={tool.href}>
                <div className="rounded-xl border bg-white p-6 hover:shadow-md transition-shadow h-full">
                  <h3 className="font-semibold mb-1">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to ship?</h2>
          <p className="text-indigo-100 text-lg mb-10">No signup. No credit card. Just build.</p>
          <Link href="/editor/saas-modern">
            <Button size="lg" className="text-lg px-10 h-14 bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg">
              Start Building Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-bold text-lg bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">LP Gen</span>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/pricing" className="hover:text-foreground">Pricing</Link>
              <Link href="/blog" className="hover:text-foreground">Blog</Link>
              <Link href="/free-tools" className="hover:text-foreground">Free Tools</Link>
              <Link href="/faq" className="hover:text-foreground">FAQ</Link>
            </div>
            <ShareButtons />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">Landing Page Generator &copy; 2026</p>
        </div>
      </footer>
    </div>
  );
}
