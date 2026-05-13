import licenseHashes from './license-hashes.json';

// Track used licenses in localStorage
const USED_KEY = 'lpgen_used_licenses';
const PRO_KEY = 'lpgen_pro';

function getUsedLicenses(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(USED_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

function markLicenseUsed(hash: string): void {
  if (typeof window === 'undefined') return;
  const used = getUsedLicenses();
  used.add(hash);
  localStorage.setItem(USED_KEY, JSON.stringify([...used]));
}

export function isProUser(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(PRO_KEY) === 'true';
}

// Hash a license key using SHA-256 (Web Crypto API, works in browser)
async function hashLicense(key: string): Promise<string> {
  const normalized = key.trim().toUpperCase();
  const data = new TextEncoder().encode(normalized + '_lpgen_2024');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

const VALID_HASHES = new Set(licenseHashes);

export async function activatePro(key: string): Promise<boolean> {
  const hash = await hashLicense(key);
  if (VALID_HASHES.has(hash)) {
    markLicenseUsed(hash);
    localStorage.setItem(PRO_KEY, 'true');
    return true;
  }
  return false;
}
