/**
 * Unique titles/descriptions per route — all Rust-focused, no duplicate SERP copy.
 * Titles ~50–60 chars; descriptions ~140–155 chars.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Buy Rust Cheats 2026 | Undetected ESP & Aimbot',
    description:
      'Shop undetected Rust cheats for Steam PC—player ESP, loot ESP, soft aim, no recoil and stream-proof overlays. Compare Lite, Pro and Elite at rust-cheats.net.',
  },
  '/products/rust-cheats/': {
    title: 'All Rust Cheat Products | Lite, Pro, Elite Hub',
    description:
      'Products hub for undetected rust cheats on Steam PC—compare Lite, Pro and Elite tiers plus HWID, UGC and utilities. Module lists, buy guides and checkout.',
  },
  '/products/rust-cheats/elite/': {
    title: 'Rust Elite Cheats for Sale | ESP, Aimbot, Farm Bot',
    description:
      'Purchase Elite tier: skeleton ESP, aimbot, no recoil, auto farm helpers, Skin Changer and priority EAC patch queue for Official and Community servers.',
  },
  '/products/rust-cheats/hwid-spoofer/': {
    title: 'Rust HWID Spoofer for Sale | Reset After EAC Ban',
    description:
      'Buy a Rust HWID spoofer to rotate disk, MAC and GPU IDs after an Easy Anti-Cheat hardware flag. Portal setup guide and Discord support included.',
  },
  '/products/rust-cheats/ugc/': {
    title: 'Rust UGC Recovery Tool | Steam & Ban Appeals',
    description:
      'UGC appeal workspace for Steam holds, EAC bans and server restrictions—document cases, track status and rebuild account access with structured workflows.',
  },
  '/products/rust-cheats/unlock-all/': {
    title: 'Unlock All & Skin Changer | Local Cosmetics',
    description:
      'Unlock All and Skin Changer for local weapon and clothing previews on Steam PC—client-side cosmetics without market purchases; standalone or with Elite tier.',
  },
  '/products/rust-cheats/utilities/': {
    title: 'Compare Cheat Utilities | HWID Spoofer & UGC',
    description:
      'Cheat utility comparison for Steam PC—HWID Spoofer vs UGC recovery use cases, feature lists and product pages. Skin Changer details live on Unlock All.',
  },
  '/blog/': {
    title: 'Buy Guides & Checkout Tips | Lite, Pro, Elite',
    description:
      'Step-by-step buy guides and checkout tips—tier picks, ESP and aimbot modules, HWID recovery after bans, and secure payment flow at rust-cheats.net.',
  },
  '/forum/': {
    title: 'Buyer Forum Q&A | ESP, Radar & Spoofer Help',
    description:
      'Rust buyer forum: ESP and radar setup Q&A from our guides—overlay tuning, HWID tools, wipe readiness and tier picks before checkout.',
  },
  '/reviews/': {
    title: 'Rust Cheats Reviews | Buyer Ratings & Feedback',
    description:
      'Read verified Rust Cheats reviews for Elite ESP and aimbot, HWID Spoofer, UGC recovery and Skin Changer—real buyer ratings before you checkout.',
  },
  '/faq/': {
    title: 'Buying FAQ | Rust Tiers, Checkout & EAC Risk',
    description:
      'FAQ before you buy: Windows and Steam setup, Lite vs Pro vs Elite, ban risk, checkout delivery and HWID resets—clear answers on rust-cheats.net.',
  },
  '/terms/': {
    title: 'Rust Cheats Terms of Sale | License & Refunds',
    description:
      'Legal terms for purchasing Rust cheat licenses on rust-cheats.net—delivery, personal-use limits, refunds, EAC risk and acceptable product use.',
  },
  '/about/': {
    title: 'About Our Cheats Store | Steam PC Tools',
    description:
      'Meet the rust-cheats.net cheats store team—tiers, utilities, wipe-day loader updates and Discord help after checkout on Steam PC.',
  },
  '/support/': {
    title: 'Rust Cheats Discord Support | Loader Help Tickets',
    description:
      'Discord support for loader errors, HWID Spoofer setup and checkout—open a ticket with your order ID, issue type and screenshots for fast help.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Data, Cookies & Your Rights',
    description:
      'Privacy policy for rust-cheats.net—cookies, analytics, Discord ticket data, checkout partners, retention and your rights when browsing or purchasing.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
