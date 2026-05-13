import { TemplateConfig } from './types';

export const courseTemplate: TemplateConfig = {
  id: 'course-launch',
  name: 'Online Course',
  description: 'Course sales page with curriculum, instructor bio, social proof, and enrollment CTA',
  category: 'Education',
  thumbnail: '/thumbnails/course.png',
  fields: [
    { id: 'courseName', label: 'Course Name', type: 'text', defaultValue: 'Full-Stack Web Development Bootcamp', required: true },
    { id: 'headline', label: 'Headline', type: 'text', defaultValue: 'Become a Full-Stack Developer in 12 Weeks', required: true },
    { id: 'subheadline', label: 'Subheadline', type: 'textarea', defaultValue: 'Learn React, Node.js, and modern web development from industry experts. No prior experience required.', required: true },
    { id: 'price', label: 'Course Price', type: 'text', defaultValue: '$497', required: true },
    { id: 'originalPrice', label: 'Original Price', type: 'text', defaultValue: '$1,497', required: true },
    { id: 'instructorName', label: 'Instructor Name', type: 'text', defaultValue: 'Alex Chen', required: true },
    { id: 'instructorTitle', label: 'Instructor Title', type: 'text', defaultValue: 'Senior Engineer at Google', required: true },
    { id: 'instructorBio', label: 'Instructor Bio', type: 'textarea', defaultValue: '10+ years building products used by millions. Former tech lead at Meta and Netflix.', required: true },
    { id: 'primaryColor', label: 'Primary Color', type: 'color', defaultValue: '#7c3aed', required: true },
    { id: 'module1', label: 'Module 1', type: 'text', defaultValue: 'HTML, CSS & JavaScript Fundamentals', required: true },
    { id: 'module2', label: 'Module 2', type: 'text', defaultValue: 'React & Modern Frontend', required: true },
    { id: 'module3', label: 'Module 3', type: 'text', defaultValue: 'Node.js & Backend APIs', required: true },
    { id: 'module4', label: 'Module 4', type: 'text', defaultValue: 'Databases & Deployment', required: true },
    { id: 'students', label: 'Student Count', type: 'text', defaultValue: '5,000+', required: true },
    { id: 'rating', label: 'Rating', type: 'text', defaultValue: '4.8', required: true },
    { id: 'ctaText', label: 'CTA Text', type: 'text', defaultValue: 'Enroll Now - 67% Off', required: true },
    { id: 'ctaLink', label: 'CTA Link', type: 'text', defaultValue: '#enroll', required: true },
    { id: 'footer', label: 'Footer', type: 'text', defaultValue: '© 2026 DevMastery. All rights reserved.', required: true },
  ],
  render: (data) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.courseName}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',sans-serif;line-height:1.6;color:#1f2937}
.container{max-width:1200px;margin:0 auto;padding:0 24px}
.btn-primary{display:inline-block;padding:18px 40px;background:${data.primaryColor};color:#fff;text-decoration:none;border-radius:8px;font-weight:700;font-size:16px;transition:all .3s}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 40px ${data.primaryColor}50}

.hero{padding:100px 0;background:linear-gradient(135deg,${data.primaryColor}08,#fff 50%);text-align:center}
.hero h1{font-size:48px;font-weight:800;line-height:1.15;margin-bottom:20px;max-width:800px;margin-left:auto;margin-right:auto}
.hero p{font-size:20px;color:#6b7280;max-width:600px;margin:0 auto 32px}
.price-box{display:inline-flex;align-items:center;gap:16px;margin-bottom:32px;padding:16px 32px;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.08)}
.price-box .current{font-size:36px;font-weight:800;color:${data.primaryColor}}
.price-box .original{font-size:20px;text-decoration:line-through;color:#9ca3af}
.badge{display:inline-flex;gap:24px;margin-bottom:32px}
.badge span{display:flex;align-items:center;gap:6px;font-size:14px;font-weight:500;color:#6b7280}

.curriculum{padding:80px 0;background:#f8fafc}
.section-title{text-align:center;font-size:36px;font-weight:700;margin-bottom:48px}
.modules{max-width:700px;margin:0 auto}
.module{display:flex;align-items:center;gap:20px;padding:24px;background:#fff;border-radius:12px;margin-bottom:16px;border-left:4px solid ${data.primaryColor}}
.module-num{width:40px;height:40px;background:${data.primaryColor};color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0}
.module h3{font-size:18px;font-weight:600}

.instructor{padding:80px 0}
.instructor-grid{display:grid;grid-template-columns:auto 1fr;gap:40px;align-items:center;max-width:800px;margin:0 auto}
.instructor-avatar{width:160px;height:160px;background:linear-gradient(135deg,${data.primaryColor},#a78bfa);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:80px}
.instructor h2{font-size:32px;font-weight:700;margin-bottom:8px}
.instructor .title{color:${data.primaryColor};font-weight:600;margin-bottom:16px}
.instructor p{color:#6b7280}

.cta-section{padding:80px 0;text-align:center;background:linear-gradient(135deg,${data.primaryColor},#a78bfa);color:#fff}
.cta-section h2{font-size:36px;font-weight:700;margin-bottom:16px}
.cta-section p{font-size:18px;opacity:.9;margin-bottom:32px}
.cta-section .btn-primary{background:#fff;color:${data.primaryColor}}

.footer{padding:32px 0;text-align:center;color:#9ca3af}

@media(max-width:768px){
.hero h1{font-size:32px}
.instructor-grid{grid-template-columns:1fr;text-align:center}
.instructor-avatar{margin:0 auto}
}
</style>
</head>
<body>
<section class="hero">
<div class="container">
<h1>${data.headline}</h1>
<p>${data.subheadline}</p>
<div class="badge">
<span>👥 ${data.students} students</span>
<span>⭐ ${data.rating} rating</span>
<span>⏱️ Self-paced</span>
</div>
<div class="price-box">
<span class="current">${data.price}</span>
<span class="original">${data.originalPrice}</span>
</div>
<div>
<a href="${data.ctaLink}" class="btn-primary">${data.ctaText}</a>
</div>
</div>
</section>

<section class="curriculum">
<div class="container">
<h2 class="section-title">What you will learn</h2>
<div class="modules">
<div class="module"><div class="module-num">1</div><h3>${data.module1}</h3></div>
<div class="module"><div class="module-num">2</div><h3>${data.module2}</h3></div>
<div class="module"><div class="module-num">3</div><h3>${data.module3}</h3></div>
<div class="module"><div class="module-num">4</div><h3>${data.module4}</h3></div>
</div>
</div>
</section>

<section class="instructor">
<div class="container">
<div class="instructor-grid">
<div class="instructor-avatar">👨‍💻</div>
<div>
<h2>Meet your instructor</h2>
<div class="title">${data.instructorName} — ${data.instructorTitle}</div>
<p>${data.instructorBio}</p>
</div>
</div>
</div>
</section>

<section class="cta-section">
<div class="container">
<h2>Ready to start your journey?</h2>
<p>Join ${data.students} students already enrolled</p>
<a href="${data.ctaLink}" class="btn-primary">${data.ctaText}</a>
</div>
</section>

<footer class="footer">
<div class="container"><p>${data.footer}</p></div>
</footer>
</body>
</html>`,
};
