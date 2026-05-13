'use client';

import { Button } from '@/components/ui/button';

interface ShareButtonsProps {
  url?: string;
  title?: string;
  text?: string;
}

export default function ShareButtons({ url, title, text }: ShareButtonsProps) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = title || 'LP Gen — Landing Page Generator';
  const shareText = text || 'Build beautiful landing pages in 5 minutes. No code needed.';

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const redditUrl = `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`;
  const hnUrl = `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(shareUrl)}&t=${encodeURIComponent(shareTitle)}`;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div className="flex items-center gap-2">
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="sm" className="text-xs">Twitter</Button>
      </a>
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="sm" className="text-xs">LinkedIn</Button>
      </a>
      <a href={redditUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="sm" className="text-xs">Reddit</Button>
      </a>
      <a href={hnUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="sm" className="text-xs">HN</Button>
      </a>
      <Button variant="outline" size="sm" className="text-xs" onClick={copyLink}>Copy Link</Button>
    </div>
  );
}
