import { TemplateConfig } from './types';

export const portfolioTemplate: TemplateConfig = {
  id: 'portfolio',
  name: 'Personal Portfolio',
  description: 'Clean personal portfolio for developers, designers, and creatives',
  category: 'Personal',
  thumbnail: '/thumbnails/portfolio.png',
  fields: [
    { id: 'name', label: 'Your Name', type: 'text', defaultValue: 'Jordan Lee', required: true },
    { id: 'title', label: 'Your Title', type: 'text', defaultValue: 'Full-Stack Developer & Designer', required: true },
    { id: 'bio', label: 'Bio', type: 'textarea', defaultValue: 'I build products that people love. 8 years of experience crafting digital experiences for startups and Fortune 500s.', required: true },
    { id: 'primaryColor', label: 'Primary Color', type: 'color', defaultValue: '#ec4899', required: true },
    { id: 'project1', label: 'Project 1 Name', type: 'text', defaultValue: 'E-Commerce Platform', required: true },
    { id: 'project1Desc', label: 'Project 1 Desc', type: 'textarea', defaultValue: 'Built a scalable e-commerce platform handling $2M+ annual GMV.', required: true },
    { id: 'project1Tech', label: 'Project 1 Tech', type: 'text', defaultValue: 'Next.js, Stripe, PostgreSQL', required: true },
    { id: 'project2', label: 'Project 2 Name', type: 'text', defaultValue: 'AI Dashboard', required: true },
    { id: 'project2Desc', label: 'Project 2 Desc', type: 'textarea', defaultValue: 'Real-time analytics dashboard for an AI startup.', required: true },
    { id: 'project2Tech', label: 'Project 2 Tech', type: 'text', defaultValue: 'React, D3.js, Python', required: true },
    { id: 'project3', label: 'Project 3 Name', type: 'text', defaultValue: 'Mobile Banking App', required: true },
    { id: 'project3Desc', label: 'Project 3 Desc', type: 'textarea', defaultValue: 'Led frontend development for a fintech mobile app with 500K users.', required: true },
    { id: 'project3Tech', label: 'Project 3 Tech', type: 'text', defaultValue: 'React Native, Node.js', required: true },
    { id: 'github', label: 'GitHub URL', type: 'text', defaultValue: 'https://github.com', required: true },
    { id: 'linkedin', label: 'LinkedIn URL', type: 'text', defaultValue: 'https://linkedin.com', required: true },
    { id: 'email', label: 'Email', type: 'text', defaultValue: 'hello@jordanlee.dev', required: true },
    { id: 'footer', label: 'Footer', type: 'text', defaultValue: '© 2026 Jordan Lee. Built with passion.', required: true },
  ],
  render: (data) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.name} - ${data.title}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',sans-serif;line-height:1.6;color:#1f2937}
.container{max-width:1000px;margin:0 auto;padding:0 24px}
.btn-primary{display:inline-block;padding:12px 28px;background:${data.primaryColor};color:#fff;text-decoration:none;border-radius:8px;font-weight:600;transition:all .3s}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 40px ${data.primaryColor}40}
.btn-outline{display:inline-block;padding:12px 28px;background:transparent;color:${data.primaryColor};text-decoration:none;border-radius:8px;font-weight:600;border:2px solid ${data.primaryColor};transition:all .3s}
.btn-outline:hover{background:${data.primaryColor};color:#fff}

.hero{padding:120px 0 80px;text-align:center}
.hero h1{font-size:56px;font-weight:800;line-height:1.1;margin-bottom:16px}
.hero .title{font-size:20px;color:${data.primaryColor};font-weight:600;margin-bottom:24px}
.hero p{font-size:18px;color:#6b7280;max-width:500px;margin:0 auto 32px}
.hero-links{display:flex;gap:16px;justify-content:center}

.projects{padding:80px 0;background:#f8fafc}
.section-title{text-align:center;font-size:32px;font-weight:700;margin-bottom:48px}
.project-card{padding:32px;background:#fff;border-radius:16px;margin-bottom:24px;border-left:4px solid ${data.primaryColor}}
.project-card h3{font-size:22px;font-weight:700;margin-bottom:8px}
.project-card p{color:#6b7280;margin-bottom:12px}
.project-card .tech{display:flex;gap:8px;flex-wrap:wrap}
.project-card .tech span{padding:4px 12px;background:${data.primaryColor}10;color:${data.primaryColor};border-radius:100px;font-size:12px;font-weight:500}

.contact{padding:80px 0;text-align:center}
.contact h2{font-size:32px;font-weight:700;margin-bottom:16px}
.contact p{color:#6b7280;margin-bottom:32px}

.footer{padding:40px 0;text-align:center;color:#9ca3af;font-size:14px}

@media(max-width:768px){
.hero h1{font-size:36px}
.hero-links{flex-direction:column;align-items:center}
}
</style>
</head>
<body>
<section class="hero">
<div class="container">
<h1>${data.name}</h1>
<div class="title">${data.title}</div>
<p>${data.bio}</p>
<div class="hero-links">
<a href="${data.github}" class="btn-outline">GitHub</a>
<a href="${data.linkedin}" class="btn-outline">LinkedIn</a>
<a href="mailto:${data.email}" class="btn-primary">Get in Touch</a>
</div>
</div>
</section>

<section class="projects">
<div class="container">
<h2 class="section-title">Selected Work</h2>
<div class="project-card">
<h3>${data.project1}</h3>
<p>${data.project1Desc}</p>
<div class="tech">
${data.project1Tech.split(',').map(t => `<span>${t.trim()}</span>`).join('')}
</div>
</div>
<div class="project-card">
<h3>${data.project2}</h3>
<p>${data.project2Desc}</p>
<div class="tech">
${data.project2Tech.split(',').map(t => `<span>${t.trim()}</span>`).join('')}
</div>
</div>
<div class="project-card">
<h3>${data.project3}</h3>
<p>${data.project3Desc}</p>
<div class="tech">
${data.project3Tech.split(',').map(t => `<span>${t.trim()}</span>`).join('')}
</div>
</div>
</div>
</section>

<section class="contact">
<div class="container">
<h2>Let&apos;s work together</h2>
<p>Open to freelance projects and full-time opportunities.</p>
<a href="mailto:${data.email}" class="btn-primary">Say Hello</a>
</div>
</section>

<footer class="footer">
<div class="container"><p>${data.footer}</p></div>
</footer>
</body>
</html>`,
};
