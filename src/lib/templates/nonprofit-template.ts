import { TemplateConfig } from './types';

export const nonprofitTemplate: TemplateConfig = {
  id: 'nonprofit',
  name: 'Nonprofit / Charity',
  description: 'Nonprofit landing page with mission, impact stats, stories, and donation CTA',
  category: 'Nonprofit',
  thumbnail: '/thumbnails/nonprofit.png',
  fields: [
    { id: 'orgName', label: 'Organization Name', type: 'text', defaultValue: 'Bright Futures Foundation', required: true },
    { id: 'tagline', label: 'Tagline', type: 'text', defaultValue: 'Every Child Deserves a Chance to Shine', required: true },
    { id: 'description', label: 'Description', type: 'textarea', defaultValue: 'We provide education, healthcare, and hope to underserved children around the world. Together, we can break the cycle of poverty and build a brighter future.', required: true },
    { id: 'ctaText', label: 'CTA Text', type: 'text', defaultValue: 'Donate Now', required: true },
    { id: 'ctaLink', label: 'CTA Link', type: 'text', defaultValue: '#donate', required: true },
    { id: 'primaryColor', label: 'Primary Color', type: 'color', defaultValue: '#059669', required: true },
    { id: 'secondaryColor', label: 'Secondary Color', type: 'color', defaultValue: '#7c3aed', required: true },
    { id: 'missionStatement', label: 'Mission Statement', type: 'textarea', defaultValue: 'Our mission is to empower children in underserved communities through access to quality education, healthcare, and mentorship — creating lasting change one life at a time.', required: true },
    { id: 'impactStat1', label: 'Impact Stat 1', type: 'text', defaultValue: '50,000+', required: true },
    { id: 'impactStat1Label', label: 'Impact Stat 1 Label', type: 'text', defaultValue: 'Children Helped', required: true },
    { id: 'impactStat2', label: 'Impact Stat 2', type: 'text', defaultValue: '120', required: true },
    { id: 'impactStat2Label', label: 'Impact Stat 2 Label', type: 'text', defaultValue: 'Communities Served', required: true },
    { id: 'impactStat3', label: 'Impact Stat 3', type: 'text', defaultValue: '98%', required: true },
    { id: 'impactStat3Label', label: 'Impact Stat 3 Label', type: 'text', defaultValue: 'Funds Go Directly to Programs', required: true },
    { id: 'storyTitle', label: 'Story Title', type: 'text', defaultValue: 'Amara\'s Journey: From Dreams to Reality', required: true },
    { id: 'storyContent', label: 'Story Content', type: 'textarea', defaultValue: 'When Amara first joined our program at age 7, she could barely read. Today, she\'s a proud university student studying to become a doctor — giving back to the very community that raised her. "Bright Futures didn\'t just change my life, they gave me a life worth living," she says.', required: true },
    { id: 'donationAmount1', label: 'Donation Amount 1', type: 'text', defaultValue: '$25', required: true },
    { id: 'donationAmount2', label: 'Donation Amount 2', type: 'text', defaultValue: '$50', required: true },
    { id: 'donationAmount3', label: 'Donation Amount 3', type: 'text', defaultValue: '$100', required: true },
    { id: 'footerText', label: 'Footer Text', type: 'text', defaultValue: '© 2026 Bright Futures Foundation. A registered 501(c)(3) nonprofit. All donations are tax-deductible.', required: true },
  ],
  render: (data) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.orgName} — ${data.tagline}</title>
