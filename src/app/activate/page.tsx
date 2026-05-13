'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Check, Key, Mail } from 'lucide-react';
import Link from 'next/link';
import { activatePro, isProUser } from '@/lib/payment';

export default function ActivatePage() {
  const [licenseKey, setLicenseKey] = useState('');
  const [activated, setActivated] = useState(isProUser());
  const [error, setError] = useState('');

  const handleActivate = () => {
    if (activatePro(licenseKey)) {
      setActivated(true);
      setError('');
    } else {
      setError('Invalid license key. Please check and try again.');
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
            <CardTitle className="text-2xl">Pro Activated!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              You now have access to all 9 templates and HTML export.
            </p>
            <Link href="/editor/saas-modern">
              <Button className="w-full">Start Creating →</Button>
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
          <CardTitle className="text-2xl">Activate Pro</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Enter the license key from your purchase confirmation email
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="license">License Key</Label>
            <Input
              id="license"
              placeholder="XXXXX-XXXXX-XXXXX-XXXXX"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
          <Button className="w-full" onClick={handleActivate} disabled={!licenseKey}>
            Activate
          </Button>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Don&apos;t have a license key?</p>
            <Link href="/pricing">
              <Button variant="outline" size="sm">
                Purchase Pro — $29
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
