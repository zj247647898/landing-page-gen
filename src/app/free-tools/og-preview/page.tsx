'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export default function OGPreviewPage() {
  const [title, setTitle] = useState('My Awesome Product — The Best Solution');
  const [description, setDescription] = useState('Discover how our product can help you achieve your goals faster. Try it free today and see the difference.');
  const [url, setUrl] = useState('example.com');
  const [image, setImage] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <Badge className="mb-4" variant="secondary">Free Tool</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Open Graph Preview</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Preview how your link looks when shared on Twitter, Facebook, LinkedIn, and Slack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Input */}
            <Card>
              <CardHeader><CardTitle className="text-lg">Link Info</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Input value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Domain</Label>
                  <Input value={url} onChange={(e) => setUrl(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Image URL (optional)</Label>
                  <Input placeholder="https://example.com/og.jpg" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
              </CardContent>
            </Card>

            {/* Previews */}
            <div className="space-y-4">
              {/* Twitter */}
              <Card>
                <CardHeader><CardTitle className="text-sm text-muted-foreground">Twitter / X Preview</CardTitle></CardHeader>
                <CardContent>
                  <div className="border rounded-xl overflow-hidden">
                    {image ? (
                      <div className="aspect-[2/1] bg-gray-100 overflow-hidden">
                        <img src={image} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                      </div>
                    ) : (
                      <div className="aspect-[2/1] bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-sm">1200 × 630</div>
                    )}
                    <div className="p-3">
                      <p className="text-xs text-gray-500">{url}</p>
                      <p className="font-semibold text-sm truncate">{title || 'Page Title'}</p>
                      <p className="text-xs text-gray-500 line-clamp-2">{description || 'Description'}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Facebook */}
              <Card>
                <CardHeader><CardTitle className="text-sm text-muted-foreground">Facebook Preview</CardTitle></CardHeader>
                <CardContent>
                  <div className="border rounded-lg overflow-hidden bg-white">
                    {image ? (
                      <div className="aspect-[1.91/1] bg-gray-100 overflow-hidden">
                        <img src={image} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                      </div>
                    ) : (
                      <div className="aspect-[1.91/1] bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm">1200 × 630</div>
                    )}
                    <div className="p-3 border-t bg-gray-50">
                      <p className="text-xs text-gray-500 uppercase">{url}</p>
                      <p className="font-semibold text-sm truncate">{title || 'Page Title'}</p>
                      <p className="text-xs text-gray-500 line-clamp-2">{description || 'Description'}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Slack */}
              <Card>
                <CardHeader><CardTitle className="text-sm text-muted-foreground">Slack Preview</CardTitle></CardHeader>
                <CardContent>
                  <div className="flex gap-3 p-3 border-l-4 border-indigo-500 bg-white rounded">
                    <div className="flex-1">
                      <p className="text-indigo-700 font-medium text-sm truncate">{title || 'Page Title'}</p>
                      <p className="text-xs text-gray-500 line-clamp-2">{description || 'Description'}</p>
                      <p className="text-xs text-gray-400 mt-1">{url}</p>
                    </div>
                    {image && (
                      <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                        <img src={image} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Upsell */}
              <div className="p-4 bg-indigo-50 rounded-xl text-center">
                <p className="text-sm font-medium mb-2">Need better OG tags for your landing page?</p>
                <div className="flex gap-2 justify-center">
                  <Link href="/free-tools/meta-tag-generator"><Button size="sm" variant="outline">Meta Tag Generator</Button></Link>
                  <Link href="/"><Button size="sm">Build Landing Page</Button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
