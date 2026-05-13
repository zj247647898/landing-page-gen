import { TemplateConfig } from './types';

export const saasTemplate: TemplateConfig = {
  id: 'saas-modern',
  name: 'SaaS Modern',
  description: 'Modern SaaS landing page with hero, features, pricing, and CTA sections',
  category: 'SaaS',
  thumbnail: '/thumbnails/saas.png',
  fields: [
    { id: 'brandName', label: 'Brand Name', type: 'text', defaultValue: 'YourSaaS', required: true },
    { id: 'tagline', label: 'Main Tagline', type: 'text', defaultValue: 'Build faster with our platform', required: true },
    { id: 'subheadline', label: 'Subheadline', type: 'textarea', defaultValue: 'The all-in-one solution for teams who want to ship products 10x faster without compromising quality.', required: true },
    { id: 'ctaText', label: 'CTA Button Text', type: 'text', defaultValue: 'Start Free Trial', required: true },
    { id: 'ctaLink', label: 'CTA Link', type: 'text', defaultValue: '#signup', required: true },
    { id: 'primaryColor', label: 'Primary Color', type: 'color', defaultValue: '#6366f1', required: true },
    { id: 'secondaryColor', label: 'Secondary Color', type: 'color', defaultValue: '#8b5cf6', required: true },
    { id: 'feature1Title', label: 'Feature 1 Title', type: 'text', defaultValue: 'Lightning Fast', required: true },
    { id: 'feature1Desc', label: 'Feature 1 Description', type: 'textarea', defaultValue: 'Deploy in seconds, not hours. Our infrastructure scales automatically.', required: true },
    { id: 'feature2Title', label: 'Feature 2 Title', type: 'text', defaultValue: 'Enterprise Security', required: true },
    { id: 'feature2Desc', label: 'Feature 2 Description', type: 'textarea', defaultValue: 'Bank-grade encryption and compliance built into every layer.', required: true },
    { id: 'feature3Title', label: 'Feature 3 Title', type: 'text', defaultValue: '24/7 Support', required: true },
    { id: 'feature3Desc', label: 'Feature 3 Description', type: 'textarea', defaultValue: 'Our expert team is always available to help you succeed.', required: true },
    { id: 'pricingStarter', label: 'Starter Price', type: 'text', defaultValue: '$0', required: true },
    { id: 'pricingPro', label: 'Pro Price', type: 'text', defaultValue: '$29', required: true },
    { id: 'pricingEnterprise', label: 'Enterprise Price', type: 'text', defaultValue: '$99', required: true },
    { id: 'footerText', label: 'Footer Text', type: 'text', defaultValue: '© 2026 YourSaaS. All rights reserved.', required: true },
  ],
  render: (data) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.brandName} - ${data.tagline}</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #1f2937; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .gradient-text { background: linear-gradient(135deg, ${data.primaryColor}, ${data.secondaryColor}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .btn-primary { display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, ${data.primaryColor}, ${data.secondaryColor}); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; transition: transform 0.2s, box-shadow 0.2s; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 40px ${data.primaryColor}40; }
    .btn-secondary { display: inline-block; padding: 16px 32px; background: white; color: ${data.primaryColor}; text-decoration: none; border-radius: 8px; font-weight: 600; border: 2px solid ${data.primaryColor}; transition: all 0.2s; }
    .btn-secondary:hover { background: ${data.primaryColor}; color: white; }
    
    /* Navbar */
    .navbar { position: fixed; top: 0; left: 0; right: 0; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); z-index: 1000; border-bottom: 1px solid rgba(0,0,0,0.05); }
    .navbar .container { display: flex; align-items: center; justify-content: space-between; height: 72px; }
    .logo { font-size: 24px; font-weight: 800; color: ${data.primaryColor}; }
    .nav-links { display: flex; gap: 32px; list-style: none; }
    .nav-links a { text-decoration: none; color: #4b5563; font-weight: 500; transition: color 0.2s; }
    .nav-links a:hover { color: ${data.primaryColor}; }
    
    /* Hero */
    .hero { padding: 160px 0 100px; text-align: center; background: linear-gradient(180deg, #f8fafc 0%, #fff 100%); position: relative; overflow: hidden; }
    .hero::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, ${data.primaryColor}08 0%, transparent 70%); }
    .hero h1 { font-size: 64px; font-weight: 800; line-height: 1.1; margin-bottom: 24px; max-width: 900px; margin-left: auto; margin-right: auto; }
    .hero p { font-size: 20px; color: #6b7280; max-width: 600px; margin: 0 auto 40px; }
    .hero-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
    .hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: ${data.primaryColor}10; color: ${data.primaryColor}; border-radius: 100px; font-size: 14px; font-weight: 500; margin-bottom: 32px; }
    
    /* Features */
    .features { padding: 100px 0; }
    .section-header { text-align: center; margin-bottom: 64px; }
    .section-header h2 { font-size: 40px; font-weight: 700; margin-bottom: 16px; }
    .section-header p { font-size: 18px; color: #6b7280; max-width: 500px; margin: 0 auto; }
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px; }
    .feature-card { padding: 40px; border-radius: 16px; background: white; border: 1px solid #e5e7eb; transition: all 0.3s; }
    .feature-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); border-color: ${data.primaryColor}30; }
    .feature-icon { width: 56px; height: 56px; border-radius: 12px; background: linear-gradient(135deg, ${data.primaryColor}, ${data.secondaryColor}); display: flex; align-items: center; justify-content: center; margin-bottom: 24px; }
    .feature-icon svg { width: 28px; height: 28px; color: white; }
    .feature-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 12px; }
    .feature-card p { color: #6b7280; line-height: 1.7; }
    
    /* Pricing */
    .pricing { padding: 100px 0; background: #f8fafc; }
    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; max-width: 1000px; margin: 0 auto; }
    .pricing-card { padding: 48px 40px; border-radius: 20px; background: white; border: 1px solid #e5e7eb; text-align: center; }
    .pricing-card.popular { border: 2px solid ${data.primaryColor}; position: relative; }
    .popular-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, ${data.primaryColor}, ${data.secondaryColor}); color: white; padding: 6px 20px; border-radius: 100px; font-size: 12px; font-weight: 600; }
    .pricing-card h3 { font-size: 20px; font-weight: 600; margin-bottom: 8px; }
    .pricing-card .price { font-size: 48px; font-weight: 800; margin: 16px 0; }
    .pricing-card .price span { font-size: 16px; font-weight: 400; color: #9ca3af; }
    .pricing-features { list-style: none; margin: 32px 0; text-align: left; }
    .pricing-features li { padding: 8px 0; color: #4b5563; display: flex; align-items: center; gap: 12px; }
    .pricing-features li::before { content: '✓'; color: ${data.primaryColor}; font-weight: 700; }
    
    /* CTA */
    .cta { padding: 100px 0; text-align: center; background: linear-gradient(135deg, ${data.primaryColor}, ${data.secondaryColor}); color: white; }
    .cta h2 { font-size: 40px; font-weight: 700; margin-bottom: 16px; }
    .cta p { font-size: 18px; opacity: 0.9; max-width: 500px; margin: 0 auto 32px; }
    .cta .btn-primary { background: white; color: ${data.primaryColor}; }
    .cta .btn-primary:hover { box-shadow: 0 10px 40px rgba(255,255,255,0.3); }
    
    /* Footer */
    .footer { padding: 40px 0; text-align: center; color: #9ca3af; font-size: 14px; border-top: 1px solid #e5e7eb; }
    
    @media (max-width: 768px) {
      .hero h1 { font-size: 36px; }
      .hero { padding: 120px 0 60px; }
      .section-header h2, .cta h2 { font-size: 28px; }
      .nav-links { display: none; }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="container">
      <div class="logo">${data.brandName}</div>
      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="${data.ctaLink}" class="btn-primary" style="padding: 10px 24px; font-size: 14px;">${data.ctaText}</a>
    </div>
  </nav>

  <section class="hero">
    <div class="container">
      <div class="hero-badge">🚀 Now with AI-powered insights</div>
      <h1>${data.tagline}</h1>
      <p>${data.subheadline}</p>
      <div class="hero-buttons">
        <a href="${data.ctaLink}" class="btn-primary">${data.ctaText}</a>
        <a href="#features" class="btn-secondary">Learn More</a>
      </div>
    </div>
  </section>

  <section class="features" id="features">
    <div class="container">
      <div class="section-header">
        <h2>Everything you need to <span class="gradient-text">scale</span></h2>
        <p>Powerful features designed for modern teams</p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <h3>${data.feature1Title}</h3>
          <p>${data.feature1Desc}</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <h3>${data.feature2Title}</h3>
          <p>${data.feature2Desc}</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </div>
          <h3>${data.feature3Title}</h3>
          <p>${data.feature3Desc}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="pricing" id="pricing">
    <div class="container">
      <div class="section-header">
        <h2>Simple, transparent <span class="gradient-text">pricing</span></h2>
        <p>Choose the plan that fits your needs</p>
      </div>
      <div class="pricing-grid">
        <div class="pricing-card">
          <h3>Starter</h3>
          <div class="price">${data.pricingStarter}<span>/mo</span></div>
          <ul class="pricing-features">
            <li>Up to 5 projects</li>
            <li>Basic analytics</li>
            <li>Community support</li>
          </ul>
          <a href="${data.ctaLink}" class="btn-secondary" style="width: 100%;">Get Started</a>
        </div>
        <div class="pricing-card popular">
          <div class="popular-badge">MOST POPULAR</div>
          <h3>Pro</h3>
          <div class="price">${data.pricingPro}<span>/mo</span></div>
          <ul class="pricing-features">
            <li>Unlimited projects</li>
            <li>Advanced analytics</li>
            <li>Priority support</li>
            <li>Custom integrations</li>
          </ul>
          <a href="${data.ctaLink}" class="btn-primary" style="width: 100%;">Get Started</a>
        </div>
        <div class="pricing-card">
          <h3>Enterprise</h3>
          <div class="price">${data.pricingEnterprise}<span>/mo</span></div>
          <ul class="pricing-features">
            <li>Everything in Pro</li>
            <li>Dedicated support</li>
            <li>SLA guarantee</li>
            <li>Custom contracts</li>
          </ul>
          <a href="${data.ctaLink}" class="btn-secondary" style="width: 100%;">Contact Sales</a>
        </div>
      </div>
    </div>
  </section>

  <section class="cta">
    <div class="container">
      <h2>Ready to get started?</h2>
      <p>Join thousands of teams already using ${data.brandName} to build better products.</p>
      <a href="${data.ctaLink}" class="btn-primary">${data.ctaText}</a>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <p>${data.footerText}</p>
    </div>
  </footer>
</body>
</html>`,
};
