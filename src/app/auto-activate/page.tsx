'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Check, Copy, RefreshCw, Shield } from 'lucide-react';
import { getUnusedLicense, claimLicense, isProUser } from '@/lib/payment';
import Link from 'next/link';

export default function AutoActivatePage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [txnId, setTxnId] = useState('');
  const [licenseKey, setLicenseKey] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

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

  const handleGetLicense = () => {
    setError('');
    if (!email || !txnId) {
      setError('请填写邮箱和支付宝交易号');
      return;
    }

    const code = getUnusedLicense();
    if (!code) {
      setError('授权码已用完，请联系 247647898@qq.com');
      return;
    }

    claimLicense(code);
    setLicenseKey(code);
    setStep(3);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(licenseKey);
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
          <h1 className="text-3xl font-bold mb-2">自助激活</h1>
          <p className="text-muted-foreground">付款后自动获取授权码，无需等待</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                s <= step ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {s < step ? <Check className="w-4 h-4" /> : s}
              </div>
              {s < 3 && <div className={`w-12 h-0.5 ${s < step ? 'bg-indigo-600' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 1: 确认已付款</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-lg text-sm">
                <p className="font-medium text-yellow-800 mb-2">请先完成支付</p>
                <p className="text-yellow-700">访问 <Link href="/pay" className="underline font-medium">/pay</Link> 选择产品并扫码支付</p>
                <p className="text-yellow-700 mt-1">支付后保存支付宝交易号（可在账单详情中查看）</p>
              </div>
              <Button className="w-full" onClick={() => setStep(2)}>
                我已付款，继续 →
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 2: 填写信息</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">邮箱（用于接收备份授权码）</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="txn">支付宝交易号</Label>
                <Input
                  id="txn"
                  placeholder="例如：2024051322001156789012345678"
                  value={txnId}
                  onChange={(e) => setTxnId(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  在支付宝账单详情中查看，格式为 2024... 开头的数字
                </p>
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  ← 上一步
                </Button>
                <Button onClick={handleGetLicense} disabled={!email || !txnId} className="flex-1">
                  获取授权码
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">授权码已生成</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gray-100 rounded-lg text-center">
                <code className="text-xl font-mono font-bold tracking-wider">{licenseKey}</code>
              </div>
              <Button onClick={handleCopy} variant="outline" className="w-full">
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? '已复制' : '复制授权码'}
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                授权码已保存到您的浏览器，同时建议截图保存
              </p>
              <div className="flex gap-2">
                <Link href="/activate" className="flex-1">
                  <Button className="w-full">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    去激活
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
