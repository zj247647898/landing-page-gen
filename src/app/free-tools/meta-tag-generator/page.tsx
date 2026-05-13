'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Copy, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MetaTagGeneratorPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('');
  const [copied, setCopied] = useState(false);

  const generatedCode = `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title || 'Your Page Title'}</title>
<meta name="description" content="${description || 'Your page description'}">
${keywords ? `<meta name="keywords" content="${keywords}">` : '<!-- Add keywords -->'}
<meta name="robots" content="index, follow">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="${url || 'https://example.com/'}">
<meta property="og:title" content="${title || 'Your Page Title'}">
<meta property="og:description" content="${description || 'Your page description'}">
${image ? `<meta property="og:image" content="${image}">` : '<!-- Add OG image (1200x630 recommended) -->'}

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="${url || 'https://example.com/'}">
<meta name="twitter:title" content="${title || 'Your Page Title'}">
<meta name="twitter:description" content="${description || 'Your page description'}">
${image ? `<meta name="twitter:image" content="${image}">` : '<!-- Add Twitter image -->'}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const titleLen = title.length;
  const descLen = description.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <Badge className="mb-4" variant="secondary">Free Tool</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Meta Tag Generator</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Generate SEO-ready meta tags for your website. Includes Open Graph and Twitter Card tags.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Input */}
            <div className="space-y-4">
              <Card>
                <CardHeader><CardTitle className="text-lg">Page Info</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Page Title</Label>
                    <Input placeholder="My Awesome Product — Best Solution for X" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <p className={`text-xs ${titleLen > 60 ? 'text-red-500' : titleLen > 0 ? 'text-green-600' : 'text-muted-foreground'}`}>
                      {titleLen}/60 characters {titleLen > 60 ? '(too long!)' : titleLen >= 30 ? '(good)' : ''}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea placeholder="A brief description of your page (120-160 characters recommended)" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
                    <p className={`text-xs ${descLen > 160 ? 'text-red-500' : descLen > 0 ? 'text-green-600' : 'text-muted-foreground'}`}>
                      {descLen}/160 characters {descLen > 160 ? '(too long!)' : descLen >= 120 ? '(good)' : ''}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>Keywords (comma separated)</Label>
                    <Input placeholder="landing page, SaaS, no code" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Page URL</Label>
                    <Input placeholder="https://example.com/" value={url} onChange={(e) => setUrl(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>OG Image URL</Label>
                    <Input placeholder="https://example.com/og-image.jpg" value={image} onChange={(e) => setImage(e.target.value)} />
                    <p className="text-xs text-muted-foreground">Recommended: 1200x630px</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Output */}
            <div className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Generated Tags</CardTitle>
                  <Button size="sm" variant="outline" onClick={handleCopy}>
                    {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto whitespace-pre-wrap font-mono">
                    {generatedCode}
                  </pre>
                </CardContent>
              </Card>

              {/* Preview */}
              {(title || description) && (
                <Card>
                  <CardHeader><CardTitle className="text-lg">Google Preview</CardTitle></CardHeader>
                  <CardContent>
                    <div className="p-4 bg-white border rounded-lg">
                      <p className="text-lg text-blue-700 hover:underline cursor-pointer truncate">{title || 'Page Title'}</p>
                      <p className="text-sm text-green-700 truncate">{url || 'https://example.com/'}</p>
                      <p className="text-sm text-gray-600 line-clamp-2">{description || 'Page description will appear here...'}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Upsell */}
              <div className="p-4 bg-indigo-50 rounded-xl text-center">
                <p className="text-sm font-medium mb-2">Need a landing page for these meta tags?</p>
                <Link href="/">
                  <Button size="sm">Build One Free <ArrowRight className="w-4 h-4 ml-1" /></Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
