import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const source = path.join(dist, 'sitemap-0.xml');
const siteOrigin = 'https://rust-cheats.net';

if (!fs.existsSync(source)) {
  console.error('finalize-sitemap: dist/sitemap-0.xml not found — run astro build first.');
  process.exit(1);
}

const raw = fs.readFileSync(source, 'utf8');
const urlBlocks = raw.match(/<url>[\s\S]*?<\/url>/g) ?? [];

if (urlBlocks.length === 0) {
  console.error('finalize-sitemap: sitemap-0.xml contains no URLs.');
  process.exit(1);
}

const urlsetOpen = raw.match(/<urlset[^>]*>/)?.[0] ?? '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

function formatUrlset(xml) {
  return xml
    .replace(/^<\?xml[^?]*\?>/, '<?xml version="1.0" encoding="UTF-8"?>\n')
    .replace(/<urlset([^>]*)>/, '<urlset$1>\n')
    .replace(/<\/urlset>/, '\n</urlset>\n')
    .replace(/<url>/g, '  <url>\n')
    .replace(/<\/url>/g, '\n  </url>\n')
    .replace(/<loc>/g, '    <loc>')
    .replace(/<\/loc>/g, '</loc>\n')
    .replace(/<lastmod>/g, '    <lastmod>')
    .replace(/<\/lastmod>/g, '</lastmod>\n')
    .replace(/<changefreq>/g, '    <changefreq>')
    .replace(/<\/changefreq>/g, '</changefreq>\n')
    .replace(/<priority>/g, '    <priority>')
    .replace(/<\/priority>/g, '</priority>\n');
}

function locFromBlock(block) {
  const match = block.match(/<loc>([^<]+)<\/loc>/);
  return match?.[1] ?? '';
}

function pathnameFromLoc(loc) {
  try {
    return new URL(loc).pathname;
  } catch {
    return '';
  }
}

function buildUrlset(blocks) {
  const inner = blocks.join('\n');
  return formatUrlset(`<?xml version="1.0" encoding="UTF-8"?>\n${urlsetOpen}\n${inner}\n</urlset>`);
}

function matchesSection(pathname, section) {
  return pathname === `/${section}/` || pathname.startsWith(`/${section}/`);
}

const blogBlocks = urlBlocks.filter((block) => matchesSection(pathnameFromLoc(locFromBlock(block)), 'blog'));
const forumBlocks = urlBlocks.filter((block) => matchesSection(pathnameFromLoc(locFromBlock(block)), 'forum'));
const pageBlocks = urlBlocks.filter((block) => {
  const pathname = pathnameFromLoc(locFromBlock(block));
  return !matchesSection(pathname, 'blog') && !matchesSection(pathname, 'forum');
});

const lastmodDate = new Date().toISOString().slice(0, 10);

const fullFormatted = buildUrlset(urlBlocks);
fs.writeFileSync(path.join(dist, 'sitemap.xml'), fullFormatted, 'utf8');
fs.writeFileSync(path.join(dist, 'sitemap-0.xml'), fullFormatted, 'utf8');
fs.writeFileSync(path.join(dist, 'sitemap-pages.xml'), buildUrlset(pageBlocks), 'utf8');
fs.writeFileSync(path.join(dist, 'sitemap-blog.xml'), buildUrlset(blogBlocks), 'utf8');
fs.writeFileSync(path.join(dist, 'sitemap-forum.xml'), buildUrlset(forumBlocks), 'utf8');

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteOrigin}/sitemap-pages.xml</loc>
    <lastmod>${lastmodDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteOrigin}/sitemap-blog.xml</loc>
    <lastmod>${lastmodDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteOrigin}/sitemap-forum.xml</loc>
    <lastmod>${lastmodDate}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(dist, 'sitemap-index.xml'), indexXml, 'utf8');

console.log(
  `Sitemap finalized: ${urlBlocks.length} URLs → sitemap.xml (${pageBlocks.length} pages, ${blogBlocks.length} blog, ${forumBlocks.length} forum)`,
);
