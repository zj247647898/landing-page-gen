import { TemplateConfig } from './types';

export const podcastTemplate: TemplateConfig = {
  id: 'podcast',
  name: 'Podcast',
  description: 'Podcast landing page with latest episodes, host info, subscribe CTA, and platform links',
  category: 'Media',
  thumbnail: '/thumbnails/podcast.png',
  fields: [
    { id: 'podcastName', label: 'Podcast Name', type: 'text', defaultValue: 'The Deep Dive', required: true },
    { id: 'tagline', label: 'Tagline', type: 'text', defaultValue: 'Conversations that go beneath the surface', required: true },
    { id: 'description', label: 'Description', type: 'textarea', defaultValue: 'Join us every week as we explore the ideas, stories, and people shaping the future of technology, culture, and creativity.', required: true },
    { id: 'ctaText', label: 'CTA Text', type: 'text', defaultValue: 'Subscribe Now', required: true },
    { id: 'ctaLink', label: 'CTA Link', type: 'text', defaultValue: '#subscribe', required: true },
    { id: 'primaryColor', label: 'Primary Color', type: 'color', defaultValue: '#7c3aed', required: true },
    { id: 'secondaryColor', label: 'Secondary Color', type: 'color', defaultValue: '#ec4899', required: true },
    { id: 'hostName', label: 'Host Name', type: 'text', defaultValue: 'Alex Rivera', required: true },
    { id: 'hostBio', label: 'Host Bio', type: 'textarea', defaultValue: 'Award-winning journalist and storyteller with 10+ years of experience in tech and culture reporting. Previously at NPR and The Verge.', required: true },
    { id: 'episode1', label: 'Episode 1 Title', type: 'text', defaultValue: 'The AI Revolution Nobody Saw Coming', required: true },
    { id: 'episode1Desc', label: 'Episode 1 Description', type: 'textarea', defaultValue: 'How a small research lab changed everything we thought we knew about artificial intelligence.', required: true },
    { id: 'episode2', label: 'Episode 2 Title', type: 'text', defaultValue: 'Building in Public: The New Startup Playbook', required: true },
    { id: 'episode2Desc', label: 'Episode 2 Description', type: 'textarea', defaultValue: 'Why transparency is becoming the most powerful marketing tool for founders.', required: true },
    { id: 'episode3', label: 'Episode 3 Title', type: 'text', defaultValue: 'The Remote Work Experiment After 5 Years', required: true },
    { id: 'episode3Desc', label: 'Episode 3 Description', type: 'textarea', defaultValue: 'What we actually learned from the biggest workplace shift in a generation.', required: true },
    { id: 'platform1', label: 'Platform 1 Name', type: 'text', defaultValue: 'Apple Podcasts', required: true },
    { id: 'platform1Url', label: 'Platform 1 URL', type: 'text', defaultValue: 'https://podcasts.apple.com', required: true },
    { id: 'platform2', label: 'Platform 2 Name', type: 'text', defaultValue: 'Spotify', required: true },
    { id: 'platform2Url', label: 'Platform 2 URL', type: 'text', defaultValue: 'https://open.spotify.com', required: true },
    { id: 'platform3', label: 'Platform 3 Name', type: 'text', defaultValue: 'Google Podcasts', required: true },
    { id: 'platform3Url', label: 'Platform 3 URL', type: 'text', defaultValue: 'https://podcasts.google.com', required: true },
    { id: 'listenerCount', label: 'Listener Count', type: 'text', defaultValue: '50,000+', required: true },
    { id: 'footerText', label: 'Footer Text', type: 'text', defaultValue: '\u00A9 2026 The Deep Dive. All rights reserved.', required: true },
  ],
  render: (data) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.podcastName} - ${data.tagline}</title>
<meta name="description" content="${data.description}">
<meta name="keywords" content="podcast, ${data.podcastName}, ${data.hostName}">
<meta property="og:title" content="${data.podcastName} - ${data.tagline}">
<meta property="og:description" content="${data.description}">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${data.podcastName}">
<meta name="twitter:description" content="${data.tagline}">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',sans-serif;line-height:1.6;color:#e2e8f0;background:#0f172a}
a{text-decoration:none;color:inherit}
.container{max-width:1200px;margin:0 auto;padding:0 24px}

