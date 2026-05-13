#!/usr/bin/env python3
"""
Twitter/X 需求监控脚本
监控特定关键词，发现潜在客户
"""

import json
import time
import re
from datetime import datetime, timedelta
from urllib.request import Request, urlopen
from urllib.parse import quote

# 监控关键词
KEYWORDS = [
    "need a landing page",
    "landing page developer",
    "build a website",
    "freelance web developer",
    "need a website",
    "MVP developer",
    "need an app built",
    "custom web development",
    "hire developer",
]

# 排除词（避免垃圾信息）
EXCLUDE = ["job", "hiring", "career", "intern", "junior", "entry level"]

# 回复模板
REPLY_TEMPLATES = [
    "I build landing pages and MVPs fast. Fixed pricing, daily updates. DM if interested!",
    "Can help with that! I specialize in rapid landing page/MVP development. Check out my work or DM me.",
    "Built for speed — I can ship your landing page in 3-5 days. Fixed price, no surprises. Want to chat?",
]


def search_twitter(keyword: str) -> list:
    """搜索Twitter（使用Nitter实例作为代理）"""
    # 注意：实际使用需要Twitter API或浏览器自动化
    # 这里提供框架，实际部署需要Playwright/Selenium + Twitter账号
    print(f"[{datetime.now()}] Searching: {keyword}")
    return []


def is_valid_lead(text: str) -> bool:
    """判断是否为有效线索"""
    text_lower = text.lower()
    # 排除招聘帖
    if any(exc in text_lower for exc in EXCLUDE):
        return False
    # 必须包含需求词
    if not any(kw in text_lower for kw in ["need", "looking for", "want", "hire"]):
        return False
    return True


def generate_reply() -> str:
    """生成回复"""
    import random
    return random.choice(REPLY_TEMPLATES)


def monitor():
    """主监控循环"""
    print("=" * 50)
    print("Twitter Lead Monitor Started")
    print(f"Keywords: {len(KEYWORDS)}")
    print(f"Interval: 5 minutes")
    print("=" * 50)

    while True:
        leads = []
        for keyword in KEYWORDS:
            results = search_twitter(keyword)
            for result in results:
                if is_valid_lead(result["text"]):
                    leads.append({
                        "user": result["user"],
                        "text": result["text"][:100],
                        "reply": generate_reply(),
                        "url": result["url"],
                    })

        if leads:
            print(f"\n[{datetime.now()}] Found {len(leads)} new leads:")
            for lead in leads:
                print(f"  @{lead['user']}: {lead['text']}")
                print(f"  → Reply: {lead['reply']}")
                print()

        time.sleep(300)  # 5分钟检查一次


if __name__ == "__main__":
    monitor()
