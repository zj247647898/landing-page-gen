import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles, LayoutTemplate, Pencil, Download } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — 一次性付费，永久使用',
  description: 'Pro Plan ¥199 解锁全部15个模板和HTML导出。无订阅，一次付费永久使用。',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            <Sparkles className="w-3 h-3 mr-1" />
            简单定价
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">选择你的方案</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            一次性付费，永久使用。无订阅，无隐藏费用。
          </p>
        </div>

        {/* What you get - product intro for search visitors */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <LayoutTemplate className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-bold mb-1">选模板</h3>
              <p className="text-sm text-muted-foreground">15个行业模板：SaaS、电商、AI、餐饮...</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Pencil className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="font-bold mb-1">改内容</h3>
              <p className="text-sm text-muted-foreground">实时预览编辑器，改文字、颜色即时生效</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Download className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold mb-1">导出部署</h3>
              <p className="text-sm text-muted-foreground">下载干净HTML，部署到任何地方</p>
            </div>
          </div>
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
