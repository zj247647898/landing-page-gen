import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles, Mail } from 'lucide-react';
import { PAYMENT_CONFIG } from '@/lib/payment';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — One-Time Payment, Keep Forever',
  description: 'Pro Plan ¥199 for all 9 templates and HTML export. Agency Plan ¥699 with source code. No subscription.',
};

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for trying out',
    features: ['1 template (SaaS Modern)', 'Live preview', 'Basic customization', 'Community support'],
    cta: 'Start Free',
    ctaLink: '/editor/saas-modern',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    priceCNY: '¥199',
    description: 'Best for indie makers',
    features: ['All 9 templates', 'Full customization', 'HTML export (ZIP)', 'Commercial license', 'Priority email support'],
    cta: 'Buy Now',
    ctaLink: '/pay',
    popular: true,
  },
  {
    name: 'Agency',
    price: '$99',
    priceCNY: '¥699',
    description: 'For teams & agencies',
    features: ['Everything in Pro', 'White-label export', 'Unlimited projects', 'Source code access', 'Custom template requests'],
    cta: 'Buy Now',
    ctaLink: '/pay',
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            <Sparkles className="w-3 h-3 mr-1" />
            Simple pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose your plan</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            One-time payment. No subscription. Keep your landing pages forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-indigo-600 shadow-lg' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> /one-time</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={plan.ctaLink} target={plan.ctaLink.startsWith('http') ? '_blank' : undefined}>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 text-sm text-muted-foreground">
          <p>Questions? Email 247647898@qq.com</p>
        </div>
      </div>
    </div>
  );
}
