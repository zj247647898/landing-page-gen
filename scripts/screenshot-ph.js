#!/usr/bin/env node
/**
 * Product Hunt Screenshot Generator
 *
 * Prerequisites:
 *   npm install puppeteer
 *
 * Usage:
 *   node scripts/screenshot-ph.js
 *
 * This script opens LP Gen pages in a headless browser
 * and captures screenshots for Product Hunt gallery.
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://zj247647898.github.io/landing-page-gen';
const OUTPUT_DIR = path.join(__dirname, '..', 'screenshots');

const screenshots = [
  {
    name: '01-hero-homepage',
    path: '/',
    viewport: { width: 1440, height: 900 },
    fullPage: false,
    waitAfterLoad: 2000,
  },
  {
    name: '02-template-grid',
    path: '/#templates',
    viewport: { width: 1440, height: 900 },
    fullPage: false,
    waitAfterLoad: 2000,
    scrollToSelector: '#templates',
  },
  {
    name: '03-editor-saas',
    path: '/editor/saas-modern',
    viewport: { width: 1440, height: 900 },
    fullPage: false,
    waitAfterLoad: 3000,
  },
  {
    name: '04-editor-restaurant',
    path: '/editor/restaurant',
    viewport: { width: 1440, height: 900 },
    fullPage: false,
    waitAfterLoad: 3000,
  },
  {
    name: '05-free-tools',
    path: '/free-tools',
    viewport: { width: 1440, height: 900 },
    fullPage: false,
    waitAfterLoad: 2000,
  },
  {
    name: '06-qr-code-tool',
    path: '/free-tools/qr-code',
    viewport: { width: 1440, height: 900 },
    fullPage: false,
    waitAfterLoad: 3000,
  },
  {
    name: '07-pricing',
    path: '/pricing',
    viewport: { width: 1440, height: 900 },
    fullPage: false,
    waitAfterLoad: 2000,
  },
  {
    name: '08-mobile-editor',
    path: '/editor/saas-modern',
    viewport: { width: 375, height: 812 },
    fullPage: true,
    waitAfterLoad: 3000,
    isMobile: true,
  },
  {
    name: '09-15-templates-overview',
    path: '/html-templates',
    viewport: { width: 1440, height: 900 },
    fullPage: false,
    waitAfterLoad: 2000,
  },
  {
    name: '10-startup-seo-page',
    path: '/startup-landing-page',
    viewport: { width: 1440, height: 900 },
    fullPage: false,
    waitAfterLoad: 2000,
  },
];

async function takeScreenshots() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  console.log(`Taking ${screenshots.length} screenshots...\n`);

  for (const shot of screenshots) {
    const page = await browser.newPage();
    await page.setViewport(shot.viewport);

    if (shot.isMobile) {
      await page.setUserAgent(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
      );
    }

    const url = `${BASE_URL}${shot.path}`;
    console.log(`Capturing: ${shot.name} (${url})`);

    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      await new Promise((r) => setTimeout(r, shot.waitAfterLoad));

      if (shot.scrollToSelector) {
        await page.evaluate((sel) => {
          const el = document.querySelector(sel);
          if (el) el.scrollIntoView({ behavior: 'instant' });
        }, shot.scrollToSelector);
        await new Promise((r) => setTimeout(r, 500));
      }

      const filePath = path.join(OUTPUT_DIR, `${shot.name}.png`);
      await page.screenshot({
        path: filePath,
        fullPage: shot.fullPage,
      });
      console.log(`  ✓ Saved: ${filePath}`);
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    }

    await page.close();
  }

  await browser.close();
  console.log(`\nDone! Screenshots saved to ${OUTPUT_DIR}/`);
}

takeScreenshots().catch(console.error);
