import { saasTemplate } from './saas-template';
import { ecommerceTemplate } from './ecommerce-template';
import { appTemplate } from './app-template';
import { courseTemplate } from './course-template';
import { consultingTemplate } from './consulting-template';
import { aiToolTemplate } from './ai-tool-template';
import { waitlistTemplate } from './waitlist-template';
import { portfolioTemplate } from './portfolio-template';
import { eventTemplate } from './event-template';
import { podcastTemplate } from './podcast-template';
import { restaurantTemplate } from './restaurant-template';
import { startupTemplate } from './startup-template';
import { fitnessTemplate } from './fitness-template';
import { nonprofitTemplate } from './nonprofit-template';
import { realEstateTemplate } from './real-estate-template';
import { TemplateConfig } from './types';

export const templates: TemplateConfig[] = [
  saasTemplate,
  ecommerceTemplate,
  appTemplate,
  courseTemplate,
  consultingTemplate,
  aiToolTemplate,
  waitlistTemplate,
  portfolioTemplate,
  eventTemplate,
  podcastTemplate,
  startupTemplate,
  fitnessTemplate,
  restaurantTemplate,
  nonprofitTemplate,
  realEstateTemplate,
];

export function getTemplateById(id: string): TemplateConfig | undefined {
  return templates.find((t) => t.id === id);
}

export function getAllTemplates(): TemplateConfig[] {
  return templates;
}
