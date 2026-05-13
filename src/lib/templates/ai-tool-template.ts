import { TemplateConfig } from './types';

export const aiToolTemplate: TemplateConfig = {
  id: 'ai-tool',
  name: 'AI Tool Launch',
  description: 'Modern AI product landing page with dark theme, feature grid, and waitlist/pricing CTA',
  category: 'AI',
  thumbnail: '/thumbnails/ai-tool.png',
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', defaultValue: 'NeuralWrite', required: true },
    { id: 'tagline', label: 'Tagline', type: 'text', defaultValue: 'AI Writing That Sounds Human', required: true },
    { id: 'description', label: 'Description', type: 'textarea', defaultValue: 'Generate blog posts, emails, and social content in seconds. Trained on millions of high-performing pieces.', required: true },
    { id: 'primaryColor', label: 'Primary Color', type: 'color', defaultValue: '#06b6d4', required: true },
    { id: 'accentColor', label: 'Accent Color', type: 'color', defaultValue: '#8b5cf6', required: true },
    { id: 'ctaText', label: 'CTA Text', type: 'text', defaultValue: 'Start Free Trial', required: true },
    { id: 'ctaLink', label: 'CTA Link', type: 'text', defaultValue: '#signup', required: true },
    { id: 'feature1', label: 'Feature 1', type: 'text', defaultValue: 'Human-Like Output', required: true },
    { id: 'feature1Desc', label: 'Feature 1 Desc', type: 'textarea', defaultValue: 'Passes AI detection with 99% accuracy. Reads like a native writer.', required: true },
    { id: 'feature2', label: 'Feature 2', type: 'text', defaultValue: '50+ Templates', required: true },
    { id: 'feature2Desc', label: 'Feature 2 Desc', type: 'textarea', defaultValue: 'Blog posts, emails, ads, product descriptions — all optimized for conversion.', required: true },
    { id: 'feature3', label: 'Feature 3', type: 'text', defaultValue: 'SEO Optimized', required: true },
    { id: 'feature3Desc', label: 'Feature 3 Desc', type: 'textarea', defaultValue: 'Built-in keyword research and optimization suggestions.', required: true },
    { id: 'feature4', label: 'Feature 4', type: 'text', defaultValue: 'Team Collaboration', required: true },
    { id: 'feature4Desc', label: 'Feature 4 Desc', type: 'textarea', defaultValue: 'Share projects, leave comments, and maintain brand voice across your team.', required: true },
    { id: 'stat1', label: 'Stat 1', type: 'text', defaultValue: '10M+', required: true },
    { id: 'stat1Label', label: 'Stat 1 Label', type: 'text', defaultValue: 'Articles Generated', required: true },
    { id: 'stat2', label: 'Stat 2', type: 'text', defaultValue: '99%', required: true },
    { id: 'stat2Label', label: 'Stat 2 Label', type: 'text', defaultValue: 'Human Pass Rate', required: true },
    { id: 'stat3', label: 'Stat 3', type: 'text', defaultValue: '50K+', required: true },
    { id: 'stat3Label', label: 'Stat 3 Label', type: 'text', defaultValue: 'Active Users', required: true },
    { id: 'priceMonthly', label: 'Monthly Price', type: 'text', defaultValue: '$19', required: true },
    { id: 'priceYearly', label: 'Yearly Price', type: 'text', defaultValue: '$190', required: true },
    { id: 'footer', label: 'Footer', type: 'text', defaultValue: '© 2026 NeuralWrite. All rights reserved.', required: true },
  ],
  render: (data) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.productName} - ${data.tagline}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',sans-serif;line-height:1.6;color:#e2e8f0;background:#0f172a}
