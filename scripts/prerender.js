// Turns the single-page app into real HTML pages at build time, so search
// engines and link previews see the content without running JavaScript.
// For each route in src/seo.js it writes dist/<route>.html with that page's
// head tags and rendered markup; the browser then hydrates it as usual.
/* global process -- runs in Node at build time */
import { readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function headTags(h) {
  return [
    `<title>${esc(h.title)}</title>`,
    `<meta name="description" content="${esc(h.description)}" />`,
    `<link rel="canonical" href="${h.url}" />`,
    `<meta property="og:title" content="${esc(h.title)}" />`,
    `<meta property="og:description" content="${esc(h.description)}" />`,
    `<meta property="og:url" content="${h.url}" />`,
    `<meta property="og:image" content="${h.image}" />`,
    `<meta name="twitter:title" content="${esc(h.title)}" />`,
    `<meta name="twitter:description" content="${esc(h.description)}" />`,
    `<meta name="twitter:image" content="${h.image}" />`,
    ...h.jsonLd.map(
      (d) =>
        `<script type="application/ld+json">${JSON.stringify(d).replace(/</g, '\\u003c')}</script>`,
    ),
  ].join('\n  ');
}

export async function prerender({ root = process.cwd(), outDir = 'dist', ssrDir = 'dist-ssr' } = {}) {
  const dist = path.resolve(root, outDir);
  const template = await readFile(path.join(dist, 'index.html'), 'utf8');
  if (!template.includes('<!--app-head-->') || !template.includes('<div id="root"></div>')) {
    throw new Error('prerender: index.html needs <!--app-head--> and an empty <div id="root"></div>');
  }

  const entry = pathToFileURL(path.resolve(root, ssrDir, 'entry-server.js')).href;
  const { render, ROUTES, routeHead, sitemapXml, robotsTxt } = await import(entry);

  for (const route of ROUTES) {
    const html = template
      .replace('<!--app-head-->', headTags(routeHead(route)))
      .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
    const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
    await writeFile(path.join(dist, file), html);
  }

  await writeFile(path.join(dist, 'sitemap.xml'), sitemapXml(new Date().toISOString().slice(0, 10)));
  await writeFile(path.join(dist, 'robots.txt'), robotsTxt());
  await rm(path.resolve(root, ssrDir), { recursive: true, force: true });
  return ROUTES;
}
