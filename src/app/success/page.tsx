import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Key, Share2 } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white p-4">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl">支付成功!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            感谢购买！接下来获取授权码即可使用全部功能。
          </p>
          <div className="bg-slate-50 rounded-lg p-4 text-left">
            <h3 className="font-semibold mb-2">下一步：</h3>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="font-bold text-indigo-600">1.</span>
                前往自助激活页面获取授权码
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-indigo-600">2.</span>
                输入授权码激活 Pro
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-indigo-600">3.</span>
                选择模板，自定义内容，导出 HTML
              </li>
            </ol>
          </div>
          <Link href="/auto-activate">
            <Button className="w-full" size="lg">
              <Key className="w-4 h-4 mr-2" />
              自助获取授权码
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <div className="flex gap-2">
            <Link href="/editor/saas-modern" className="flex-1">
              <Button variant="outline" className="w-full">开始创建</Button>
            </Link>
            <Link href="/faq" className="flex-1">
              <Button variant="outline" className="w-full">常见问题</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
