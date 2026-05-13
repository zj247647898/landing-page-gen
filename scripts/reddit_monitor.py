#!/usr/bin/env python3
"""
Reddit 需求监控脚本
监控特定subreddit中的需求帖
"""

import json
import time
import re
from datetime import datetime
from urllib.request import Request, urlopen

# 监控的subreddit
SUBREDDITS = [
    "forhire",
    "slavelabour",
    "webdev",
    "SaaS",
    "startups",
    "entrepreneur",
    "sideproject",
    "indiehackers",
]

# 关键词
KEYWORDS = [
    "landing page",
    "website",
    "web developer",
    "frontend",
    "MVP",
    "build a site",
    "need developer",
    "freelance",
    "cheap website",
    "quick website",
]

# 回复模板
REPLIES = [
    "I can help with this! I build landing pages and small web apps with fast turnaround. DM me if you're still looking.",
    "This is exactly what I do — landing pages and MVPs shipped in days. Fixed pricing. Let me know if you want to chat!",
    "Happy to take this on. I specialize in rapid development for founders. Portfolio and references available. DM me!",
]


def fetch_subreddit(subreddit: str, limit: int = 25) -> list:
    """获取subreddit最新帖子"""
    try:
        url = f"https://www.reddit.com/r/{subreddit}/new.json?limit={limit}"
        req = Request(url, headers={"User-Agent": "LandingPageBot/1.0"})
        with urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode())
            return data.get("data", {}).get("children", [])
    except Exception as e:
        print(f"Error fetching r/{subreddit}: {e}")
        return []


def is_valid_post(post: dict) -> bool:
    """判断帖子是否匹配需求"""
    title = post.get("data", {}).get("title", "").lower()
    selftext = post.get("data", {}).get("selftext", "").lower()
    full_text = title + " " + selftext

    # 检查关键词
    has_keyword = any(kw in full_text for kw in KEYWORDS)

    # 排除已关闭/已雇佣
    excluded = ["hired", "closed", "found", "completed", "done", "filled"]
    is_open = not any(exc in full_text for exc in excluded)

    # 时间检查（只关注最近2小时的帖子）
    created_utc = post.get("data", {}).get("created_utc", 0)
    is_recent = (datetime.now().timestamp() - created_utc) < 7200

    return has_keyword and is_open and is_recent


def format_post(post: dict) -> dict:
    """格式化帖子信息"""
    data = post.get("data", {})
    return {
        "title": data.get("title", ""),
        "author": data.get("author", ""),
        "url": f"https://reddit.com{data.get('permalink', '')}",
        "subreddit": data.get("subreddit", ""),
        "created": datetime.fromtimestamp(data.get("created_utc", 0)).strftime("%H:%M"),
    }


def monitor():
    """主监控循环"""
    print("=" * 60)
    print("Reddit Lead Monitor Started")
    print(f"Subreddits: {len(SUBREDDITS)}")
    print(f"Check interval: 10 minutes")
    print("=" * 60)

    seen_ids = set()

    while True:
        new_leads = []

        for subreddit in SUBREDDITS:
            posts = fetch_subreddit(subreddit)
            for post in posts:
                post_id = post.get("data", {}).get("id")
                if post_id and post_id not in seen_ids:
                    seen_ids.add(post_id)
                    if is_valid_post(post):
                        new_leads.append(format_post(post))

        if new_leads:
            print(f"\n[{datetime.now().strftime('%H:%M')}] Found {len(new_leads)} new leads:")
            for lead in new_leads:
                print(f"  r/{lead['subreddit']} | {lead['title'][:80]}")
                print(f"  → {lead['url']}")
                print()

        time.sleep(600)  # 10分钟检查一次


if __name__ == "__main__":
    monitor()