<meta name="description" content="${data.description}">
<meta name="keywords" content="nonprofit, charity, donation, ${data.orgName}">
<meta property="og:title" content="${data.orgName} — ${data.tagline}">
<meta property="og:description" content="${data.description}">
<meta property="og:type" content="website">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Lora:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',sans-serif;line-height:1.6;color:#1f2937}
h1,h2,h3,.serif{font-family:'Lora',serif}
.container{max-width:1200px;margin:0 auto;padding:0 24px}
.btn-primary{display:inline-block;padding:18px 40px;background:${data.primaryColor};color:#fff;text-decoration:none;border-radius:8px;font-weight:700;font-size:16px;transition:all .3s;cursor:pointer;border:none}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 40px ${data.primaryColor}50}
.btn-outline{display:inline-block;padding:14px 32px;border:2px solid #fff;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;transition:all .3s}
.btn-outline:hover{background:#fff;color:${data.primaryColor}}

nav{padding:20px 0;position:absolute;top:0;left:0;right:0;z-index:10}
nav .container{display:flex;justify-content:space-between;align-items:center}
.nav-brand{font-family:'Lora',serif;font-size:20px;font-weight:700;color:#fff;text-decoration:none}
.nav-links{display:flex;gap:32px;align-items:center}
.nav-links a{color:rgba(255,255,255,.9);text-decoration:none;font-size:14px;font-weight:500;transition:color .3s}
.nav-links a:hover{color:#fff}
.nav-donate{padding:10px 24px;background:${data.primaryColor};color:#fff!important;border-radius:6px;font-weight:600}

.hero{padding:160px 0 100px;background:linear-gradient(135deg,${data.primaryColor},${data.secondaryColor});color:#fff;text-align:center;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 60%);animation:pulse 8s ease-in-out infinite}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
.hero-content{position:relative;z-index:1}
.hero h1{font-size:52px;font-weight:700;line-height:1.15;margin-bottom:20px;max-width:700px;margin-left:auto;margin-right:auto}
.hero .tagline{font-family:'Lora',serif;font-size:22px;font-style:italic;color:rgba(255,255,255,.9);margin-bottom:16px}
.hero .description{font-size:18px;color:rgba(255,255,255,.85);max-width:600px;margin:0 auto 36px}
.hero-buttons{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}

.mission{padding:100px 0;background:#fff}
.mission-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
.mission-label{display:inline-block;padding:6px 16px;background:${data.primaryColor}12;color:${data.primaryColor};border-radius:100px;font-size:13px;font-weight:600;margin-bottom:20px;letter-spacing:.5px;text-transform:uppercase}
.mission h2{font-size:36px;font-weight:700;line-height:1.25;margin-bottom:20px;color:#0f172a}
.mission p{font-size:18px;color:#4b5563;line-height:1.8}
.mission-visual{display:flex;align-items:center;justify-content:center;min-height:360px;background:linear-gradient(135deg,${data.primaryColor}12,${data.secondaryColor}12);border-radius:24px;position:relative}
.mission-visual-inner{text-align:center;padding:48px}
.mission-visual-inner .icon{font-size:72px;margin-bottom:16px}
.mission-visual-inner .quote{font-family:'Lora',serif;font-size:20px;font-style:italic;color:#374151;line-height:1.6;max-width:400px}
.mission-visual-inner .attribution{margin-top:12px;color:#6b7280;font-size:14px;font-weight:500}

.impact{padding:80px 0;background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff;text-align:center}
.impact h2{font-size:36px;font-weight:700;margin-bottom:16px}
.impact .subtitle{font-size:18px;color:rgba(255,255,255,.7);margin-bottom:56px;max-width:500px;margin-left:auto;margin-right:auto}
.impact-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;max-width:900px;margin:0 auto}
.impact-card{padding:40px 24px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:20px;transition:all .3s}
.impact-card:hover{background:rgba(255,255,255,.1);transform:translateY(-4px)}
.impact-stat{font-size:48px;font-weight:800;background:linear-gradient(135deg,${data.primaryColor},#34d399);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:8px}
.impact-label{font-size:15px;color:rgba(255,255,255,.8);font-weight:500}

.story{padding:100px 0;background:#fefce8}
.story-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
.story-image{min-height:400px;background:linear-gradient(135deg,${data.primaryColor}20,${data.secondaryColor}20);border-radius:24px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.story-image-inner{text-align:center;padding:40px}
.story-image-inner .emoji{font-size:80px;margin-bottom:16px}
.story-image-inner .caption{font-family:'Lora',serif;font-style:italic;color:#4b5563;font-size:16px}
.story-label{display:inline-block;padding:6px 16px;background:${data.secondaryColor}12;color:${data.secondaryColor};border-radius:100px;font-size:13px;font-weight:600;margin-bottom:20px;letter-spacing:.5px;text-transform:uppercase}
.story h2{font-size:36px;font-weight:700;line-height:1.25;margin-bottom:20px;color:#0f172a}
.story-content{font-family:'Lora',serif;font-size:18px;color:#4b5563;line-height:1.8;font-style:italic}

.donate{padding:100px 0;text-align:center;background:#fff}
.donate-label{display:inline-block;padding:6px 16px;background:${data.primaryColor}12;color:${data.primaryColor};border-radius:100px;font-size:13px;font-weight:600;margin-bottom:20px;letter-spacing:.5px;text-transform:uppercase}
.donate h2{font-size:40px;font-weight:700;margin-bottom:16px;color:#0f172a}
.donate .subtitle{font-size:18px;color:#6b7280;margin-bottom:48px;max-width:500px;margin-left:auto;margin-right:auto}
.donation-options{display:flex;gap:24px;justify-content:center;flex-wrap:wrap;margin-bottom:40px}
.donation-card{width:220px;padding:40px 24px;border:2px solid #e5e7eb;border-radius:20px;transition:all .3s;cursor:pointer;background:#fff;position:relative}
.donation-card:hover,.donation-card.featured{border-color:${data.primaryColor};transform:translateY(-4px);box-shadow:0 20px 60px ${data.primaryColor}15}
.donation-card.featured{background:${data.primaryColor}08}
.donation-card.featured .badge{display:block}
.badge{display:none;position:absolute;top:-12px;left:50%;transform:translateX(-50%);padding:4px 16px;background:${data.primaryColor};color:#fff;border-radius:100px;font-size:12px;font-weight:600}
.donation-amount{font-size:36px;font-weight:800;color:${data.primaryColor};margin-bottom:8px}
.donation-desc{font-size:14px;color:#6b7280;line-height:1.5}
.donate-btn{padding:14px 32px;background:${data.primaryColor};color:#fff;border:none;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;transition:all .3s;width:100%;margin-top:16px}
.donate-btn:hover{box-shadow:0 8px 24px ${data.primaryColor}40}

.cta{padding:100px 0;background:linear-gradient(135deg,${data.primaryColor},${data.secondaryColor});color:#fff;text-align:center}
.cta h2{font-size:40px;font-weight:700;margin-bottom:16px}
.cta p{font-size:20px;color:rgba(255,255,255,.85);margin-bottom:36px;max-width:550px;margin-left:auto;margin-right:auto}
.cta .btn-primary{background:#fff;color:${data.primaryColor};padding:20px 48px;font-size:18px}
.cta .btn-primary:hover{box-shadow:0 10px 40px rgba(0,0,0,.2)}
.cta .small{font-size:14px;color:rgba(255,255,255,.7);margin-top:16px}

footer{padding:48px 0;text-align:center;background:#0f172a;color:rgba(255,255,255,.5)}
footer p{font-size:14px;line-height:1.8}

@media(max-width:768px){
.hero{padding:120px 0 60px}
.hero h1{font-size:30px}
.hero .tagline{font-size:18px}
.hero .description{font-size:16px}
.mission-grid,.story-grid{grid-template-columns:1fr;gap:40px}
.mission h2,.story h2{font-size:28px}
.impact-grid{grid-template-columns:1fr;gap:24px}
.impact-stat{font-size:36px}
.donation-options{flex-direction:column;align-items:center}
.donation-card{width:100%;max-width:280px}
.cta h2{font-size:28px}
.nav-links{display:none}
}
</style>
</head>
<body>
<nav>
<div class="container">
<a href="#" class="nav-brand">${data.orgName}</a>
<div class="nav-links">
<a href="#mission">Our Mission</a>
<a href="#impact">Our Impact</a>
<a href="#story">Stories</a>
<a href="#donate" class="nav-donate">${data.ctaText}</a>
</div>
</div>
</nav>

<section class="hero">
<div class="container hero-content">
<div class="tagline">${data.tagline}</div>
<h1>Together, We Create Lasting Change</h1>
<p class="description">${data.description}</p>
<div class="hero-buttons">
<a href="${data.ctaLink}" class="btn-primary">${data.ctaText}</a>
<a href="#mission" class="btn-outline">Learn Our Mission</a>
</div>
</div>
</section>

<section class="mission" id="mission">
<div class="container">
<div class="mission-grid">
<div>
<div class="mission-label">Our Mission</div>
<h2>Driven by Compassion, Guided by Purpose</h2>
<p>${data.missionStatement}</p>
</div>
<div class="mission-visual">
<div class="mission-visual-inner">
<div class="icon">&#10084;&#65039;</div>
<div class="quote">"The best way to find yourself is to lose yourself in the service of others."</div>
<div class="attribution">— Mahatma Gandhi</div>
</div>
</div>
</div>
</div>
</section>

<section class="impact" id="impact">
<div class="container">
<h2>Our Impact in Numbers</h2>
<p class="subtitle">Every number represents a life touched, a community uplifted, a future transformed.</p>
<div class="impact-grid">
<div class="impact-card">
<div class="impact-stat">${data.impactStat1}</div>
<div class="impact-label">${data.impactStat1Label}</div>
</div>
<div class="impact-card">
<div class="impact-stat">${data.impactStat2}</div>
<div class="impact-label">${data.impactStat2Label}</div>
</div>
<div class="impact-card">
<div class="impact-stat">${data.impactStat3}</div>
<div class="impact-label">${data.impactStat3Label}</div>
</div>
</div>
</div>
</section>

<section class="story" id="story">
<div class="container">
<div class="story-grid">
<div class="story-image">
<div class="story-image-inner">
<div class="emoji">&#127775;</div>
<div class="caption">A story of hope and transformation</div>
</div>
</div>
<div>
<div class="story-label">A Story of Hope</div>
<h2>${data.storyTitle}</h2>
<p class="story-content">${data.storyContent}</p>
</div>
</div>
</div>
</section>

<section class="donate" id="donate">
<div class="container">
<div class="donate-label">Make a Difference</div>
<h2>Your Generosity Changes Lives</h2>
<p class="subtitle">Choose an amount below and make an immediate impact today. Every dollar goes directly to helping those who need it most.</p>
<div class="donation-options">
<div class="donation-card">
<span class="badge">Popular</span>
<div class="donation-amount">${data.donationAmount1}</div>
<div class="donation-desc">Provides school supplies for 5 children for an entire year</div>
<button class="donate-btn" onclick="window.location.href='${data.ctaLink}'">Donate ${data.donationAmount1}</button>
</div>
<div class="donation-card featured">
<span class="badge">Most Impactful</span>
<div class="donation-amount">${data.donationAmount2}</div>
<div class="donation-desc">Funds healthcare access for a family for 6 months</div>
<button class="donate-btn" onclick="window.location.href='${data.ctaLink}'">Donate ${data.donationAmount2}</button>
</div>
<div class="donation-card">
<span class="badge">Champion</span>
<div class="donation-amount">${data.donationAmount3}</div>
<div class="donation-desc">Sponsors a child's complete education for one year</div>
<button class="donate-btn" onclick="window.location.href='${data.ctaLink}'">Donate ${data.donationAmount3}</button>
</div>
</div>
</div>
</section>

<section class="cta">
<div class="container">
<h2>Be the Change You Wish to See</h2>
<p>Your support has the power to transform lives. Join thousands of others who have chosen to make a difference.</p>
<a href="${data.ctaLink}" class="btn-primary">${data.ctaText}</a>
<p class="small">Tax-deductible. 100% secure. Every cent counts.</p>
</div>
</section>

<footer>
<div class="container">
<p>${data.footerText}</p>
</div>
</footer>
</body>
</html>`,
};
