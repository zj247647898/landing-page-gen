import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const posts: Record<string, { title: string; content: string }> = {
  'best-landing-page-templates-2026': {
    title: 'Best Landing Page Templates for 2026',
    content: `
<p class="lead">In 2026, your landing page is your first impression. Here are the top-performing templates by category.</p>

<h2>SaaS Landing Pages</h2>
<p>SaaS products need to communicate value fast. The best SaaS landing pages feature a clear hero section, social proof, and a strong CTA above the fold. Key elements include:</p>
<ul>
<li>Problem-agitation-solution headline</li>
<li>Product screenshot or demo video</li>
<li>Trust badges and customer logos</li>
<li>Feature grid with icons</li>
<li>Pricing table with recommended plan highlighted</li>
</ul>

<h2>E-Commerce Landing Pages</h2>
<p>For product launches, e-commerce landing pages should focus on a single product with high-quality visuals and urgency triggers:</p>
<ul>
<li>Large product hero image</li>
<li>Price anchoring (original vs. sale price)</li>
<li>Scarcity indicators (limited stock, countdown timer)</li>
<li>Social proof (reviews, UGC)</li>
<li>Risk reversal (guarantee, free returns)</li>
</ul>

<h2>App Landing Pages</h2>
<p>Mobile apps live and die by their App Store conversion. Your landing page should drive downloads:</p>
<ul>
<li>App store badge prominence</li>
<li>Phone mockup with app screenshot</li>
<li>Feature highlights in 3 steps</li>
<li>User rating and review count</li>
<li>Download CTA repeated throughout</li>
</ul>

<h2>Build Yours Today</h2>
<p>Instead of hiring a designer or wrestling with complex builders, use our <a href="/">Landing Page Generator</a> to create and export production-ready HTML in minutes.</p>
    `,
  },
  'how-to-build-landing-page-without-code': {
    title: 'How to Build a Landing Page Without Code',
    content: `
<p class="lead">You don't need to learn HTML, CSS, or JavaScript to build a professional landing page. Here's the fastest way.</p>

<h2>Step 1: Choose a Template</h2>
<p>Start with a proven template designed for your use case. Our templates are built with conversion best practices baked in.</p>

<h2>Step 2: Customize Your Content</h2>
<p>Replace the placeholder text with your own headline, description, and CTA. Use the live preview to see changes instantly.</p>

<h2>Step 3: Adjust Colors</h2>
<p>Pick your brand colors. Our templates use CSS variables so one color change updates the entire page.</p>

<h2>Step 4: Export and Deploy</h2>
<p>Download your page as a ZIP file containing clean HTML, CSS, and assets. Upload to any hosting platform.</p>

<h2>Where to Host Your Landing Page</h2>
<ul>
<li><strong>Free:</strong> GitHub Pages, Netlify Drop, Cloudflare Pages</li>
<li><strong>Paid:</strong> Vercel, AWS S3 + CloudFront</li>
<li><strong>Custom domain:</strong> All of the above support custom domains</li>
</ul>

<p><a href="/">Start building your landing page now →</a></p>
    `,
  },
  'landing-page-conversion-tips': {
    title: '10 Landing Page Tips That Double Conversions',
    content: `
<p class="lead">Small changes to your landing page can have massive impacts on conversion rates. Here are 10 proven tactics.</p>

<h2>1. One Goal Per Page</h2>
<p>Your landing page should have exactly one objective. Remove navigation menus, footer links, and any element that distracts from your primary CTA.</p>

<h2>2. Write a Benefit-Driven Headline</h2>
<p>Don't describe what your product is. Describe what it does for the user. "Save 10 hours a week" beats "Task management software."</p>

<h2>3. Use Social Proof Above the Fold</h2>
<p>Trust indicators (customer count, ratings, testimonials) should be visible without scrolling.</p>

<h2>4. Make Your CTA Button Pop</h2>
<p>Use a high-contrast color for your primary CTA. The button text should describe the outcome, not the action. "Get My Free Guide" outperforms "Submit."</p>

<h2>5. Reduce Form Fields</h2>
<p>Every field you add drops conversion. Ask for email only, then collect more data post-signup.</p>

<h2>6. Add a Video</h2>
<p>A 60-second explainer video can increase conversions by 80%.</p>

<h2>7. Use Urgency and Scarcity</h2>
<p>Limited-time offers and countdown timers create FOMO. But use them honestly.</p>

<h2>8. Show the Product</h2>
<p>People want to see what they're buying. Use high-quality screenshots, mockups, or demos.</p>

<h2>9. Address Objections</h2>
<p>Include an FAQ section that tackles the top 3-5 reasons someone might not convert.</p>

<h2>10. Test Everything</h2>
<p>A/B test headlines, CTAs, images, and page layouts. Small improvements compound over time.</p>

<p><a href="/">Build a high-converting landing page now →</a></p>
    `,
  },
  'free-html-landing-page-templates': {
    title: 'Free HTML Landing Page Templates You Can Use Today',
    content: `
<p class="lead">Looking for free, clean HTML landing page templates? Here are the best sources and what to look for.</p>

<h2>What Makes a Good HTML Template?</h2>
<ul>
<li><strong>Responsive:</strong> Works perfectly on mobile, tablet, and desktop</li>
<li><strong>Fast:</strong> No bloated frameworks, minimal dependencies</li>
<li><strong>Clean code:</strong> Well-structured HTML and CSS that's easy to customize</li>
<li><strong>SEO-friendly:</strong> Proper heading hierarchy and meta tags</li>
<li><strong>Accessible:</strong> WCAG-compliant contrast and markup</li>
</ul>

<h2>Our Templates</h2>
<p>We offer 5 free landing page templates you can customize and export:</p>
<ul>
<li><strong>SaaS Modern:</strong> For software products and startups</li>
<li><strong>E-Commerce Launch:</strong> For product drops and sales</li>
<li><strong>App Launch:</strong> For mobile app marketing</li>
<li><strong>Online Course:</strong> For educators and coaches</li>
<li><strong>Consulting Pro:</strong> For agencies and freelancers</li>
</ul>

<h2>How to Customize</h2>
<p>Our editor lets you change text, colors, and content without touching code. When you're done, export a ZIP file with your complete landing page.</p>

<p><a href="/">Browse all templates →</a></p>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <div
            className="text-muted-foreground leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        <div className="mt-12 p-6 bg-indigo-50 rounded-xl text-center">
          <h3 className="font-bold text-lg mb-2">Ready to build your landing page?</h3>
          <p className="text-muted-foreground mb-4">Create and export professional landing pages in minutes.</p>
          <Link href="/">
            <Button>Start Building for Free</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
