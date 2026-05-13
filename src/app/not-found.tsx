import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-lg text-center">
        <div className="text-8xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-2xl font-bold mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist. But while you&apos;re here, check out our tools:
        </p>
        <div className="grid grid-cols-2 gap-3 mb-8">
          <Link href="/">
            <Button variant="outline" className="w-full">Templates</Button>
          </Link>
          <Link href="/free-tools">
            <Button variant="outline" className="w-full">Free Tools</Button>
          </Link>
          <Link href="/free-seo-audit">
            <Button variant="outline" className="w-full">Free SEO Audit</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" className="w-full">Pricing</Button>
          </Link>
        </div>
        <Link href="/">
          <Button size="lg">
            <Home className="w-4 h-4 mr-2" /> Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
