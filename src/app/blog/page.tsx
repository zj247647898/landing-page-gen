import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const posts = [
  {
    slug: 'best-landing-page-templates-2026',
    title: 'Best Landing Page Templates for 2026',
    excerpt: 'Discover the highest-converting landing page designs for SaaS, e-commerce, and apps this year.',
    date: 'May 2026',
  },
  {
    slug: 'how-to-build-landing-page-without-code',
    title: 'How to Build a Landing Page Without Code',
    excerpt: 'A step-by-step guide to creating professional landing pages without writing a single line of HTML.',
    date: 'May 2026',
  },
  {
    slug: 'landing-page-conversion-tips',
    title: '10 Landing Page Tips That Double Conversions',
    excerpt: 'Proven strategies used by top marketers to increase signups and sales from your landing pages.',
    date: 'May 2026',
  },
  {
    slug: 'free-html-landing-page-templates',
    title: 'Free HTML Landing Page Templates You Can Use Today',
    excerpt: 'Download clean, responsive HTML templates ready to customize and deploy on any hosting platform.',
    date: 'May 2026',
  },
  {
    slug: 'saas-landing-page-examples',
    title: '15 SaaS Landing Page Examples That Convert (2026 Edition)',
    excerpt: 'Analyze the top-performing SaaS landing pages and learn the 5 proven patterns they all follow.',
    date: 'May 2026',
  },
  {
    slug: 'landing-page-vs-website',
    title: 'Landing Page vs Website: Which One Do You Need?',
    excerpt: 'Understand the key differences and learn when to use a landing page vs a full website.',
    date: 'May 2026',
  },
  {
    slug: 'how-to-create-waitlist-page',
    title: 'How to Create a Waitlist Page That Builds Hype Before Launch',
    excerpt: 'Build anticipation and collect emails before your product launches with a high-converting waitlist page.',
    date: 'May 2026',
  },
  {
    slug: 'ai-tool-landing-page-design',
    title: 'How to Design a Landing Page for an AI Tool (With Examples)',
    excerpt: 'AI products need special landing page strategies. Learn the framework that converts complex tech into simple value.',
    date: 'May 2026',
  },
  {
    slug: 'portfolio-landing-page-tips',
    title: 'Portfolio Landing Page: 8 Tips to Get More Clients',
    excerpt: 'Turn your portfolio from a passive showcase into an active client acquisition machine.',
    date: 'May 2026',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground mb-12">Tips, guides, and resources for building better landing pages.</p>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
