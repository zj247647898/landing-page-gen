import licenses from './licenses.json';

// Payment configuration
// To enable payments, set these environment variables or replace the URLs directly.
//
// Quick setup options:
// 1. LemonSqueezy (recommended - supports Alipay/WeChat/Credit Card globally)
//    Sign up at https://lemonsqueezy.com → Create products → Copy payment links
// 2. Gumroad (simple, supports PayPal)
//    Sign up at https://gumroad.com → Create products → Copy payment links

export const PAYMENT_CONFIG = {
  pro: {
    price: 29,
    currency: 'USD',
    paymentUrl: 'mailto:247647898@qq.com?subject=Pro%20Plan%20Purchase%20($29)&body=I%20want%20to%20purchase%20the%20Pro%20Plan%20for%20$29.',
    label: 'Buy Pro — $29',
  },
  agency: {
    price: 99,
    currency: 'USD',
    paymentUrl: 'mailto:247647898@qq.com?subject=Agency%20Plan%20Purchase%20($99)&body=I%20want%20to%20purchase%20the%20Agency%20Plan%20for%20$99.',
    label: 'Buy Agency — $99',
  },
  toolkitBundle: {
    price: 149,
    currency: 'USD',
    paymentUrl: 'mailto:247647898@qq.com?subject=Developer%20Toolkit%20Bundle%20($149)&body=I%20want%20to%20purchase%20the%20Developer%20Toolkit%20Bundle%20for%20$149.',
    label: 'Buy Bundle — $149',
  },
  serviceLandingPage: {
    price: 499,
    currency: 'USD',
    paymentUrl: 'mailto:247647898@qq.com?subject=Landing%20Page%20Service%20($499)&body=I%20want%20to%20hire%20you%20for%20a%20custom%20Landing%20Page%20($499).',
    label: 'Get Started — $499',
  },
  serviceMVP: {
    price: 1999,
    currency: 'USD',
    paymentUrl: 'mailto:247647898@qq.com?subject=MVP%20Development%20($1,999)&body=I%20want%20to%20hire%20you%20for%20MVP%20Development%20($1,999).',
    label: 'Get Started — $1,999',
  },
};

// Valid license keys (200 pre-generated)
const VALID_LICENSES = new Set(licenses);

// Track used licenses in localStorage
const USED_KEY = 'lpgen_used_licenses';

function getUsedLicenses(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(USED_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

function markLicenseUsed(code: string): void {
  if (typeof window === 'undefined') return;
  const used = getUsedLicenses();
  used.add(code);
  localStorage.setItem(USED_KEY, JSON.stringify([...used]));
}

export function isProUser(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('lpgen_pro') === 'true';
}

export function activatePro(key: string): boolean {
  const normalized = key.trim().toUpperCase();
  if (VALID_LICENSES.has(normalized)) {
    const used = getUsedLicenses();
    if (used.has(normalized)) {
      // Already used, but allow re-activation for same user
      localStorage.setItem('lpgen_pro', 'true');
      return true;
    }
    markLicenseUsed(normalized);
    localStorage.setItem('lpgen_pro', 'true');
    return true;
  }
  return false;
}

// For the auto-activate flow: validate a license key and activate
export function activateWithEmail(code: string): boolean {
  const normalized = code.trim().toUpperCase();
  if (VALID_LICENSES.has(normalized)) {
    markLicenseUsed(normalized);
    localStorage.setItem('lpgen_pro', 'true');
    return true;
  }
  return false;
}
