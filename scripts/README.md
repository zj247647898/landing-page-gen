# 自动化获客脚本

## 脚本说明

### reddit_monitor.py
监控 Reddit 指定 subreddit 中的需求帖，自动识别潜在客户。

**使用方法：**
```bash
python3 reddit_monitor.py
```

**监控的社区：**
- r/forhire
- r/slavelabour
- r/webdev
- r/SaaS
- r/startups
- r/entrepreneur
- r/sideproject
- r/indiehackers

### twitter_monitor.py
Twitter/X 需求监控框架（需要 API 或浏览器自动化）。

### lead_scorer.py
线索评分系统，根据帖子内容自动评估客户价值。

## 部署方式

### 方式1：本地运行
```bash
# 安装依赖
pip3 install requests

# 运行监控
python3 scripts/reddit_monitor.py
```

### 方式2：服务器后台运行
```bash
# 使用 nohup 后台运行
nohup python3 scripts/reddit_monitor.py > logs/reddit.log 2>&1 &

# 查看日志
tail -f logs/reddit.log
```

### 方式3：定时任务（crontab）
```bash
# 每10分钟运行一次
*/10 * * * * cd /path/to/project && python3 scripts/reddit_monitor.py >> logs/reddit.log 2>&1
```

## 输出示例
```
============================================================
Reddit Lead Monitor Started
Subreddits: 8
Check interval: 10 minutes
============================================================

[14:30] Found 2 new leads:
  r/forhire | Need a landing page for my SaaS startup [Budget: $500]
  → https://reddit.com/r/forhire/comments/xxx

  r/startups | Looking for MVP developer, 2 week timeline
  → https://reddit.com/r/startups/comments/yyy
```

## 注意事项
1. Reddit API 有速率限制，不要过于频繁请求
2. 回复时要遵守社区规则，避免被当作垃圾信息
3. 建议先手动回复建立信誉，再逐步自动化
