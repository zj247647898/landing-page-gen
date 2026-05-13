import { saasTemplate } from './saas-template';
import { ecommerceTemplate } from './ecommerce-template';
import { appTemplate } from './app-template';
import { courseTemplate } from './course-template';
import { consultingTemplate } from './consulting-template';
import { TemplateConfig } from './types';

export const templates: TemplateConfig[] = [
  saasTemplate,
  ecommerceTemplate,
  appTemplate,
  courseTemplate,
  consultingTemplate,
];

export function getTemplateById(id: string): TemplateConfig | undefined {
  return templates.find((t) => t.id === id);
}

export function getAllTemplates(): TemplateConfig[] {
  return templates;
}
