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
    title: 'Shop Rust Cheat Products | Lite, Pro, Elite & Tools',
    description:
      'Browse Rust cheat products and utilities—compare Lite, Pro and Elite tiers plus HWID Spoofer, UGC and Skin Changer. Module lists, guides and secure checkout.',
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
    title: 'Rust Skin Changer for Sale | Unlock All Cosmetics',
    description:
      'Skin Changer and Unlock All for local weapon and clothing previews on PC—client-side Rust cosmetics without Steam market purchases; standalone or with Elite.',
  },
  '/products/rust-cheats/utilities/': {
    title: 'Rust Cheat Utilities Compared | Spoofer, UGC, Skins',
    description:
      'Compare Rust HWID Spoofer, UGC appeal tools and Skin Changer side by side. See best use cases, feature lists and product pages before you buy at rust-cheats.net.',
  },
  '/blog/': {
    title: 'Rust Cheat Buy Guides | Tier Picks & Checkout Tips',
    description:
      'Step-by-step buy guides: Lite vs Pro vs Elite picks, ESP and aimbot modules, HWID recovery after bans, and secure checkout tips at rust-cheats.net.',
  },
  '/forum/': {
    title: 'Rust Buyer Forum | ESP, Aimbot & Spoofer Q&A',
    description:
      'Pre-purchase Q&A from our guides—ESP setups, aimbot tiers, HWID tools, wipe readiness and which plan fits your playstyle before checkout.',
  },
  '/reviews/': {
    title: 'Rust Cheats Reviews | Buyer Ratings & Feedback',
    description:
      'Read verified Rust Cheats reviews for Elite ESP and aimbot, HWID Spoofer, UGC recovery and Skin Changer—real buyer ratings before you checkout.',
  },
  '/faq/': {
    title: 'Buying FAQ | Rust Tiers, Checkout & EAC Risk',
    description:
      'Rust cheats FAQ: Windows and Steam setup, Lite vs Pro vs Elite differences, ban risk, checkout delivery and HWID resets—answers before you pay.',
  },
  '/terms/': {
    title: 'Rust Cheats Terms of Sale | License & Refunds',
    description:
      'Legal terms for purchasing Rust cheat licenses on rust-cheats.net—delivery, personal-use limits, refunds, EAC risk and acceptable product use.',
  },
  '/about/': {
    title: 'About Rust Cheats Store | Undetected PC Hacks',
    description:
      'Meet the rust-cheats.net store team—what cheat tiers and utilities we sell, how wipe-day loader updates work, and Discord help after checkout on Steam PC.',
  },
  '/support/': {
    title: 'Rust Cheats Discord Support | Loader Help Tickets',
    description:
      'Discord support for loader errors, HWID Spoofer setup and checkout—open a ticket with your order ID, issue type and screenshots for fast help.',
  },
  '/privacy/': {
    title: 'Rust Cheats Privacy Policy | Data & Cookies',
    description:
      'Privacy policy for rust-cheats.net: analytics cookies, checkout partners, Discord ticket data, retention and your rights when browsing or buying Rust cheat products.',
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
