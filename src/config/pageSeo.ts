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
    title: 'Rust Cheats 2026 | Buy Undetected ESP & Aimbot',
    description:
      'Buy undetected Rust cheats for Steam PC: player ESP, loot ESP, soft aim, no recoil and stream-proof overlays. Instant delivery at rust-cheats.net.',
  },
  '/products/rust-cheats/': {
    title: 'Shop Rust Cheat Products | Lite, Pro, Elite & Tools',
    description:
      'Browse every Rust cheat product—Elite combat suite, HWID Spoofer, UGC recovery and Skin Changer. Compare features then checkout securely.',
  },
  '/products/rust-cheats/elite/': {
    title: 'Rust Elite Cheats for Sale | ESP, Aimbot, Farm Bot',
    description:
      'Purchase Rust Elite: skeleton ESP, aimbot, no recoil, auto farm helpers, Skin Changer and priority EAC patch queue for Official and Community.',
  },
  '/products/rust-cheats/hwid-spoofer/': {
    title: 'Rust HWID Spoofer for Sale | Reset After EAC Ban',
    description:
      'Buy a Rust HWID Spoofer to rotate disk, MAC and GPU IDs after an Easy Anti-Cheat hardware flag. Includes setup guide and Discord support.',
  },
  '/products/rust-cheats/ugc/': {
    title: 'Rust UGC Recovery Tool | Steam & Ban Appeals',
    description:
      'Buy Rust UGC appeal tools for Steam holds, EAC bans and server restrictions. Document cases, track status and restore account access faster.',
  },
  '/products/rust-cheats/unlock-all/': {
    title: 'Rust Skin Changer for Sale | Unlock All Cosmetics',
    description:
      'Buy Rust Skin Changer / Unlock All to preview weapon and clothing skins locally on PC—client-side cosmetics without Steam market purchases.',
  },
  '/products/rust-cheats/utilities/': {
    title: 'Rust Cheat Utilities Compared | Spoofer, UGC, Skins',
    description:
      'Side-by-side Rust utility comparison: HWID Spoofer vs UGC recovery vs Skin Changer. Match the tool to your ban or cosmetic goal before buying.',
  },
  '/blog/': {
    title: 'Rust Cheat Buy Guides | Tier Picks & Checkout Tips',
    description:
      'Read Rust cheat buy guides: Lite vs Pro vs Elite, ESP and aimbot features, HWID after bans, and step-by-step checkout on rust-cheats.net.',
  },
  '/forum/': {
    title: 'Rust Cheats Buyer Forum | ESP, Aimbot & Spoofer Q&A',
    description:
      'Ask Rust cheat product questions before you buy—ESP setups, aimbot tiers, HWID Spoofer, wipe readiness and which plan fits your playstyle.',
  },
  '/reviews/': {
    title: 'Rust Cheats Reviews | Buyer Ratings & Feedback',
    description:
      'Read verified Rust Cheats reviews for Elite ESP and aimbot, HWID Spoofer, UGC recovery and Skin Changer—real buyer ratings before you checkout.',
  },
  '/faq/': {
    title: 'Rust Cheats FAQ | How to Buy, Tiers & EAC Risk',
    description:
      'Frequently asked questions about buying Rust cheats: supported Windows/Steam setup, Lite Pro Elite differences, ban risk and how checkout works.',
  },
  '/terms/': {
    title: 'Rust Cheats Terms of Sale | License & Refunds',
    description:
      'Legal terms for purchasing Rust cheat licenses on rust-cheats.net—delivery, personal-use limits, refunds, EAC risk and acceptable product use.',
  },
  '/privacy/': {
    title: 'Rust Cheats Privacy Policy | Data & Cookies',
    description:
      'Privacy policy for rust-cheats.net shoppers: analytics cookies, Discord support data, checkout partners and how we handle Rust product inquiries.',
  },
  '/about/': {
    title: 'About Rust Cheats Store | Undetected PC Hacks',
    description:
      'Learn about the Rust Cheats storefront: we sell undetected ESP, aimbot and utility products for Steam PC with wipe updates and Discord support.',
  },
  '/support/': {
    title: 'Rust Cheats Discord Support | Loader Help Tickets',
    description:
      'Open a Discord ticket for Rust cheat loader errors, HWID Spoofer setup, Skin Changer issues or checkout problems—include order ID and screenshots.',
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
