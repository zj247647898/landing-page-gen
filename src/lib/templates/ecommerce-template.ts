import { TemplateConfig } from './types';

export const ecommerceTemplate: TemplateConfig = {
  id: 'ecommerce-modern',
  name: 'E-Commerce Launch',
  description: 'Product-focused landing page with hero, product showcase, testimonials, and buy CTA',
  category: 'E-Commerce',
  thumbnail: '/thumbnails/ecommerce.png',
  fields: [
    { id: 'brandName', label: 'Brand Name', type: 'text', defaultValue: 'LuxeBrand', required: true },
    { id: 'productName', label: 'Product Name', type: 'text', defaultValue: 'Premium Wireless Headphones', required: true },
    { id: 'headline', label: 'Main Headline', type: 'text', defaultValue: 'Experience Sound Like Never Before', required: true },
    { id: 'subheadline', label: 'Subheadline', type: 'textarea', defaultValue: 'Industry-leading noise cancellation, 30-hour battery life, and studio-quality audio in a design that feels as good as it sounds.', required: true },
    { id: 'price', label: 'Product Price', type: 'text', defaultValue: '$299', required: true },
    { id: 'originalPrice', label: 'Original Price (for strikethrough)', type: 'text', defaultValue: '$399', required: true },
    { id: 'ctaText', label: 'CTA Button', type: 'text', defaultValue: 'Buy Now - Free Shipping', required: true },
    { id: 'ctaLink', label: 'Buy Link', type: 'text', defaultValue: '#checkout', required: true },
    { id: 'primaryColor', label: 'Primary Color', type: 'color', defaultValue: '#0f172a', required: true },
    { id: 'accentColor', label: 'Accent Color', type: 'color', defaultValue: '#f59e0b', required: true },
    { id: 'feature1', label: 'Feature 1', type: 'text', defaultValue: 'Active Noise Cancellation', required: true },
    { id: 'feature2', label: 'Feature 2', type: 'text', defaultValue: '30-Hour Battery Life', required: true },
    { id: 'feature3', label: 'Feature 3', type: 'text', defaultValue: 'Premium Comfort Fit', required: true },
    { id: 'feature4', label: 'Feature 4', type: 'text', defaultValue: 'Spatial Audio', required: true },
    { id: 'testimonial1', label: 'Testimonial 1', type: 'textarea', defaultValue: 'Best headphones I have ever owned. The noise cancellation is unreal.', required: true },
    { id: 'author1', label: 'Author 1', type: 'text', defaultValue: 'Sarah M.', required: true },
    { id: 'testimonial2', label: 'Testimonial 2', type: 'textarea', defaultValue: 'Worth every penny. Battery lasts forever and sound quality is incredible.', required: true },
    { id: 'author2', label: 'Author 2', type: 'text', defaultValue: 'James K.', required: true },
    { id: 'guarantee', label: 'Guarantee Text', type: 'text', defaultValue: '30-Day Money-Back Guarantee', required: true },
    { id: 'footerText', label: 'Footer', type: 'text', defaultValue: '© 2026 LuxeBrand. All rights reserved.', required: true },
  ],
  render: (data) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.productName} | ${data.brandName}</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #1f2937; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .btn-primary { display: inline-block; padding: 18px 40px; background: ${data.accentColor}; color: ${data.primaryColor}; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px; transition: all 0.3s; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 40px ${data.accentColor}60; }
    
    .navbar { background: ${data.primaryColor}; color: white; padding: 16px 0; }
    .navbar .container { display: flex; justify-content: space-between; align-items: center; }
    .logo { font-size: 24px; font-weight: 800; }
    .nav-links { display: flex; gap: 32px; list-style: none; }
    .nav-links a { color: rgba(255,255,255,0.8); text-decoration: none; font-weight: 500; }
    .nav-links a:hover { color: white; }
    
    .hero { padding: 80px 0; background: linear-gradient(135deg, ${data.primaryColor} 0%, #1e293b 100%); color: white; }
    .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
    .hero h1 { font-size: 52px; font-weight: 800; line-height: 1.1; margin-bottom: 24px; }
    .hero p { font-size: 18px; color: rgba(255,255,255,0.8); margin-bottom: 32px; }
    .price-tag { margin-bottom: 24px; }
    .price-tag .current { font-size: 48px; font-weight: 800; color: ${data.accentColor}; }
    .price-tag .original { font-size: 24px; text-decoration: line-through; color: rgba(255,255,255,0.5); margin-left: 12px; }
    .hero-image { background: rgba(255,255,255,0.1); border-radius: 24px; height: 400px; display: flex; align-items: center; justify-content: center; font-size: 120px; }
    
    .features { padding: 80px 0; background: #f8fafc; }
    .section-title { text-align: center; font-size: 36px; font-weight: 700; margin-bottom: 48px; }
    .features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .feature-box { text-align: center; padding: 32px; background: white; border-radius: 16px; }
    .feature-box .icon { font-size: 40px; margin-bottom: 16px; }
    .feature-box h3 { font-size: 16px; font-weight: 600; }
    
    .testimonials { padding: 80px 0; }
    .testimonials-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; max-width: 800px; margin: 0 auto; }
    .testimonial-card { padding: 32px; background: #f8fafc; border-radius: 16px; border-left: 4px solid ${data.accentColor}; }
    .testimonial-card p { font-size: 18px; font-style: italic; margin-bottom: 16px; }
    .testimonial-card .author { font-weight: 600; color: ${data.primaryColor}; }
    
    .guarantee { padding: 60px 0; background: ${data.accentColor}15; text-align: center; }
    .guarantee h2 { font-size: 28px; font-weight: 700; margin-bottom: 16px; }
    .guarantee p { color: #6b7280; margin-bottom: 24px; }
    
    .footer { padding: 32px 0; text-align: center; color: #9ca3af; background: ${data.primaryColor}; color: rgba(255,255,255,0.6); }
    
    @media (max-width: 768px) {
      .hero-grid { grid-template-columns: 1fr; }
      .hero h1 { font-size: 36px; }
      .features-grid { grid-template-columns: repeat(2, 1fr); }
      .testimonials-grid { grid-template-columns: 1fr; }
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
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#buy">Buy Now</a></li>
      </ul>
    </div>
  </nav>

  <section class="hero">
    <div class="container">
      <div class="hero-grid">
        <div>
          <h1>${data.headline}</h1>
          <p>${data.subheadline}</p>
          <div class="price-tag">
            <span class="current">${data.price}</span>
            <span class="original">${data.originalPrice}</span>
          </div>
          <a href="${data.ctaLink}" class="btn-primary">${data.ctaText}</a>
        </div>
        <div class="hero-image">🎧</div>
      </div>
    </div>
  </section>

  <section class="features" id="features">
    <div class="container">
      <h2 class="section-title">Why choose ${data.productName}?</h2>
      <div class="features-grid">
        <div class="feature-box">
          <div class="icon">🔇</div>
          <h3>${data.feature1}</h3>
        </div>
        <div class="feature-box">
          <div class="icon">🔋</div>
          <h3>${data.feature2}</h3>
        </div>
        <div class="feature-box">
          <div class="icon">☁️</div>
          <h3>${data.feature3}</h3>
        </div>
        <div class="feature-box">
          <div class="icon">🎵</div>
          <h3>${data.feature4}</h3>
        </div>
      </div>
    </div>
  </section>

  <section class="testimonials" id="reviews">
    <div class="container">
      <h2 class="section-title">What our customers say</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <p>"${data.testimonial1}"</p>
          <div class="author">— ${data.author1}</div>
        </div>
        <div class="testimonial-card">
          <p>"${data.testimonial2}"</p>
          <div class="author">— ${data.author2}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="guarantee" id="buy">
    <div class="container">
      <h2>${data.guarantee}</h2>
      <p>Not satisfied? Get a full refund within 30 days. No questions asked.</p>
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
