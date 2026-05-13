import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ChevronDown } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description: 'Common questions about LP Gen landing page generator, templates, pricing, and export.',
};

const faqs = [
  {
    q: 'Is it really free to start?',
    a: 'Yes! The SaaS Modern template is completely free to use. You can customize it with our editor and preview it live. To export HTML or access all 15 templates, upgrade to Pro for ¥199.',
  },
  {
    q: 'What do I get with Pro?',
    a: 'Pro unlocks all 15 templates, full customization, and HTML/CSS export (ZIP download). You also get a commercial license to use templates for client work. One-time payment, no subscription.',
  },
  {
    q: 'How does the export work?',
    a: 'Click "Export HTML" to download a ZIP file containing your landing page with clean HTML, CSS, and assets. No dependencies, no build step — just upload to any hosting platform.',
  },
  {
    q: 'Where can I deploy my landing page?',
    a: 'Anywhere that serves static files. Popular options: GitHub Pages (free), Netlify (free), Vercel (free), Cloudflare Pages (free), or your own server. Just upload the files.',
  },
  {
    q: 'Can I use templates for client projects?',
    a: 'Yes! Pro and Agency plans include a commercial license. You can create landing pages for clients and charge them for your service.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept Alipay (支付宝). For international payments, contact us at 247647898@qq.com.',
  },
  {
    q: 'How does auto-activation work?',
    a: 'After payment, go to /auto-activate, enter your email and Alipay transaction ID. The system will automatically generate and assign you a license key — no waiting required.',
  },
  {
    q: 'Do the templates work on mobile?',
    a: 'Yes, every template is fully responsive. They look great on phones, tablets, and desktops.',
  },
  {
    q: 'Can I edit the HTML after export?',
    a: 'Absolutely. The exported HTML is clean and well-structured. You can edit it with any code editor or hand it off to a developer.',
  },
  {
    q: 'What if I need a custom design?',
    a: 'We offer custom landing page development starting at ¥3,499. Visit /services for details, or email 247647898@qq.com.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Since our products are digital, we generally don\'t offer refunds after the license key has been activated. If you\'re unsure, try the free template first.',
  },
  {
    q: 'Do you offer bulk/team licenses?',
    a: 'The Agency plan (¥699) is designed for teams. For custom enterprise licensing, contact us at 247647898@qq.com.',
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">FAQ</Badge>
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground">Everything you need to know about LP Gen.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-12" />

          <div className="text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a href="mailto:247647898@qq.com">
              <Button variant="outline">Email Us — 247647898@qq.com</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
