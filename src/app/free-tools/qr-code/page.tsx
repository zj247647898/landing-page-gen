'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Download, Copy, Check, QrCode, ArrowRight } from 'lucide-react';
import Link from 'next/link';

declare global {
  interface Window {
    QRCode: {
      toCanvas: (
        canvas: HTMLCanvasElement,
        text: string,
        options: Record<string, unknown>,
        callback: (error: Error | null | undefined) => void
      ) => void;
      toDataURL: (
        text: string,
        options: Record<string, unknown>,
        callback: (error: Error | null | undefined, url: string) => void
      ) => void;
    };
  }
}

export default function QRCodePage() {
  const [text, setText] = useState('https://example.com');
  const [size, setSize] = useState('256');
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [qrLoaded, setQrLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scriptLoadedRef = useRef(false);

  // Dynamically load QRCode library
  useEffect(() => {
    if (scriptLoadedRef.current) return;
    const existingScript = document.querySelector(
      'script[src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"]'
    );
    if (existingScript) {
      if (window.QRCode) setQrLoaded(true);
      scriptLoadedRef.current = true;
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js';
    script.async = true;
    script.onload = () => {
      setQrLoaded(true);
      scriptLoadedRef.current = true;
    };
    document.head.appendChild(script);
  }, []);

  const generateQR = useCallback(() => {
    if (!qrLoaded || !window.QRCode || !text.trim() || !canvasRef.current) return;

    setGenerating(true);
    const canvas = canvasRef.current;
    const currentSize = parseInt(size, 10);

    window.QRCode.toCanvas(
      canvas,
      text,
      {
        width: currentSize,
        margin: 2,
        color: {
          dark: fgColor,
          light: bgColor,
        },
      },
      (error) => {
        setGenerating(false);
        if (error) {
          console.error('QR generation error:', error);
        }
      }
    );
  }, [qrLoaded, text, size, fgColor, bgColor]);

  // Re-generate when inputs change
  useEffect(() => {
    generateQR();
  }, [generateQR]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `qrcode-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleCopy = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, 'image/png')
      );
      if (blob) {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob }),
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback: copy data URL as text
      try {
        await navigator.clipboard.writeText(canvas.toDataURL('image/png'));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        console.error('Failed to copy QR code');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4" variant="secondary">Free Tool</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">QR Code Generator</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Generate customizable QR codes instantly. Choose colors, size, and download as PNG — no signup required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-indigo-600" />
                  Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Text/URL input */}
                <div className="space-y-2">
                  <Label htmlFor="qr-text">Text or URL</Label>
                  <Input
                    id="qr-text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text or URL..."
                  />
                </div>

                {/* Size select */}
                <div className="space-y-2">
                  <Label>Size (px)</Label>
                  <Select value={size} onValueChange={(v) => v !== null && setSize(v)}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="128">128 × 128</SelectItem>
                      <SelectItem value="256">256 × 256</SelectItem>
                      <SelectItem value="512">512 × 512</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Colors */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fg-color">Foreground</Label>
                    <div className="flex items-center gap-2">
                      <input
                        id="fg-color"
                        type="color"
                        value={fgColor}
                        onChange={(e) => setFgColor(e.target.value)}
                        className="w-10 h-10 rounded cursor-pointer border border-input p-0.5"
                      />
                      <Input
                        value={fgColor}
                        onChange={(e) => setFgColor(e.target.value)}
                        className="font-mono text-sm"
                        maxLength={7}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bg-color">Background</Label>
                    <div className="flex items-center gap-2">
                      <input
                        id="bg-color"
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="w-10 h-10 rounded cursor-pointer border border-input p-0.5"
                      />
                      <Input
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="font-mono text-sm"
                        maxLength={7}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preview & Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center gap-4">
                  <div
                    className="border rounded-lg p-4 bg-white flex items-center justify-center"
                    style={{ minHeight: 200 }}
                  >
                    {!qrLoaded ? (
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                        Loading QR engine...
                      </div>
                    ) : !text.trim() ? (
                      <p className="text-sm text-muted-foreground">Enter text or URL to generate</p>
                    ) : (
                      <canvas
                        ref={canvasRef}
                        className="max-w-full h-auto"
                        style={{ imageRendering: 'pixelated' }}
                      />
                    )}
                  </div>

                  <div className="flex gap-2 w-full">
                    <Button
                      className="flex-1"
                      onClick={handleDownload}
                      disabled={!qrLoaded || !text.trim() || generating}
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download PNG
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={handleCopy}
                      disabled={!qrLoaded || !text.trim() || generating}
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-1" />
                          Copy Image
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info section */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <p className="font-semibold mb-1">Instant Generation</p>
                <p className="text-sm text-muted-foreground">QR codes generated in real-time as you type</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="font-semibold mb-1">Fully Customizable</p>
                <p className="text-sm text-muted-foreground">Choose colors and size to match your brand</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="font-semibold mb-1">No Signup Required</p>
                <p className="text-sm text-muted-foreground">Free to use with no account or limits</p>
              </CardContent>
            </Card>
          </div>

          {/* Upsell CTA */}
          <div className="mt-8 p-6 bg-indigo-50 rounded-xl text-center">
            <h3 className="font-bold text-lg mb-2">Add QR codes to your landing pages</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Upgrade to Pro for landing page templates with built-in QR code support and more.
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
