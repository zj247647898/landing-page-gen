'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Check, QrCode, Copy, RefreshCw } from 'lucide-react';
import { activatePro } from '@/lib/payment';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  { id: 'pro', name: 'Pro Plan', price: '¥199', priceUSD: '$29', desc: 'All 15 templates + HTML export' },
  { id: 'agency', name: 'Agency Plan', price: '¥699', priceUSD: '$99', desc: 'Everything in Pro + source code' },
  { id: 'toolkit', name: 'Developer Toolkit Bundle', price: '¥999', priceUSD: '$149', desc: 'All 4 automation tools' },
  { id: 'service-lp', name: 'Custom Landing Page', price: '¥3,499', priceUSD: '$499', desc: '3-5 day delivery' },
  { id: 'service-mvp', name: 'MVP Development', price: '¥13,999', priceUSD: '$1,999', desc: '7-day delivery' },
];

export default function PayPage() {
  const [selected, setSelected] = useState('pro');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [licenseKey, setLicenseKey] = useState('');
  const [activated, setActivated] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const validCoupons: Record<string, number> = { PH50: 0.5, LAUNCH50: 0.5 };

  const getDiscountedPrice = (price: string) => {
    if (!couponApplied) return price;
    const num = parseFloat(price.replace(/[¥,]/g, ''));
    const discount = validCoupons[couponCode.toUpperCase()] || 0;
    return '¥' + Math.round(num * (1 - discount)).toLocaleString();
  };

  const applyCoupon = () => {
    if (validCoupons[couponCode.toUpperCase()]) {
      setCouponApplied(true);
    }
  };

  const product = products.find((p) => p.id === selected)!;
  const displayPrice = couponApplied ? getDiscountedPrice(product.price) : product.price;

  const handleSubmit = () => {
    if (!email) return;
    setSubmitted(true);
  };

  const handleActivate = () => {
    if (activatePro(licenseKey)) {
      setActivated(true);
    }
  };

  if (activated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center py-12">
        <Card className="max-w-md w-full mx-4">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">激活成功!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">Pro功能已解锁，所有模板和导出功能均可使用。</p>
            <Link href="/editor/saas-modern">
              <Button className="w-full">开始创建 →</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">购买 & 支付</h1>
          <p className="text-muted-foreground">选择产品，扫码支付，即刻使用</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Product Selection */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">1. 选择产品</h2>
            <div className="space-y-2">
              {products.map((p) => (
                <Card
                  key={p.id}
                  className={`cursor-pointer transition-all ${selected === p.id ? 'border-indigo-600 ring-2 ring-indigo-100' : 'hover:border-gray-300'}`}
                  onClick={() => setSelected(p.id)}
                >
                  <CardContent className="py-3 px-4 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.desc}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-indigo-600">{p.price}</div>
                      <div className="text-xs text-muted-foreground">{p.priceUSD}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator className="my-4" />

            <h2 className="font-semibold text-lg">2. 优惠码</h2>
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input
                  placeholder="输入优惠码，如 PH50"
                  value={couponCode}
                  onChange={(e) => { setCouponCode(e.target.value); setCouponApplied(false); }}
                />
                <Button variant="outline" onClick={applyCoupon} disabled={!couponCode}>
                  应用
                </Button>
              </div>
              {couponApplied && (
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <Check className="w-4 h-4" /> 优惠码已应用！{product.price} → {displayPrice}
                </p>
              )}
            </div>

            <Separator className="my-4" />

            <h2 className="font-semibold text-lg">3. 填写邮箱</h2>
            <div className="space-y-2">
              <Label htmlFor="email">接收授权码的邮箱</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button className="w-full mt-4" onClick={handleSubmit} disabled={!email}>
              确认订单
            </Button>
          </div>

          {/* Right: Payment QR Code */}
          <div className="space-y-4">
            {submitted ? (
              <>
                <h2 className="font-semibold text-lg">4. 扫码支付</h2>
                <Card>
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-lg">
                      支付宝扫码支付 <Badge variant="secondary">{displayPrice}</Badge>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      请支付 <strong>{displayPrice}</strong>
                      {couponApplied && <span className="line-through text-gray-400 ml-2">{product.price}</span>}
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 bg-white">
                      <Image
                        src="/zhifubao.jpg"
                        alt="Alipay QR Code"
                        width={220}
                        height={220}
                        className="rounded mx-auto"
                      />
                    </div>
              <div className="mt-4 space-y-2 text-center">
                <p className="text-sm text-muted-foreground">
                  支付后请保存支付宝交易号
                </p>
                <Link href="/auto-activate">
                  <Button variant="outline" size="sm" className="text-indigo-600 border-indigo-600">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    自助获取授权码（无需等待）
                  </Button>
                </Link>
              </div>
                  </CardContent>
                </Card>

                <h2 className="font-semibold text-lg">5. 输入授权码</h2>
                <Card>
                  <CardContent className="py-4 space-y-3">
                    <Label htmlFor="license">授权码（付款后通过邮件获取）</Label>
                    <div className="flex gap-2">
                      <Input
                        id="license"
                        placeholder="XXXXX-XXXXX-XXXXX"
                        value={licenseKey}
                        onChange={(e) => setLicenseKey(e.target.value)}
                      />
                      <Button onClick={handleActivate} disabled={!licenseKey}>
                        激活
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      付款后1小时内发送授权码。如未收到，请邮件联系 247647898@qq.com
                    </p>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="flex flex-col items-center justify-center py-16">
                <QrCode className="w-20 h-20 text-gray-200 mb-4" />
                <p className="text-muted-foreground">选择产品并填写邮箱后显示收款码</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
