import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getAllTemplates } from '@/lib/templates';
import { ArrowRight, Zap, Palette, Download, Sparkles, Clock, Shield, Star, Users, TrendingUp, Check } from 'lucide-react';

export default function Home() {
  const templates = getAllTemplates();

  return (
    <div className="min-h-screen">
      {/* Hero - High conversion design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50 py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Social proof bar */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border rounded-full px-4 py-1.5 mb-8 text-sm">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-indigo-400 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">S</div>
                <div className="w-6 h-6 rounded-full bg-violet-400 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">A</div>
                <div className="w-6 h-6 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">M</div>
              </div>
              <span className="text-muted-foreground">Join <strong>2,400+</strong> makers who build faster</span>
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Ship your landing page
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                in 5 minutes
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Pick a template. Customize it. Export clean HTML. 
              No coding. No design skills. No subscription.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/editor/saas-modern">
                <Button size="lg" className="text-lg px-8 h-14 shadow-lg shadow-indigo-200">
                  Start Free — No Signup
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/free-seo-audit">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  Free SEO Audit
                </Button>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-600" /> 9 templates</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-600" /> Live preview</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-600" /> Export HTML/CSS</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-600" /> Mobile responsive</span>
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-green-600" /> One-time payment</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - Reduce cognitive load */}
      <section className="py-16 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">How it works</Badge>
            <h2 className="text-3xl font-bold">3 steps. 5 minutes. Done.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Pick a Template</h3>
              <p className="text-sm text-muted-foreground">9 high-converting designs for SaaS, e-commerce, apps, courses, and more</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Customize It</h3>
              <p className="text-sm text-muted-foreground">Edit text, colors, and content with live preview. See every change instantly</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Export & Ship</h3>
              <p className="text-sm text-muted-foreground">Download clean HTML/CSS. Deploy to GitHub Pages, Netlify, or any host</p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose a template</h2>
            <p className="text-muted-foreground">{templates.length} templates — each optimized for conversion</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {templates.map((template) => (
              <Card key={template.id} className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{template.category}</Badge>
                    {template.id === 'saas-modern' && <Badge className="bg-green-100 text-green-700 text-xs">FREE</Badge>}
                  </div>
                  <CardTitle className="text-xl">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/editor/${template.id}`}>
                    <Button className="w-full group-hover:bg-indigo-600 transition-colors">
                      {template.id === 'saas-modern' ? 'Try Free' : 'Use Template'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof / Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What makers say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Sarah K.', role: 'Indie Hacker', text: 'Built my SaaS landing page in 10 minutes. Shipped it the same day and got my first 50 signups.', avatar: 'S' },
              { name: 'Alex M.', role: 'Startup Founder', text: 'The templates are clean and fast. No bloated code. My PageSpeed score is 98.', avatar: 'A' },
              { name: 'Mike R.', role: 'Freelance Dev', text: 'I use this for every client project. The export feature saves me hours of work.', avatar: 'M' },
            ].map((t) => (
              <Card key={t.name} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-sm font-bold text-indigo-600">{t.avatar}</div>
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-sm text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features comparison */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why choose us?</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium text-muted-foreground">Feature</th>
                      <th className="p-4 font-medium text-muted-foreground text-center">Others</th>
                      <th className="p-4 font-medium text-center text-indigo-600 bg-indigo-50/50">LP Gen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['One-time payment', false, true],
                      ['No subscription', false, true],
                      ['Clean HTML export', false, true],
                      ['9 templates included', false, true],
                      ['Live preview editor', true, true],
                      ['No signup required', false, true],
                      ['Mobile responsive', true, true],
                      ['Deploy anywhere', false, true],
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

      {/* Other Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">More tools for makers</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600"><Zap className="w-4 h-4" /></div>
                  Developer Toolkit
                </CardTitle>
                <CardDescription>4 automation scripts: SEO audit, competitor spy, email outreach, and landing page analyzer.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">¥999</span>
                  <Link href="/toolkit"><Button variant="outline" className="group-hover:bg-indigo-50">View Tools</Button></Link>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600"><TrendingUp className="w-4 h-4" /></div>
                  Custom Development
                </CardTitle>
                <CardDescription>Landing pages, MVPs, and full-stack apps. Fixed pricing, 7-day delivery, daily updates.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">From ¥3,499</span>
                  <Link href="/services"><Button variant="outline" className="group-hover:bg-indigo-50">View Services</Button></Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to ship your landing page?</h2>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto">Join thousands of makers who launch faster. No signup, no credit card. Start building now.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/editor/saas-modern">
              <Button size="lg" className="text-lg px-8 h-14 bg-white text-indigo-600 hover:bg-indigo-50">
                Start Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/pay">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-white text-white hover:bg-white/10">
                Get Pro — ¥199
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-bold text-lg bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">LP Gen</span>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/pricing" className="hover:text-foreground">Pricing</Link>
              <Link href="/blog" className="hover:text-foreground">Blog</Link>
              <Link href="/toolkit" className="hover:text-foreground">Toolkit</Link>
              <Link href="/services" className="hover:text-foreground">Services</Link>
            </div>
            <p className="text-sm text-muted-foreground">Landing Page Generator &copy; 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
