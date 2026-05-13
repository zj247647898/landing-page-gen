'use client';

import { useState, useCallback } from 'react';
import { TemplateField } from '@/lib/templates/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Eye, Download, Check, Loader2, Lock } from 'lucide-react';
import JSZip from 'jszip';
import Link from 'next/link';

interface TemplateEditorProps {
  templateId: string;
  templateName: string;
  templateDescription: string;
  templateCategory: string;
  fields: TemplateField[];
  initialHtml: string;
}

export default function TemplateEditor({
  templateId,
  templateName,
  templateDescription,
  templateCategory,
  fields,
  initialHtml,
}: TemplateEditorProps) {
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    fields.forEach((field) => {
      initial[field.id] = field.defaultValue;
    });
    return initial;
  });

  const [showPreview, setShowPreview] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [exported, setExported] = useState(false);

  // Free tier: only saas-modern is free. All others require Pro.
  const isFreeTemplate = templateId === 'saas-modern';
  // In production, check localStorage for purchase status
  const [isPro] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lpgen_pro') === 'true';
    }
    return false;
  });
  const canExport = isFreeTemplate || isPro;

  // Generate HTML by replacing placeholders in initialHtml
  const generateHtml = useCallback(() => {
    let html = initialHtml;
    fields.forEach((field) => {
      const value = formData[field.id] || field.defaultValue;
      const regex = new RegExp(`\\{\\{${field.id}\\}\\}`, 'g');
      html = html.replace(regex, value);
    });
    return html;
  }, [formData, fields, initialHtml]);

  const handleChange = useCallback((fieldId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  }, []);

  const renderedHtml = generateHtml();

  const handleExport = useCallback(async () => {
    if (!canExport) return;
    setExporting(true);
    try {
      const zip = new JSZip();
      zip.file('index.html', renderedHtml);
      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${templateId}-landing-page.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setExported(true);
      setTimeout(() => setExported(false), 3000);
    } finally {
      setExporting(false);
    }
  }, [renderedHtml, templateId]);

  const renderField = (field: TemplateField) => {
    switch (field.type) {
      case 'textarea':
        return (
          <Textarea
            id={field.id}
            value={formData[field.id] || ''}
            onChange={(e) => handleChange(field.id, e.target.value)}
            rows={3}
          />
        );
      case 'color':
        return (
          <div className="flex items-center gap-3">
            <input
              type="color"
              id={field.id}
              value={formData[field.id] || ''}
              onChange={(e) => handleChange(field.id, e.target.value)}
              className="w-10 h-10 rounded cursor-pointer border-0 p-0"
            />
            <Input
              value={formData[field.id] || ''}
              onChange={(e) => handleChange(field.id, e.target.value)}
              className="flex-1"
            />
          </div>
        );
      default:
        return (
          <Input
            id={field.id}
            value={formData[field.id] || ''}
            onChange={(e) => handleChange(field.id, e.target.value)}
          />
        );
    }
  };

  const [mobileTab, setMobileTab] = useState<'edit' | 'preview'>('edit');

  return (
    <div className="flex flex-col h-[calc(100vh-56px)]">
      {/* Pro notice bar */}
      {!canExport && (
        <div className="bg-indigo-50 border-b border-indigo-100 px-4 py-2 flex items-center justify-center gap-2 text-sm">
          <Lock className="w-4 h-4 text-indigo-600" />
          <span className="text-indigo-800">Preview mode — editing is free, export requires</span>
          <Link href="/pay" className="text-indigo-600 font-medium hover:underline">Pro Plan</Link>
        </div>
      )}
      <div className="flex flex-col md:flex-row flex-1 md:gap-4 p-2 md:p-4 overflow-hidden">
      {/* Mobile tab toggle - fixed at top on mobile */}
      <div className="flex md:hidden gap-2 mb-2">
        <Button size="sm" variant={mobileTab === 'edit' ? 'default' : 'outline'} onClick={() => setMobileTab('edit')} className="flex-1">
          Edit
        </Button>
        <Button size="sm" variant={mobileTab === 'preview' ? 'default' : 'outline'} onClick={() => setMobileTab('preview')} className="flex-1">
          Preview
        </Button>
      </div>

      {/* Editor Panel */}
      <Card className={`w-full md:w-[400px] flex-shrink-0 flex flex-col overflow-hidden mb-2 md:mb-0 ${mobileTab === 'preview' ? 'hidden md:flex' : 'flex'}`}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{templateName}</CardTitle>
            <Badge variant="secondary">{templateCategory}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">{templateDescription}</p>
        </CardHeader>
        <Separator />
        <CardContent className="flex-1 overflow-y-auto py-4">
          <div className="space-y-4">
            {fields.map((field) => (
              <div key={field.id} className="space-y-2">
                <Label htmlFor={field.id}>
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </Label>
                {renderField(field)}
              </div>
            ))}
          </div>
        </CardContent>
        <Separator />
        <div className="p-4 space-y-2">
          <div className={mobileTab === 'preview' ? 'hidden md:block' : ''}>
            <Button
              className="w-full"
              onClick={() => setShowPreview(!showPreview)}
              variant="outline"
            >
              <Eye className="w-4 h-4 mr-2" />
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </Button>
            <Button
              className="w-full mt-2"
              onClick={handleExport}
              disabled={exporting || !canExport}
            >
              {canExport ? (
                exporting ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : exported ? (
                  <Check className="w-4 h-4 mr-2" />
                ) : (
                  <Download className="w-4 h-4 mr-2" />
                )
              ) : (
                <Lock className="w-4 h-4 mr-2" />
              )}
              {!canExport ? 'Pro Required' : exporting ? 'Exporting...' : exported ? 'Downloaded!' : 'Export HTML'}
            </Button>
            {!canExport && (
              <Link href="/pay" className="block mt-2">
                <Button variant="outline" className="w-full text-indigo-600 border-indigo-600">
                  Upgrade to Pro — ¥199
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Card>

      {/* Preview Panel - hidden on mobile when editing, shown when preview tab selected */}
      <Card className={`flex-1 flex flex-col overflow-hidden ${mobileTab === 'edit' ? 'hidden md:flex' : 'flex'}`}>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Live Preview</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="flex-1 p-0 overflow-hidden">
          {showPreview ? (
            <iframe
              srcDoc={renderedHtml}
              className="w-full h-full border-0"
              title="Preview"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <div className="text-center">
                <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Click &quot;Show Preview&quot; to see your landing page</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
