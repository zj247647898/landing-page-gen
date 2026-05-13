'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Check, QrCode, Loader2 } from 'lucide-react';
import { activatePro } from '@/lib/payment';
import Link from 'next/link';

const validCoupons: Record<string, number> = { PH50: 0.5, LAUNCH50: 0.5 };

export default function PayPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [licenseKey, setLicenseKey] = useState('');
  const [activated, setActivated] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [activating, setActivating] = useState(false);

  // Auto-apply coupon from URL params (e.g. ?coupon=PH50)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const coupon = params.get('coupon');
    if (coupon && validCoupons[coupon.toUpperCase()]) {
      setCouponCode(coupon.toUpperCase());
      setCouponApplied(true);
    }
  }, []);

  const price = 199;
  const displayPrice = couponApplied ? '¥' + Math.floor(price * (1 - (validCoupons[couponCode.toUpperCase()] || 0))) : '¥' + price;

  const applyCoupon = () => {
    if (validCoupons[couponCode.toUpperCase()]) {
      setCouponApplied(true);
    }
  };

  const handleActivate = async () => {
    setActivating(true);
    const success = await activatePro(licenseKey);
    setActivating(false);
    if (success) {
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
            <p className="text-muted-foreground">已解锁全部15个模板和HTML导出功能</p>
            <Link href="/html-templates">
              <Button className="w-full">选择模板开始创建 →</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">购买 Pro</h1>
          <p className="text-muted-foreground">一次性付费，永久使用全部模板和导出功能</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Order Details */}
          <div className="space-y-6">
            {/* Product */}
            <Card className="border-indigo-200 bg-indigo-50/50">
              <CardContent className="py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold">Pro Plan</div>
                    <div className="text-sm text-muted-foreground">全部15个模板 + HTML导出</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-indigo-600">¥199</div>
                    <div className="text-xs text-muted-foreground">一次性</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coupon */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">优惠码</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="输入优惠码"
                  value={couponCode}
                  onChange={(e) => { setCouponCode(e.target.value); setCouponApplied(false); }}
                />
                <Button variant="outline" onClick={applyCoupon} disabled={!couponCode}>
                  应用
                </Button>
              </div>
              {couponApplied && (
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <Check className="w-4 h-4" /> 优惠码已应用！¥199 → {displayPrice}
                </p>
              )}
            </div>

            <Separator />

            {/* Email */}
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

            <Button className="w-full" onClick={() => email && setSubmitted(true)} disabled={!email}>
              确认订单 · {displayPrice}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              需要定制服务？邮件联系 247647898@qq.com
            </p>
          </div>

          {/* Right: Payment */}
          <div className="space-y-4">
            {submitted ? (
              <>
                <h2 className="font-semibold text-lg">扫码支付</h2>
                <Card>
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-lg">
                      支付宝扫码 <Badge variant="secondary">{displayPrice}</Badge>
                    </CardTitle>
                    {couponApplied && (
                      <p className="text-sm text-muted-foreground">
                        原价 <span className="line-through">¥199</span>，优惠价 <strong>{displayPrice}</strong>
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/landing-page-gen/zhifubao.jpg"
                        alt="Alipay QR Code"
                        width={220}
                        height={220}
                        className="rounded mx-auto"
                      />
                    </div>
                    <div className="mt-4 space-y-2 text-center">
                      <p className="text-sm text-muted-foreground">
                        支付后截图保存支付记录
                      </p>
                      <Link href="/auto-activate">
                        <Button variant="outline" size="sm" className="text-indigo-600 border-indigo-600">
                          发送截图获取授权码 →
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="font-semibold text-lg">输入授权码</h2>
                <Card>
                  <CardContent className="py-4 space-y-3">
                    <Label htmlFor="license">授权码</Label>
                    <div className="flex gap-2">
                      <Input
                        id="license"
                        placeholder="XXXXX-XXXXX-XXXXX"
                        value={licenseKey}
                        onChange={(e) => setLicenseKey(e.target.value)}
                        className="font-mono"
                      />
                      <Button onClick={handleActivate} disabled={!licenseKey || activating}>
                        {activating ? <Loader2 className="w-4 h-4 animate-spin" /> : '激活'}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      付款确认后授权码将发送到您的邮箱。如未收到，请邮件联系 247647898@qq.com
                    </p>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="flex flex-col items-center justify-center py-16">
                <QrCode className="w-20 h-20 text-gray-200 mb-4" />
                <p className="text-muted-foreground">填写邮箱后显示收款码</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
