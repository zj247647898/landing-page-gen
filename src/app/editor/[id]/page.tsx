import { notFound } from 'next/navigation';
import { getTemplateById, getAllTemplates } from '@/lib/templates';
import { renderTemplateToString } from '@/lib/templates/engine';
import TemplateEditor from '@/components/editor/TemplateEditor';

interface EditorPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const templates = getAllTemplates();
  return templates.map((t) => ({ id: t.id }));
}

export default async function EditorPage({ params }: EditorPageProps) {
  const { id } = await params;
  const template = getTemplateById(id);

  if (!template) {
    notFound();
  }

  const initialHtml = renderTemplateToString(template);

  return (
    <TemplateEditor
      templateId={template.id}
      templateName={template.name}
      templateDescription={template.description}
      templateCategory={template.category}
      fields={template.fields}
      initialHtml={initialHtml}
    />
  );
}
