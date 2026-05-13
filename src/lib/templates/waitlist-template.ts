import { TemplateConfig } from './types';

export const waitlistTemplate: TemplateConfig = {
  id: 'waitlist',
  name: 'SaaS Waitlist',
  description: 'Pre-launch waitlist page with email capture, social proof, and countdown urgency',
  category: 'SaaS',
  thumbnail: '/thumbnails/waitlist.png',
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', defaultValue: 'FlowSync', required: true },
    { id: 'tagline', label: 'Tagline', type: 'text', defaultValue: 'The Future of Team Collaboration', required: true },
    { id: 'description', label: 'Description', type: 'textarea', defaultValue: 'Real-time collaboration, AI-powered summaries, and seamless integrations. Join the waitlist for early access.', required: true },
    { id: 'primaryColor', label: 'Primary Color', type: 'color', defaultValue: '#f97316', required: true },
    { id: 'waiters', label: 'Waitlist Count', type: 'text', defaultValue: '2,847', required: true },
    { id: 'launchDate', label: 'Launch Date', type: 'text', defaultValue: 'June 15, 2026', required: true },
    { id: 'benefit1', label: 'Benefit 1', type: 'text', defaultValue: 'Early Access', required: true },
    { id: 'benefit1Desc', label: 'Benefit 1 Desc', type: 'textarea', defaultValue: 'Be the first to try FlowSync before public launch.', required: true },
    { id: 'benefit2', label: 'Benefit 2', type: 'text', defaultValue: '50% Lifetime Discount', required: true },
    { id: 'benefit2Desc', label: 'Benefit 2 Desc', type: 'textarea', defaultValue: 'Waitlist members get 50% off forever.', required: true },
    { id: 'benefit3', label: 'Benefit 3', type: 'text', defaultValue: 'Direct Input', required: true },
    { id: 'benefit3Desc', label: 'Benefit 3 Desc', type: 'textarea', defaultValue: 'Shape the product with your feedback.', required: true },
    { id: 'testimonial', label: 'Testimonial', type: 'textarea', defaultValue: 'I have been waiting for a tool like this. The early demo blew me away.', required: true },
    { id: 'author', label: 'Author', type: 'text', defaultValue: 'Alex Chen, Product Lead', required: true },
    { id: 'footer', label: 'Footer', type: 'text', defaultValue: '© 2026 FlowSync. All rights reserved.', required: true },
  ],
  render: (data) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.productName} - Join the Waitlist</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',sans-serif;line-height:1.6;color:#1f2937;background:#fff}
.container{max-width:800px;margin:0 auto;padding:0 24px}
.btn-primary{display:inline-block;padding:16px 40px;background:${data.primaryColor};color:#fff;text-decoration:none;border-radius:8px;font-weight:700;transition:all .3s;border:none;cursor:pointer;font-size:16px}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 40px ${data.primaryColor}40}

.hero{padding:120px 0 60px;text-align:center}
.hero-badge{display:inline-block;padding:8px 20px;background:${data.primaryColor}15;color:${data.primaryColor};border-radius:100px;font-size:14px;font-weight:600;margin-bottom:24px}
.hero h1{font-size:52px;font-weight:800;line-height:1.1;margin-bottom:20px}
.hero p{font-size:20px;color:#6b7280;max-width:500px;margin:0 auto 32px}
.waitlist-count{font-size:18px;color:#6b7280;margin-bottom:32px}
.waitlist-count strong{color:${data.primaryColor};font-weight:700}

.email-form{display:flex;gap:12px;justify-content:center;max-width:500px;margin:0 auto}
.email-form input{flex:1;padding:16px 20px;border:2px solid #e5e7eb;border-radius:8px;font-size:16px;outline:none;transition:border-color .2s}
.email-form input:focus{border-color:${data.primaryColor}}

.benefits{padding:80px 0;background:#f8fafc}
.section-title{text-align:center;font-size:32px;font-weight:700;margin-bottom:48px}
.benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.benefit{text-align:center;padding:32px}
.benefit-icon{font-size:40px;margin-bottom:16px}
.benefit h3{font-size:18px;font-weight:700;margin-bottom:8px}
.benefit p{font-size:14px;color:#6b7280}

.testimonial{padding:80px 0;text-align:center}
.testimonial-card{max-width:600px;margin:0 auto;padding:40px;background:#f8fafc;border-radius:16px}
.testimonial-card p{font-size:20px;font-style:italic;margin-bottom:20px}
.testimonial-card .author{font-weight:600}

.footer{padding:40px 0;text-align:center;color:#9ca3af;font-size:14px}

@media(max-width:768px){
.hero h1{font-size:32px}
.email-form{flex-direction:column}
.benefits-grid{grid-template-columns:1fr}
}
</style>
</head>
<body>
<section class="hero">
<div class="container">
<div class="hero-badge">🚀 Launching ${data.launchDate}</div>
<h1>${data.tagline}</h1>
<p>${data.description}</p>
<div class="waitlist-count"><strong>${data.waiters}</strong> people already joined</div>
<form class="email-form" onsubmit="event.preventDefault();alert('Thanks for joining!');">
<input type="email" placeholder="Enter your email" required>
<button type="submit" class="btn-primary">Join Waitlist</button>
</form>
</div>
</section>

<section class="benefits">
<div class="container">
<h2 class="section-title">Why join the waitlist?</h2>
<div class="benefits-grid">
<div class="benefit">
<div class="benefit-icon">⚡</div>
<h3>${data.benefit1}</h3>
<p>${data.benefit1Desc}</p>
</div>
<div class="benefit">
<div class="benefit-icon">💰</div>
<h3>${data.benefit2}</h3>
<p>${data.benefit2Desc}</p>
</div>
<div class="benefit">
<div class="benefit-icon">🎯</div>
<h3>${data.benefit3}</h3>
<p>${data.benefit3Desc}</p>
</div>
</div>
</div>
</section>

<section class="testimonial">
<div class="container">
<div class="testimonial-card">
<p>"${data.testimonial}"</p>
<div class="author">— ${data.author}</div>
</div>
</div>
</section>

<footer class="footer">
<div class="container"><p>${data.footer}</p></div>
</footer>
</body>
</html>`,
};
