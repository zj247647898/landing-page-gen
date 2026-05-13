'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Copy, Check, Trash2, ArrowRightLeft, FileText } from 'lucide-react';
import Link from 'next/link';

type Mode = 'encode' | 'decode';

export default function Base64Page() {
  const [mode, setMode] = useState<Mode>('encode');
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);

  const getOutput = (): string => {
    if (!input.trim()) return '';
    try {
      if (mode === 'encode') {
        return btoa(unescape(encodeURIComponent(input)));
      } else {
        return decodeURIComponent(escape(atob(input.trim())));
      }
    } catch {
      return '__ERROR__';
    }
  };

  const output = getOutput();
  const hasError = output === '__ERROR__';
  const displayOutput = hasError ? '' : output;

  const handleCopy = () => {
    if (!displayOutput) return;
    navigator.clipboard.writeText(displayOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => {
    setInput('');
  };

  const toggleMode = () => {
    setMode((prev) => (prev === 'encode' ? 'decode' : 'encode'));
    setInput('');
  };

  const inputCharCount = input.length;
  const outputCharCount = displayOutput.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <Badge className="mb-4" variant="secondary">Free Tool</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Base64 Encoder / Decoder</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Instantly encode text to Base64 or decode Base64 back to text. Supports Unicode and URL-safe characters.
            </p>
          </div>

          {/* Mode toggle */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Button
              variant={mode === 'encode' ? 'default' : 'outline'}
              onClick={() => { setMode('encode'); setInput(''); }}
            >
              <FileText className="w-4 h-4 mr-1" />
              Encode
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMode}>
              <ArrowRightLeft className="w-4 h-4" />
            </Button>
            <Button
              variant={mode === 'decode' ? 'default' : 'outline'}
              onClick={() => { setMode('decode'); setInput(''); }}
            >
              Decode
            </Button>
          </div>

          {/* Input */}
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">
                {mode === 'encode' ? 'Plain Text' : 'Base64 String'}
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{inputCharCount} chars</span>
                <Button size="sm" variant="ghost" onClick={handleClear} disabled={!input}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder={mode === 'encode' ? 'Type or paste text to encode...' : 'Paste Base64 string to decode...'}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={6}
                className="font-mono text-sm resize-y"
              />
            </CardContent>
          </Card>

          {/* Output */}
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">
                {mode === 'encode' ? 'Base64 Output' : 'Decoded Text'}
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{outputCharCount} chars</span>
                <Button size="sm" variant="outline" onClick={handleCopy} disabled={!displayOutput}>
                  {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {hasError ? (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  Invalid Base64 input. Please check your string and try again.
                </div>
              ) : (
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto whitespace-pre-wrap font-mono min-h-[120px]">
                  {displayOutput || (mode === 'encode' ? 'Encoded output will appear here...' : 'Decoded output will appear here...')}
                </pre>
              )}
            </CardContent>
          </Card>

          {/* Upsell */}
          <div className="p-6 bg-indigo-50 rounded-xl text-center">
            <h3 className="font-bold text-lg mb-2">Need more developer tools?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Upgrade to Pro for advanced encoding tools, batch processing, and API access.
            </p>
            <Link href="/pricing">
              <Button>Upgrade to Pro</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
