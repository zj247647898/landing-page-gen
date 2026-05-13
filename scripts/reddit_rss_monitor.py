#!/usr/bin/env python3
"""
Reddit 需求监控 - RSS版本
使用Reddit RSS feed，避免API限制
"""

import re
import time
import json
import xml.etree.ElementTree as ET
from datetime import datetime
from urllib.request import Request, urlopen

SUBREDDITS = ["forhire", "slavelabour", "webdev", "SaaS", "startups", "entrepreneur", "sideproject"]
KEYWORDS = ["landing page", "website", "web developer", "frontend", "MVP", "build a site", "need developer", "freelance", "cheap website", "need a page", "landing page", "need help building"]
EXCLUDE = ["hired", "closed", "found", "completed", "filled"]

seen = set()

def fetch_rss(subreddit: str) -> list:
    """获取Reddit RSS"""
    try:
        url = f"https://www.reddit.com/r/{subreddit}/new/.rss"
        req = Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; LeadBot/1.0)"})
        with urlopen(req, timeout=15) as resp:
            return resp.read().decode()
    except Exception as e:
        print(f"  [!] r/{subreddit}: {e}")
        return ""

def parse_posts(xml_text: str, subreddit: str) -> list:
    """解析RSS XML"""
    posts = []
    try:
        root = ET.fromstring(xml_text)
        ns = {"a": "http://www.w3.org/2005/Atom"}
        for entry in root.findall("a:entry", ns):
            title_el = entry.find("a:title", ns)
            content_el = entry.find("a:content", ns)
            link_el = entry.find("a:link", ns)

            title = title_el.text if title_el is not None else ""
            content_html = content_el.text if content_el is not None else ""
            href = link_el.get("href", "") if link_el is not None else ""

            # Clean HTML from content
            content = re.sub(r"<[^>]+>", " ", content_html)
            content = re.sub(r"\s+", " ", content).strip()[:500]

            # Extract post ID
            post_id = href.split("/comments/")[-1].split("/")[0] if "/comments/" in href else href

            posts.append({
                "id": post_id,
                "title": title,
                "content": content,
                "url": href,
                "subreddit": subreddit,
            })
    except ET.ParseError:
        pass
    return posts

def is_match(post: dict) -> bool:
    """检查是否匹配需求"""
    text = (post["title"] + " " + post["content"]).lower()
    has_kw = any(kw in text for kw in KEYWORDS)
    not_closed = not any(exc in text for exc in EXCLUDE)
    return has_kw and not_closed

def monitor():
    print("=" * 60)
    print("Reddit Lead Monitor (RSS)")
    print(f"Subreddits: {len(SUBREDDITS)}")
    print(f"Keywords: {len(KEYWORDS)}")
    print("=" * 60)

    while True:
        print(f"\n[{datetime.now().strftime('%H:%M')}] Scanning...")
        new_leads = []

        for sub in SUBREDDITS:
            xml = fetch_rss(sub)
            posts = parse_posts(xml, sub)
            for post in posts:
                if post["id"] not in seen:
                    seen.add(post["id"])
                    if is_match(post):
                        new_leads.append(post)
            time.sleep(2)  # Rate limit

        if new_leads:
            print(f"\n  Found {len(new_leads)} lead(s):")
            for lead in new_leads:
                print(f"  → r/{lead['subreddit']}: {lead['title'][:80]}")
                print(f"    {lead['url']}")
                print(f"    {lead['content'][:120]}...")
                print()
        else:
            print("  No new leads this cycle.")

        print(f"  Next scan in 10 min. Total seen: {len(seen)}")
        time.sleep(600)

if __name__ == "__main__":
    monitor()
