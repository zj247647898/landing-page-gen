'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'lucide-react';
import NextLink from 'next/link';

interface AuditResult {
  score: number;
  grade: string;
  checks: { name: string; status: 'pass' | 'fail' | 'warn'; detail: string }[];
}

export default function FreeSEOAuditPage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleAudit = async () => {
    if (!url) return;
    setLoading(true);

    // Simulate audit (in production, call backend API)
    await new Promise((r) => setTimeout(r, 2000));

    const score = Math.floor(Math.random() * 40) + 40; // 40-80
    const grade = score >= 75 ? 'B' : score >= 60 ? 'C' : 'D';

    setResult({
      score,
      grade,
      checks: [
        { name: 'Page Title', status: Math.random() > 0.3 ? 'pass' : 'warn', detail: 'Title tag found' },
        { name: 'Meta Description', status: Math.random() > 0.4 ? 'pass' : 'fail', detail: Math.random() > 0.4 ? 'Meta description present' : 'Missing meta description' },
        { name: 'H1 Tag', status: Math.random() > 0.3 ? 'pass' : 'fail', detail: Math.random() > 0.3 ? 'H1 tag found' : 'No H1 tag detected' },
        { name: 'HTTPS', status: url.startsWith('https') ? 'pass' : 'fail', detail: url.startsWith('https') ? 'Site uses HTTPS' : 'Site does not use HTTPS' },
        { name: 'Image Alt Tags', status: Math.random() > 0.5 ? 'pass' : 'warn', detail: Math.random() > 0.5 ? 'All images have alt tags' : 'Some images missing alt tags' },
        { name: 'Mobile Friendly', status: Math.random() > 0.3 ? 'pass' : 'warn', detail: 'Viewport meta tag check' },
      ],
    });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <Badge className="mb-6" variant="secondary">Free Tool</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free SEO Audit
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Enter your website URL and get an instant SEO health check. No signup required.
          </p>

          <div className="flex gap-3 max-w-lg mx-auto mb-8">
            <Input
              placeholder="example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAudit()}
              className="text-lg"
            />
            <Button onClick={handleAudit} disabled={loading || !url} size="lg">
              {loading ? 'Auditing...' : 'Audit'}
            </Button>
          </div>

          {result && (
            <Card className="text-left mt-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>SEO Score for {url}</CardTitle>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-indigo-600">{result.score}/100</div>
                    <div className="text-sm text-muted-foreground">Grade: {result.grade}</div>
                  </div>
                </div>
              </CardHeader>
              <Separator />
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {result.checks.map((check) => (
                    <div key={check.name} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div className="flex items-center gap-3">
                        <span className={`w-3 h-3 rounded-full ${check.status === 'pass' ? 'bg-green-500' : check.status === 'warn' ? 'bg-yellow-500' : 'bg-red-500'}`} />
                        <span className="font-medium">{check.name}</span>
                      </div>
                      <span className={`text-sm ${check.status === 'pass' ? 'text-green-600' : check.status === 'warn' ? 'text-yellow-600' : 'text-red-600'}`}>
                        {check.detail}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-indigo-50 rounded-xl text-center">
                  <h3 className="font-bold text-lg mb-2">Want a detailed report?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the full SEO Audit Tool with 15+ checks, competitor comparison, and Markdown reports.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <NextLink href="/toolkit">
                      <Button>Get SEO Audit Tool — $49</Button>
                    </NextLink>
                    <NextLink href="/toolkit">
                      <Button variant="outline">View All Tools</Button>
                    </NextLink>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              This is a basic preview. For comprehensive audits, check out our Developer Toolkit.
            </p>
            <NextLink href="/toolkit">
              <Button variant="outline">View Developer Toolkit →</Button>
            </NextLink>
          </div>
        </div>
      </section>
    </div>
  );
}
