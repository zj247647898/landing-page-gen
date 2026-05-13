import { TemplateConfig } from './types';

export function renderTemplateToString(template: TemplateConfig, data?: Record<string, string>): string {
  const rendered = template.render(data || getDefaultData(template));
  return injectSeoMeta(rendered, data || getDefaultData(template));
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

/**
 * Inject SEO meta tags into rendered HTML if not already present.
 * Extracts title and description from existing HTML or data fields.
 */
function injectSeoMeta(html: string, data: Record<string, string>): string {
  // Skip if OG tags already present
  if (html.includes('og:title')) return html;

  // Extract title from <title> tag
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : (data.brandName || data.appName || data.productName || data.courseName || data.eventName || data.name || 'Landing Page');

  // Find a description-like field
  const description = data.subheadline || data.tagline || data.description || data.bio || data.appDescription || data.courseDescription || data.eventDescription || '';

  const seoTags = `
  <meta name="description" content="${description.replace(/"/g, '&quot;').substring(0, 160)}">
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title.replace(/"/g, '&quot;')}">
  <meta property="og:description" content="${description.replace(/"/g, '&quot;').substring(0, 160)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}">
  <meta name="twitter:description" content="${description.replace(/"/g, '&quot;').substring(0, 160)}">`;

  // Insert after <meta name="viewport"...>
  return html.replace(
    /(<meta\s+name="viewport"[^>]*>)/i,
    `$1${seoTags}`
  );
}
