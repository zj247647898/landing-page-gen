// Payment configuration
// To enable payments, set these environment variables or replace the URLs directly.
//
// Quick setup options:
// 1. LemonSqueezy (recommended - supports Alipay/WeChat/Credit Card globally)
//    Sign up at https://lemonsqueezy.com → Create products → Copy payment links
// 2. Gumroad (simple, supports PayPal)
//    Sign up at https://gumroad.com → Create products → Copy payment links
// 3. Ko-fi (free, 0% fees, supports PayPal)
//    Sign up at https://ko-fi.com → Create shop items → Copy links

export const PAYMENT_CONFIG = {
  pro: {
    price: 29,
    currency: 'USD',
    // Replace with your actual payment link after signing up
    paymentUrl: process.env.NEXT_PUBLIC_PAYMENT_PRO_URL || 'mailto:247647898@qq.com?subject=Pro%20Plan%20Purchase%20($29)&body=I%20want%20to%20purchase%20the%20Pro%20Plan%20for%20$29.',
    label: 'Buy Pro — $29',
  },
  agency: {
    price: 99,
    currency: 'USD',
    paymentUrl: process.env.NEXT_PUBLIC_PAYMENT_AGENCY_URL || 'mailto:247647898@qq.com?subject=Agency%20Plan%20Purchase%20($99)&body=I%20want%20to%20purchase%20the%20Agency%20Plan%20for%20$99.',
    label: 'Buy Agency — $99',
  },
  toolkitBundle: {
    price: 149,
    currency: 'USD',
    paymentUrl: process.env.NEXT_PUBLIC_PAYMENT_TOOLKIT_URL || 'mailto:247647898@qq.com?subject=Developer%20Toolkit%20Bundle%20($149)&body=I%20want%20to%20purchase%20the%20Developer%20Toolkit%20Bundle%20for%20$149.',
    label: 'Buy Bundle — $149',
  },
  // Service packages
  serviceLandingPage: {
    price: 499,
    currency: 'USD',
    paymentUrl: process.env.NEXT_PUBLIC_PAYMENT_SVC_LP_URL || 'mailto:247647898@qq.com?subject=Landing%20Page%20Service%20($499)&body=I%20want%20to%20hire%20you%20for%20a%20custom%20Landing%20Page%20($499).',
    label: 'Get Started — $499',
  },
  serviceMVP: {
    price: 1999,
    currency: 'USD',
    paymentUrl: process.env.NEXT_PUBLIC_PAYMENT_SVC_MVP_URL || 'mailto:247647898@qq.com?subject=MVP%20Development%20($1,999)&body=I%20want%20to%20hire%20you%20for%20MVP%20Development%20($1,999).',
    label: 'Get Started — $1,999',
  },
};

// Activation: After purchase, user gets a license key.
// Set this in localStorage: localStorage.setItem('lpgen_pro', 'true')
// For production, validate license keys server-side.
export function isProUser(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('lpgen_pro') === 'true';
}

export function activatePro(key: string): boolean {
  // In production, validate against your backend
  // For now, accept any non-empty key
  if (key && key.length > 5) {
    localStorage.setItem('lpgen_pro', 'true');
    return true;
  }
  return false;
}
