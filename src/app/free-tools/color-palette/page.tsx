'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, ArrowRight, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const palettes = [
  { name: 'SaaS Pro', colors: ['#4F46E5', '#7C3AED', '#EC4899', '#10B981', '#F59E0B'] },
  { name: 'Ocean', colors: ['#0EA5E9', '#06B6D4', '#14B8A6', '#0D9488', '#0891B2'] },
  { name: 'Sunset', colors: ['#EF4444', '#F97316', '#EAB308', '#F59E0B', '#DC2626'] },
  { name: 'Forest', colors: ['#059669', '#10B981', '#34D399', '#6EE7B7', '#047857'] },
  { name: 'Midnight', colors: ['#1E1B4B', '#312E81', '#4338CA', '#6366F1', '#818CF8'] },
  { name: 'Minimal', colors: ['#18181B', '#3F3F46', '#71717A', '#A1A1AA', '#E4E4E7'] },
  { name: 'Candy', colors: ['#F472B6', '#C084FC', '#818CF8', '#38BDF8', '#34D399'] },
  { name: 'Earth', colors: ['#92400E', '#B45309', '#D97706', '#CA8A04', '#A16207'] },
];

export default function ColorPalettePage() {
  const [customColor, setCustomColor] = useState('#4F46E5');
  const [selectedPalette, setSelectedPalette] = useState(palettes[0]);
  const [copied, setCopied] = useState('');
  const [customPalette, setCustomPalette] = useState<string[]>([]);

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopied(color);
    setTimeout(() => setCopied(''), 1500);
  };

  const addToCustom = (color: string) => {
    if (customPalette.length < 5 && !customPalette.includes(color)) {
      setCustomPalette([...customPalette, color]);
    }
  };

  const copyCSSVars = () => {
    const css = customPalette.length > 0
      ? `:root {\n${customPalette.map((c, i) => `  --color-${i + 1}: ${c};`).join('\n')}\n}`
      : `:root {\n${selectedPalette.colors.map((c, i) => `  --color-${i + 1}: ${c};`).join('\n')}\n}`;
    navigator.clipboard.writeText(css);
    setCopied('css');
    setTimeout(() => setCopied(''), 2000);
  };

  const hexToHSL = (hex: string) => {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  };

  const displayColors = customPalette.length > 0 ? customPalette : selectedPalette.colors;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <Badge className="mb-4" variant="secondary">Free Tool</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Color Palette Generator</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Pick from curated palettes or build your own. Copy as CSS variables for your landing page.
            </p>
          </div>

          {/* Palette picker */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {palettes.map((p) => (
              <Card
                key={p.name}
                className={`cursor-pointer transition-all hover:-translate-y-0.5 ${selectedPalette.name === p.name && customPalette.length === 0 ? 'ring-2 ring-indigo-600' : ''}`}
                onClick={() => { setSelectedPalette(p); setCustomPalette([]); }}
              >
                <CardContent className="p-3">
                  <div className="flex gap-1 mb-2">
                    {p.colors.map((c) => (
                      <div key={c} className="w-6 h-6 rounded-full" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <p className="text-xs font-medium">{p.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Active palette */}
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">{customPalette.length > 0 ? 'Custom Palette' : selectedPalette.name}</CardTitle>
              <Button size="sm" variant="outline" onClick={copyCSSVars}>
                {copied === 'css' ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                {copied === 'css' ? 'Copied!' : 'Copy CSS Variables'}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 mb-4">
                {displayColors.map((color, i) => (
                  <div key={i} className="flex-1 text-center">
                    <div
                      className="w-full aspect-square rounded-xl cursor-pointer hover:scale-105 transition-transform mb-2"
                      style={{ backgroundColor: color }}
                      onClick={() => copyColor(color)}
                    />
                    <p className="text-xs font-mono">{color}</p>
                    <p className="text-xs text-muted-foreground">{hexToHSL(color)}</p>
                    {copied === color && <p className="text-xs text-green-600">Copied!</p>}
                  </div>
                ))}
              </div>
              <pre className="bg-gray-900 text-green-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                {customPalette.length > 0
                  ? `:root {\n${customPalette.map((c, i) => `  --color-${i + 1}: ${c};`).join('\n')}\n}`
                  : `:root {\n${selectedPalette.colors.map((c, i) => `  --color-${i + 1}: ${c};`).join('\n')}\n}`}
              </pre>
            </CardContent>
          </Card>

          {/* Custom color adder */}
          <Card className="mb-6">
            <CardHeader><CardTitle className="text-lg">Build Custom Palette</CardTitle></CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-3">
                <input type="color" value={customColor} onChange={(e) => setCustomColor(e.target.value)} className="w-10 h-10 rounded cursor-pointer border-0 p-0" />
                <Input value={customColor} onChange={(e) => setCustomColor(e.target.value)} className="flex-1 font-mono" />
                <Button onClick={() => addToCustom(customColor)} disabled={customPalette.length >= 5}>Add</Button>
                <Button variant="outline" onClick={() => setCustomPalette([])}><RefreshCw className="w-4 h-4" /></Button>
              </div>
              <p className="text-xs text-muted-foreground">{customPalette.length}/5 colors selected</p>
            </CardContent>
          </Card>

          {/* Upsell */}
          <div className="p-6 bg-indigo-50 rounded-xl text-center">
            <h3 className="font-bold text-lg mb-2">Use these colors in your landing page</h3>
            <p className="text-sm text-muted-foreground mb-4">Our templates support custom CSS variables. Pick your palette and start building.</p>
            <Link href="/"><Button>Build Landing Page Free <ArrowRight className="w-4 h-4 ml-1" /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