/* Nav */
.nav{padding:20px 0;position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(15,23,42,0.85);backdrop-filter:blur(20px);border-bottom:1px solid rgba(124,58,237,0.15)}
.nav .container{display:flex;align-items:center;justify-content:space-between}
.nav-logo{font-size:22px;font-weight:800;background:linear-gradient(135deg,${data.primaryColor},${data.secondaryColor});-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.nav-links{display:flex;gap:32px;align-items:center}
.nav-links a{color:#94a3b8;font-size:14px;font-weight:500;transition:color .3s}
.nav-links a:hover{color:#fff}
.btn-subscribe{padding:10px 24px;background:linear-gradient(135deg,${data.primaryColor},${data.secondaryColor});color:#fff;border-radius:100px;font-weight:600;font-size:14px;transition:all .3s}
.btn-subscribe:hover{transform:translateY(-2px);box-shadow:0 8px 30px ${data.primaryColor}50}

/* Hero */
.hero{padding:160px 0 100px;text-align:center;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:-200px;left:50%;transform:translateX(-50%);width:800px;height:800px;background:radial-gradient(circle,${data.primaryColor}20 0%,transparent 70%);pointer-events:none}
.hero::after{content:'';position:absolute;top:-100px;right:-200px;width:500px;height:500px;background:radial-gradient(circle,${data.secondaryColor}15 0%,transparent 70%);pointer-events:none}
.hero-content{position:relative;z-index:1}
.hero-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 20px;background:${data.primaryColor}15;border:1px solid ${data.primaryColor}30;color:${data.primaryColor};border-radius:100px;font-size:13px;font-weight:600;margin-bottom:28px}
.play-icon{width:16px;height:16px;border-left:10px solid ${data.primaryColor};border-top:6px solid transparent;border-bottom:6px solid transparent}
.hero h1{font-size:64px;font-weight:900;line-height:1.05;margin-bottom:20px;background:linear-gradient(135deg,#fff 0%,${data.primaryColor} 50%,${data.secondaryColor} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero .tagline{font-size:22px;color:#94a3b8;max-width:600px;margin:0 auto 40px}
.hero-play{width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,${data.primaryColor},${data.secondaryColor});display:flex;align-items:center;justify-content:center;margin:0 auto 32px;cursor:pointer;transition:all .4s;box-shadow:0 0 60px ${data.primaryColor}40;position:relative}
.hero-play::before{content:'';position:absolute;inset:-8px;border-radius:50%;border:2px solid ${data.primaryColor}30;animation:pulse-ring 2s ease-out infinite}
.hero-play::after{content:'';position:absolute;inset:-20px;border-radius:50%;border:1px solid ${data.primaryColor}15;animation:pulse-ring 2s ease-out infinite .5s}
.hero-play:hover{transform:scale(1.1);box-shadow:0 0 80px ${data.primaryColor}60}
.hero-play .tri{width:0;height:0;border-left:28px solid #fff;border-top:16px solid transparent;border-bottom:16px solid transparent;margin-left:6px}
@keyframes pulse-ring{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1.3)}}

/* Episodes */
.episodes{padding:100px 0}
.section-label{display:inline-block;padding:6px 16px;background:${data.primaryColor}15;color:${data.primaryColor};border-radius:100px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:16px}
.section-title{font-size:40px;font-weight:800;margin-bottom:48px;color:#fff}
.episode-card{background:linear-gradient(135deg,#1e293b,#0f172a);border:1px solid rgba(124,58,237,0.15);border-radius:20px;padding:32px;margin-bottom:20px;transition:all .3s;position:relative;overflow:hidden}
.episode-card::before{content:'';position:absolute;top:0;left:0;width:4px;height:100%;background:linear-gradient(180deg,${data.primaryColor},${data.secondaryColor});border-radius:4px}
.episode-card:hover{border-color:${data.primaryColor}40;transform:translateX(4px)}
.episode-header{display:flex;align-items:center;gap:16px;margin-bottom:12px}
.episode-num{font-size:12px;font-weight:700;color:${data.primaryColor};background:${data.primaryColor}15;padding:4px 12px;border-radius:100px;letter-spacing:1px}
.episode-date{font-size:13px;color:#64748b}
.episode-card h3{font-size:20px;font-weight:700;color:#fff;margin-bottom:8px}
.episode-card p{color:#94a3b8;font-size:15px;line-height:1.7}
.episode-play-btn{display:inline-flex;align-items:center;gap:8px;margin-top:16px;color:${data.primaryColor};font-weight:600;font-size:14px;transition:color .3s}
.episode-play-btn:hover{color:${data.secondaryColor}}

/* Host */
.host{padding:100px 0;background:linear-gradient(180deg,transparent,${data.primaryColor}08,transparent)}
.host-grid{display:grid;grid-template-columns:1fr 2fr;gap:48px;align-items:center}
.host-avatar{width:200px;height:200px;border-radius:50%;background:linear-gradient(135deg,${data.primaryColor},${data.secondaryColor});display:flex;align-items:center;justify-content:center;font-size:72px;color:#fff;margin:0 auto;box-shadow:0 0 60px ${data.primaryColor}30}
.host-info h2{font-size:36px;font-weight:800;color:#fff;margin-bottom:8px}
.host-info .role{color:${data.primaryColor};font-weight:600;margin-bottom:16px}
.host-info p{color:#94a3b8;font-size:16px;line-height:1.8}

/* Platforms */
.platforms{padding:100px 0;text-align:center}
.platform-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:700px;margin:0 auto}
.platform-card{background:#1e293b;border:1px solid rgba(124,58,237,0.12);border-radius:16px;padding:32px 24px;transition:all .3s;text-align:center}
.platform-card:hover{border-color:${data.primaryColor}40;transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,0.3)}
.platform-icon{font-size:40px;margin-bottom:12px}
.platform-card h4{color:#fff;font-size:16px;font-weight:600;margin-bottom:8px}
.platform-card .link{color:${data.primaryColor};font-size:13px;font-weight:600}

/* Stats */
.stats{padding:80px 0}
.stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
.stat-card{text-align:center;padding:40px 24px;background:linear-gradient(135deg,#1e293b,#0f172a);border:1px solid rgba(124,58,237,0.12);border-radius:20px}
.stat-number{font-size:48px;font-weight:900;background:linear-gradient(135deg,${data.primaryColor},${data.secondaryColor});-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.stat-label{color:#64748b;font-size:14px;font-weight:500;margin-top:4px}

/* CTA */
.cta{padding:100px 0;text-align:center;position:relative}
.cta::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:400px;background:radial-gradient(circle,${data.primaryColor}12 0%,transparent 70%);pointer-events:none}
.cta-content{position:relative;z-index:1}
.cta h2{font-size:48px;font-weight:900;color:#fff;margin-bottom:16px}
.cta p{color:#94a3b8;font-size:18px;margin-bottom:40px;max-width:500px;margin-left:auto;margin-right:auto}
.btn-cta{display:inline-flex;align-items:center;gap:10px;padding:20px 48px;background:linear-gradient(135deg,${data.primaryColor},${data.secondaryColor});color:#fff;border-radius:100px;font-weight:700;font-size:18px;transition:all .3s;box-shadow:0 8px 40px ${data.primaryColor}30}
.btn-cta:hover{transform:translateY(-3px);box-shadow:0 12px 60px ${data.primaryColor}50}
.btn-cta .cta-play{width:20px;height:20px;border-left:12px solid #fff;border-top:7px solid transparent;border-bottom:7px solid transparent}

/* Footer */
.footer{padding:48px 0;border-top:1px solid rgba(124,58,237,0.1);text-align:center;color:#475569;font-size:14px}

/* Responsive */
@media(max-width:768px){
.hero h1{font-size:36px}
.hero .tagline{font-size:17px}
.hero-play{width:80px;height:80px}
.hero-play .tri{border-left-width:22px;border-top-width:12px;border-bottom-width:12px;margin-left:4px}
.section-title{font-size:28px}
.host-grid{grid-template-columns:1fr;text-align:center}
.host-avatar{width:150px;height:150px;font-size:56px}
.platform-grid{grid-template-columns:1fr}
.stats-grid{grid-template-columns:1fr}
.cta h2{font-size:32px}
.nav-links{display:none}
.episode-card{padding:24px}
}
</style>
</head>
<body>

<!-- Navigation -->
<nav class="nav">
<div class="container">
<a href="#" class="nav-logo">${data.podcastName}</a>
<div class="nav-links">
<a href="#episodes">Episodes</a>
<a href="#host">About</a>
<a href="#subscribe">Subscribe</a>
<a href="${data.ctaLink}" class="btn-subscribe">${data.ctaText}</a>
</div>
</div>
</nav>

<!-- Hero -->
<section class="hero">
<div class="container">
<div class="hero-content">
<div class="hero-badge"><div class="play-icon"></div> New Episodes Weekly</div>
<div class="hero-play"><div class="tri"></div></div>
<h1>${data.podcastName}</h1>
<p class="tagline">${data.tagline}</p>
<a href="${data.ctaLink}" class="btn-cta"><div class="cta-play"></div> ${data.ctaText}</a>
</div>
</div>
</section>

<!-- Latest Episodes -->
<section class="episodes" id="episodes">
<div class="container">
<span class="section-label">Latest</span>
<h2 class="section-title">Recent Episodes</h2>

<div class="episode-card">
<div class="episode-header">
<span class="episode-num">EP 01</span>
<span class="episode-date">Latest</span>
</div>
<h3>${data.episode1}</h3>
<p>${data.episode1Desc}</p>
<a href="#" class="episode-play-btn">&#9654; Listen Now</a>
</div>

<div class="episode-card">
<div class="episode-header">
<span class="episode-num">EP 02</span>
<span class="episode-date">Recent</span>
</div>
<h3>${data.episode2}</h3>
<p>${data.episode2Desc}</p>
<a href="#" class="episode-play-btn">&#9654; Listen Now</a>
</div>

<div class="episode-card">
<div class="episode-header">
<span class="episode-num">EP 03</span>
<span class="episode-date">Popular</span>
</div>
<h3>${data.episode3}</h3>
<p>${data.episode3Desc}</p>
<a href="#" class="episode-play-btn">&#9654; Listen Now</a>
</div>
</div>
</section>

<!-- About Host -->
<section class="host" id="host">
<div class="container">
<div class="host-grid">
<div class="host-avatar">&#127908;</div>
<div class="host-info">
<span class="section-label">Your Host</span>
<h2>${data.hostName}</h2>
<div class="role">Podcast Host &amp; Creator</div>
<p>${data.hostBio}</p>
</div>
</div>
</div>
</section>

<!-- Subscribe Platforms -->
<section class="platforms" id="subscribe">
<div class="container">
<span class="section-label">Subscribe</span>
<h2 class="section-title">Listen On Your Favorite Platform</h2>
<div class="platform-grid">
<a href="${data.platform1Url}" target="_blank" rel="noopener" class="platform-card">
<div class="platform-icon">&#127822;</div>
<h4>${data.platform1}</h4>
<span class="link">Listen Now &rarr;</span>
</a>
<a href="${data.platform2Url}" target="_blank" rel="noopener" class="platform-card">
<div class="platform-icon">&#127925;</div>
<h4>${data.platform2}</h4>
<span class="link">Listen Now &rarr;</span>
</a>
<a href="${data.platform3Url}" target="_blank" rel="noopener" class="platform-card">
<div class="platform-icon">&#127918;</div>
<h4>${data.platform3}</h4>
<span class="link">Listen Now &rarr;</span>
</a>
</div>
</div>
</section>

<!-- Stats -->
<section class="stats">
<div class="container">
<div class="stats-grid">
<div class="stat-card">
<div class="stat-number">${data.listenerCount}</div>
<div class="stat-label">Listeners</div>
</div>
<div class="stat-card">
<div class="stat-number">100+</div>
<div class="stat-label">Episodes</div>
</div>
<div class="stat-card">
<div class="stat-number">4.9</div>
<div class="stat-label">Average Rating</div>
</div>
</div>
</div>
</section>

<!-- CTA -->
<section class="cta">
<div class="container">
<div class="cta-content">
<h2>Start Listening Today</h2>
<p>Don't miss an episode. Subscribe on your preferred platform and join our growing community.</p>
<a href="${data.ctaLink}" class="btn-cta"><div class="cta-play"></div> ${data.ctaText}</a>
</div>
</div>
</section>

<!-- Footer -->
<footer class="footer">
<div class="container"><p>${data.footerText}</p></div>
</footer>

</body>
</html>`,
};