.container{max-width:1200px;margin:0 auto;padding:0 24px}
.btn-primary{display:inline-block;padding:16px 32px;background:linear-gradient(135deg,${data.primaryColor},${data.accentColor});color:#fff;text-decoration:none;border-radius:8px;font-weight:700;transition:all .3s}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 40px ${data.primaryColor}40}

.navbar{padding:20px 0;border-bottom:1px solid rgba(255,255,255,.1)}
.navbar .container{display:flex;justify-content:space-between;align-items:center}
.logo{font-size:24px;font-weight:800;background:linear-gradient(135deg,${data.primaryColor},${data.accentColor});-webkit-background-clip:text;-webkit-text-fill-color:transparent}

.hero{padding:120px 0 80px;text-align:center;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle,${data.primaryColor}10 0%,transparent 70%)}
.hero h1{font-size:64px;font-weight:800;line-height:1.1;margin-bottom:24px;background:linear-gradient(135deg,#fff,#94a3b8);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero p{font-size:20px;color:#94a3b8;max-width:600px;margin:0 auto 40px}

.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;max-width:700px;margin:60px auto 0;text-align:center}
.stat .number{font-size:48px;font-weight:800;background:linear-gradient(135deg,${data.primaryColor},${data.accentColor});-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.stat .label{color:#64748b;margin-top:8px}

.features{padding:100px 0;background:linear-gradient(180deg,#0f172a,#1e293b)}
.section-title{text-align:center;font-size:40px;font-weight:700;margin-bottom:64px}
.features-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:32px;max-width:900px;margin:0 auto}
.feature-card{padding:40px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:16px;transition:all .3s}
.feature-card:hover{border-color:${data.primaryColor}40;transform:translateY(-4px)}
.feature-card h3{font-size:20px;font-weight:700;margin-bottom:12px;color:#fff}
.feature-card p{color:#94a3b8}

.pricing{padding:100px 0;text-align:center}
.pricing-card{display:inline-block;padding:48px 64px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:24px}
.pricing-card .price{font-size:56px;font-weight:800;background:linear-gradient(135deg,${data.primaryColor},${data.accentColor});-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.pricing-card .period{color:#64748b;margin-bottom:24px}

.footer{padding:40px 0;text-align:center;color:#475569;border-top:1px solid rgba(255,255,255,.1)}

@media(max-width:768px){
.hero h1{font-size:36px}
.features-grid{grid-template-columns:1fr}
.stats{grid-template-columns:1fr}
}
</style>
</head>
<body>
<nav class="navbar"><div class="container"><div class="logo">${data.productName}</div><a href="${data.ctaLink}" class="btn-primary" style="padding:10px 24px;font-size:14px">${data.ctaText}</a></div></nav>

<section class="hero">
<div class="container">
<h1>${data.tagline}</h1>
<p>${data.description}</p>
<a href="${data.ctaLink}" class="btn-primary">${data.ctaText}</a>
<div class="stats">
<div class="stat"><div class="number">${data.stat1}</div><div class="label">${data.stat1Label}</div></div>
<div class="stat"><div class="number">${data.stat2}</div><div class="label">${data.stat2Label}</div></div>
<div class="stat"><div class="number">${data.stat3}</div><div class="label">${data.stat3Label}</div></div>
</div>
</div>
</section>

<section class="features">
<div class="container">
<h2 class="section-title">Why ${data.productName}?</h2>
<div class="features-grid">
<div class="feature-card"><h3>${data.feature1}</h3><p>${data.feature1Desc}</p></div>
<div class="feature-card"><h3>${data.feature2}</h3><p>${data.feature2Desc}</p></div>
<div class="feature-card"><h3>${data.feature3}</h3><p>${data.feature3Desc}</p></div>
<div class="feature-card"><h3>${data.feature4}</h3><p>${data.feature4Desc}</p></div>
</div>
</div>
</section>

<section class="pricing">
<div class="container">
<div class="pricing-card">
<div class="price">${data.priceMonthly}</div>
<div class="period">per month (${data.priceYearly}/year)</div>
<a href="${data.ctaLink}" class="btn-primary">${data.ctaText}</a>
</div>
</div>
</section>

<footer class="footer"><div class="container"><p>${data.footer}</p></div></footer>
</body>
</html>`,
};
