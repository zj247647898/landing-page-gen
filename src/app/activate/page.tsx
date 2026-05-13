'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Check, Key, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { activatePro, isProUser } from '@/lib/payment';

export default function ActivatePage() {
  const [licenseKey, setLicenseKey] = useState('');
  const [activated, setActivated] = useState(isProUser());
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleActivate = async () => {
    setLoading(true);
    setError('');
    try {
      const success = await activatePro(licenseKey);
      if (success) {
        setActivated(true);
      } else {
        setError('授权码无效，请检查后重试');
      }
    } catch {
      setError('激活失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  if (activated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">激活成功!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              已解锁全部15个模板和HTML导出功能
            </p>
            <Link href="/html-templates">
              <Button className="w-full">选择模板开始创建 →</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
      <Card className="max-w-md w-full mx-4">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Key className="w-8 h-8 text-indigo-600" />
          </div>
          <CardTitle className="text-2xl">输入授权码</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            输入付款确认后收到的授权码
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="license">授权码</Label>
            <Input
              id="license"
              placeholder="XXXXX-XXXXX-XXXXX"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value.toUpperCase())}
              className="font-mono text-center tracking-widest"
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
          <Button className="w-full" onClick={handleActivate} disabled={!licenseKey || loading}>
            {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            {loading ? '验证中...' : '激活'}
          </Button>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">还没有授权码？</p>
            <Link href="/pay">
              <Button variant="outline" size="sm">
                购买 Pro — ¥199
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
