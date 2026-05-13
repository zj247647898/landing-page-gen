'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Check, Mail, Shield, Copy } from 'lucide-react';
import { isProUser } from '@/lib/payment';
import Link from 'next/link';

export default function AutoActivatePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (isProUser()) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center py-12">
        <Card className="max-w-md w-full mx-4">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Pro 已激活</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">您已拥有 Pro 权限，所有模板和导出功能均可使用。</p>
            <Link href="/editor/saas-modern">
              <Button className="w-full">开始创建 →</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const mailtoLink = `mailto:247647898@qq.com?subject=LP%20Gen%20Pro%20%E6%BF%80%E6%B4%BB&body=%E6%88%91%E5%B7%B2%E5%AE%8C%E6%88%90%E6%94%AF%E4%BB%98%EF%BC%8C%E8%AF%B7%E5%8F%91%E9%80%81%E6%8E%88%E6%9D%83%E7%A0%81%E3%80%82%0A%0A%E9%82%AE%E7%AE%B1%EF%BC%9A${encodeURIComponent(email)}%0A%E6%94%AF%E4%BB%98%E9%87%91%E9%A2%9D%EF%BC%9A%0A%E6%94%AF%E4%BB%98%E5%AE%9D%E4%BA%A4%E6%98%93%E5%8F%B7%E5%90%8E6%E4%BD%8D%EF%BC%9A`;

  const handleCopy = () => {
    navigator.clipboard.writeText('247647898@qq.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">获取授权码</h1>
          <p className="text-muted-foreground">付款后发送支付截图，我们确认后立即回复授权码</p>
        </div>

        {!submitted ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">付款后获取授权码</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg text-sm space-y-2">
                <p className="font-medium text-blue-800">获取步骤：</p>
                <ol className="list-decimal list-inside text-blue-700 space-y-1">
                  <li>在 <Link href="/pay" className="underline font-medium">/pay</Link> 页面扫码完成支付</li>
                  <li>在支付宝账单中截图支付记录</li>
                  <li>填写下方邮箱，点击"发送获取邮件"</li>
                  <li>我们确认收款后，将授权码回复到您的邮箱</li>
                </ol>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg text-sm text-amber-800">
                通常 10 分钟内回复，最晚不超过 2 小时
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">您的邮箱</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <a href={mailtoLink} className="flex-1" onClick={() => email && setSubmitted(true)}>
                  <Button className="w-full" disabled={!email}>
                    <Mail className="w-4 h-4 mr-2" />
                    发送获取邮件
                  </Button>
                </a>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">或直接发送支付截图到</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <code className="text-sm font-mono">247647898@qq.com</code>
                  <button onClick={handleCopy} className="text-xs text-indigo-600 hover:underline">
                    {copied ? '已复制' : '复制'}
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">邮件已发送</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-muted-foreground">
                请在邮件中附上支付截图，我们确认后会将授权码回复到 <strong>{email}</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                收到授权码后，前往 <Link href="/activate" className="text-indigo-600 underline">激活页面</Link> 输入即可
              </p>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-2">没有弹出邮件客户端？</p>
                <p className="text-xs text-muted-foreground">
                  请手动发送支付截图到 <code className="font-mono">247647898@qq.com</code>
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
