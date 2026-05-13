import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — One-Time Payment, Keep Forever',
  description: 'Pro Plan ¥199 for all 15 templates and HTML export. No subscription, pay once keep forever.',
};

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
            一次性付费，永久使用。无订阅，无隐藏费用。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free */}
          <Card>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">Starter</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">¥0</span>
                <span className="text-muted-foreground"> /永久免费</span>
              </div>
              <CardDescription>试试看</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {[
                  '1个模板 (SaaS Modern)',
                  '实时预览编辑器',
                  '6个免费开发工具',
                  '无需注册',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/editor/saas-modern">
                <Button className="w-full" variant="outline">免费开始</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Pro */}
          <Card className="border-indigo-600 shadow-lg relative">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white">
              推荐
            </Badge>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">Pro</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">¥199</span>
                <span className="text-muted-foreground"> /一次性</span>
              </div>
              <CardDescription>适合独立开发者和创业者</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {[
                  '全部15个模板',
                  '完整自定义编辑',
                  'HTML导出 (ZIP)',
                  '商业使用授权',
                  '移动端自适应',
                  'SEO优化',
                  '无订阅，永久使用',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/pay">
                <Button className="w-full">立即购买</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>需要定制服务？邮件联系 247647898@qq.com</p>
        </div>
      </div>
    </div>
  );
}
