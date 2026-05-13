export interface TemplateConfig {
  id: string;
  name: string;
  description: string;
  category: string;
  thumbnail: string;
  fields: TemplateField[];
  render: (data: Record<string, string>) => string;
}

export interface TemplateField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'color' | 'select' | 'image';
  defaultValue: string;
  options?: string[];
  required?: boolean;
}
