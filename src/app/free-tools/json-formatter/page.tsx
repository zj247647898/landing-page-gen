'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Trash2, Sparkles, Braces, Minimize2, AlignLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SAMPLE_JSON = `{
  "name": "Landing Page Pro",
  "version": "2.1.0",
  "features": ["drag-and-drop", "responsive", "SEO optimized"],
  "pricing": {
    "starter": { "price": 0, "currency": "USD" },
    "pro": { "price": 29, "currency": "USD" }
  },
  "active": true,
  "metadata": null,
  "launchDate": "2025-01-15"
}`;

type IndentType = '2' | '4' | 'tab';

function getDepth(obj: unknown, current = 0): number {
  if (typeof obj !== 'object' || obj === null) return current;
  let max = current;
  for (const val of Object.values(obj as Record<string, unknown>)) {
    const d = getDepth(val, current + 1);
    if (d > max) max = d;
  }
  return max;
}

function countKeys(obj: unknown): number {
  if (typeof obj !== 'object' || obj === null) return 0;
  let count = 0;
  for (const val of Object.values(obj as Record<string, unknown>)) {
    count += 1 + countKeys(val);
  }
  return count;
}

function colorizeJSON(json: string): string {
  return json.replace(
    /("(?:\\.|[^"\\])*")\s*:/g,
    '<span style="color:#7c3aed">$1</span>:'
  ).replace(
    /:\s*("(?:\\.|[^"\\])*")/g,
    ': <span style="color:#059669">$1</span>'
  ).replace(
    /:\s*(\d+(?:\.\d+)?)/g,
    ': <span style="color:#2563eb">$1</span>'
  ).replace(
    /:\s*(true|false)/g,
    ': <span style="color:#d97706">$1</span>'
  ).replace(
    /:\s*(null)/g,
    ': <span style="color:#9ca3af">$1</span>'
  );
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function JsonFormatterPage() {
  const [input, setInput] = useState('');
  const [indent, setIndent] = useState<IndentType>('2');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<{ message: string; line?: number } | null>(null);

  const parsed = useMemo(() => {
    if (!input.trim()) {
      setError(null);
      return null;
    }
    try {
      const obj = JSON.parse(input);
      setError(null);
      return obj;
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Invalid JSON';
      const lineMatch = msg.match(/position\s+(\d+)/i);
      let line: number | undefined;
      if (lineMatch) {
        const pos = parseInt(lineMatch[1], 10);
        line = input.substring(0, pos).split('\n').length;
      }
      setError({ message: msg, line });
      return null;
    }
  }, [input]);

  const indentStr = indent === 'tab' ? '\t' : ' '.repeat(Number(indent));

  const formatted = useMemo(() => {
    if (!parsed) return '';
    return JSON.stringify(parsed, null, indentStr);
  }, [parsed, indentStr]);

  const minified = useMemo(() => {
    if (!parsed) return '';
    return JSON.stringify(parsed);
  }, [parsed]);

  const stats = useMemo(() => {
    if (!parsed) return null;
    return {
      keys: countKeys(parsed),
      depth: getDepth(parsed),
      size: new Blob([input]).size,
    };
  }, [parsed, input]);

  const handleFormat = () => {
    if (!input.trim()) return;
    try {
      const obj = JSON.parse(input);
      setInput(JSON.stringify(obj, null, indentStr));
    } catch {
      // error already shown via parsed state
    }
  };

  const handleMinify = () => {
    if (!input.trim()) return;
    try {
      const obj = JSON.parse(input);
      setInput(JSON.stringify(obj));
    } catch {
      // error already shown
    }
  };

  const handleCopy = () => {
    const text = formatted || '';
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => {
    setInput('');
    setError(null);
  };

  const handleSample = () => {
    setInput(SAMPLE_JSON);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <Badge className="mb-4" variant="secondary">Free Tool</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">JSON Formatter & Validator</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Paste your JSON to format, validate, minify, and analyze. Color-coded output with error detection.
            </p>
          </div>

          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Button size="sm" onClick={handleFormat} disabled={!parsed}>
              <AlignLeft className="w-4 h-4 mr-1" /> Format
            </Button>
            <Button size="sm" variant="outline" onClick={handleMinify} disabled={!parsed}>
              <Minimize2 className="w-4 h-4 mr-1" /> Minify
            </Button>
            <Button size="sm" variant="outline" onClick={handleCopy} disabled={!formatted}>
              {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
            <Button size="sm" variant="outline" onClick={handleClear}>
              <Trash2 className="w-4 h-4 mr-1" /> Clear
            </Button>
            <Button size="sm" variant="outline" onClick={handleSample}>
              <Sparkles className="w-4 h-4 mr-1" /> Sample JSON
            </Button>
            <div className="flex items-center gap-1 ml-auto">
              <span className="text-xs text-muted-foreground mr-1">Indent:</span>
              {(['2', '4', 'tab'] as IndentType[]).map((v) => (
                <Button
                  key={v}
                  size="sm"
                  variant={indent === v ? 'default' : 'outline'}
                  className="px-2.5 text-xs"
                  onClick={() => setIndent(v)}
                >
                  {v === 'tab' ? 'Tab' : `${v} SP`}
                </Button>
              ))}
            </div>
          </div>

          {/* Error banner */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              <span className="font-semibold">Invalid JSON</span>
              {error.line && <span className="ml-2 text-xs">(line {error.line})</span>}
              <span className="ml-2 text-xs text-red-500">{error.message}</span>
            </div>
          )}

          {/* Main editor area */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Input */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Braces className="w-4 h-4" /> Input JSON
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder='Paste your JSON here...\n\n{\n  "key": "value"\n}'
                  className="min-h-[400px] font-mono text-sm resize-y"
                  spellCheck={false}
                />
              </CardContent>
            </Card>

            {/* Output */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <AlignLeft className="w-4 h-4" /> Formatted Output
                </CardTitle>
              </CardHeader>
              <CardContent>
                {formatted ? (
                  <pre className="min-h-[400px] max-h-[600px] overflow-auto rounded-lg bg-gray-900 text-gray-100 p-4 text-sm font-mono leading-relaxed">
                    <code dangerouslySetInnerHTML={{ __html: colorizeJSON(formatted) }} />
                  </pre>
                ) : (
                  <div className="min-h-[400px] flex items-center justify-center text-muted-foreground text-sm border rounded-lg border-dashed">
                    Formatted output will appear here
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          {stats && (
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="outline" className="text-xs py-1 px-3">
                {stats.keys} keys
              </Badge>
              <Badge variant="outline" className="text-xs py-1 px-3">
                Depth: {stats.depth}
              </Badge>
              <Badge variant="outline" className="text-xs py-1 px-3">
                Size: {formatSize(stats.size)}
              </Badge>
              {parsed !== null && (
                <Badge variant="outline" className="text-xs py-1 px-3 text-green-600 border-green-200 bg-green-50">
                  Valid JSON
                </Badge>
              )}
            </div>
          )}

          {/* Minified preview */}
          {minified && (
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Minified</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg p-3 text-xs font-mono break-all max-h-24 overflow-auto text-gray-700">
                  {minified}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Upsell CTA */}
          <div className="p-6 bg-indigo-50 rounded-xl text-center">
            <h3 className="font-bold text-lg mb-2">Need more power? Upgrade to Pro</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Unlock batch JSON processing, schema validation, diff comparison, and more developer tools.
            </p>
            <Link href="/pricing">
              <Button>
                Upgrade to Pro <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
