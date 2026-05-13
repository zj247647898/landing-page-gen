import { TemplateConfig } from './types';

export function renderTemplateToString(template: TemplateConfig, data?: Record<string, string>): string {
  return template.render(data || getDefaultData(template));
}

export function getDefaultData(template: TemplateConfig): Record<string, string> {
  const data: Record<string, string> = {};
  template.fields.forEach((field) => {
    data[field.id] = field.defaultValue;
  });
  return data;
}

export function createPlaceholderHtml(template: TemplateConfig): string {
  let html = template.render(getDefaultData(template));
  template.fields.forEach((field) => {
    const regex = new RegExp(field.defaultValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    html = html.replace(regex, `{{${field.id}}}`);
  });
  return html;
}
