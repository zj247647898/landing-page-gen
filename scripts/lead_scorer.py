#!/usr/bin/env python3
"""
线索评分系统
根据帖子内容评估潜在客户价值
"""

from dataclasses import dataclass
from typing import List

@dataclass
class Lead:
    platform: str
    author: str
    title: str
    text: str
    url: str
    score: int = 0
    tags: List[str] = None

    def __post_init__(self):
        if self.tags is None:
            self.tags = []


class LeadScorer:
    """线索评分器"""

    # 高价值信号
    POSITIVE_SIGNALS = {
        "budget": 3,
        "$": 3,
        "paid": 2,
        "urgent": 2,
        "ASAP": 2,
        "quick": 1,
        "fast": 1,
        "professional": 1,
        "experienced": 1,
        "landing page": 2,
        "MVP": 3,
        "startup": 2,
        "SaaS": 2,
        "e-commerce": 2,
        "conversion": 2,
    }

    # 低价值信号
    NEGATIVE_SIGNALS = {
        "free": -3,
        "exposure": -3,
        "equity": -2,
        "revenue share": -2,
        "student": -1,
        "beginner": -1,
        "cheap": -1,
        "low budget": -2,
    }

    @classmethod
    def score(cls, lead: Lead) -> Lead:
        """评分"""
        text = (lead.title + " " + lead.text).lower()
        score = 0
        tags = []

        for signal, value in cls.POSITIVE_SIGNALS.items():
            if signal.lower() in text:
                score += value
                tags.append(f"+{signal}")

        for signal, value in cls.NEGATIVE_SIGNALS.items():
            if signal.lower() in text:
                score += value
                tags.append(f"-{signal}")

        lead.score = score
        lead.tags = tags
        return lead

    @classmethod
    def is_high_value(cls, lead: Lead) -> bool:
        """是否高价值线索"""
        return lead.score >= 5

    @classmethod
    def get_priority_reply(cls, lead: Lead) -> str:
        """根据分数生成优先级回复"""
        if lead.score >= 8:
            return "High-value lead! Respond immediately with portfolio and specific value proposition."
        elif lead.score >= 5:
            return "Good lead. Respond within 1 hour with relevant examples."
        elif lead.score >= 2:
            return "Decent lead. Respond within 4 hours."
        else:
            return "Low priority. Batch response or skip."


if __name__ == "__main__":
    # 测试
    test_leads = [
        Lead("reddit", "user1", "Need a landing page for my SaaS", "Budget is $500", ""),
        Lead("reddit", "user2", "Free website for exposure", "No budget but equity", ""),
        Lead("reddit", "user3", "Urgent MVP needed", "Need MVP in 7 days, budget $3000", ""),
    ]

    for lead in test_leads:
        LeadScorer.score(lead)
        print(f"{lead.title}")
        print(f"  Score: {lead.score} | Tags: {lead.tags}")
        print(f"  Action: {LeadScorer.get_priority_reply(lead)}")
        print()
