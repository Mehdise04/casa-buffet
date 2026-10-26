// Pages, service content and search-engine metadata. Used by the app (to
// pick and render a page) and by the build-time prerender (head tags,
// structured data, sitemap). Copy here reuses wording already on the site.
import { EMAIL, FACEBOOK, INSTAGRAM, TIKTOK } from './data';

export const SITE_URL = 'https://www.casabuffet.com';
export const SITE_NAME = 'CasaBuffet Events';
const PHONE_E164 = '+212701145101';
const BUSINESS_ID = `${SITE_URL}/#business`;

const HOME = {
  title: 'CasaBuffet — Traiteur & buffets événementiels à Casablanca',
  description:
    'CasaBuffet, traiteur événementiel à Casablanca : buffets élégants et coffrets sur mesure pour fiançailles, baby showers, anniversaires, soutenances et événements professionnels. Noté 5/5 sur Google.',
  ogImage: '/og-image.jpg',
};

/**
 * One page per service. `set` is the photo set in galleryData.js; `homeAnchor`
 * is the home-page section the service lives in.
 */
export const SERVICES = [
  {
    slug: 'fiancailles',
    set: 'engagement',
    name: 'Fiançailles',
    homeAnchor: 'prives',
    group: 'Événements privés',
    h1: 'Traiteur pour vos fiançailles à Casablanca',
    title: 'Traiteur fiançailles à Casablanca — Buffets & coffrets',
    description:
      'Buffets raffinés et coffrets cadeaux sur mesure pour vos fiançailles à Casablanca. Une prestation élégante, personnalisée et pensée dans les moindres détails.',
    intro: [
      "Des buffets raffinés et des coffrets cadeaux conçus pour accompagner l'un des plus beaux moments de votre vie.",
    ],
  },
  {
    slug: 'soutenances',
    set: 'soutenance',
    name: 'Soutenances',
    homeAnchor: 'prives',
    group: 'Événements privés',
    h1: 'Buffet de soutenance à Casablanca',
    title: 'Buffet de soutenance à Casablanca',
    description:
      'Célébrez votre soutenance à Casablanca avec un buffet convivial et élégant. CasaBuffet conçoit une prestation sur mesure, de la présentation au service.',
    intro: ['Célébrez vos réussites dans une ambiance conviviale et élégante.'],
  },
  {
    slug: 'baby-shower',
    set: 'babyshower',
    name: 'Baby Shower & Naissances',
    homeAnchor: 'prives',
    group: 'Événements privés',
    h1: 'Buffet baby shower & naissance à Casablanca',
    title: 'Buffet baby shower & naissance à Casablanca',
    description:
      'Buffets et douceurs pour baby showers et naissances à Casablanca. Des prestations délicates et personnalisées pour accueillir les moments les plus précieux.',
    intro: [
      'Des prestations adaptées et délicates pour accueillir les moments les plus précieux.',
    ],
  },
  {
    slug: 'anniversaires',
    set: 'anniversaire',
    name: 'Anniversaires',
    homeAnchor: 'prives',
    group: 'Événements privés',
    h1: "Buffet d'anniversaire à Casablanca",
    title: "Buffet d'anniversaire à Casablanca",
    description:
      "Buffets d'anniversaire, réunions familiales et célébrations sur mesure à Casablanca, pour petits et grands. Une présentation élégante et soignée.",
    intro: [
      'Anniversaires, réunions familiales et célébrations sur mesure, pour petits et grands.',
    ],
  },
  {
    slug: 'evenements-professionnels',
    set: 'professional',
    name: 'Événements professionnels',
    homeAnchor: 'pro',
    group: 'Événements professionnels',
    h1: 'Traiteur pour événements professionnels à Casablanca',
    title: 'Traiteur événements professionnels à Casablanca',
    description:
      "Petit-déjeuner d'affaires, pause-café, cocktail, séminaire ou lancement de produit à Casablanca : des prestations élégantes et flexibles pour les entreprises.",
    intro: [
      'Parce que votre image mérite une prestation à la hauteur.',
      "Réunion de direction, séminaire, lancement de produit, formation ou réception client : chaque événement professionnel reflète l'image de votre organisation. CasaBuffet accompagne les entreprises avec des prestations élégantes, flexibles et adaptées à leurs exigences.",
    ],
    formats: [
      "Petit-déjeuner d'affaires",
      'Pause-café',
      'Cocktail déjeunatoire',
      'Cocktail dînatoire',
      'Séminaires et formations',
      'Lancements de produits',
    ],
  },
];

/** Shared closing paragraph for every service page (from "Pourquoi CasaBuffet"). */
export const SERVICE_PROMISE =
  "De la conception à la réalisation, nous vous accompagnons à chaque étape : une approche personnalisée, une sélection rigoureuse des produits, une exécution soignée et des buffets conçus pour séduire autant les yeux que les papilles.";

export const servicePath = (s) => `/${s.slug}`;

export const ROUTES = ['/', ...SERVICES.map(servicePath)];

/** "/fiancailles/", "/fiancailles.html" -> "/fiancailles". Unknown paths fall back to "/". */
export function normalizePath(pathname) {
  const p = (pathname || '/').replace(/\.html$/, '').replace(/\/+$/, '') || '/';
  return ROUTES.includes(p) ? p : '/';
}

export const findService = (path) => SERVICES.find((s) => servicePath(s) === path);

/* ───────────── Head tags and structured data, used at build time ───────────── */

const abs = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

const business = {
  '@type': 'Caterer',
  '@id': BUSINESS_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  telephone: PHONE_E164,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Casablanca',
    addressRegion: 'Casablanca-Settat',
    addressCountry: 'MA',
  },
};

function homeJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      ...business,
      description:
        'Traiteur événementiel à Casablanca : buffets et coffrets sur mesure pour fiançailles, baby showers, anniversaires, soutenances et événements professionnels.',
      image: abs(HOME.ogImage),
      logo: `${SITE_URL}/casabuffet%20logo.png`,
      priceRange: '$$',
      servesCuisine: 'Marocaine',
      areaServed: { '@type': 'City', name: 'Casablanca' },
      sameAs: [INSTAGRAM, FACEBOOK, TIKTOK],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Prestations CasaBuffet',
        itemListElement: SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.name, url: abs(servicePath(s)) },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      inLanguage: 'fr',
      publisher: { '@id': BUSINESS_ID },
    },
  ];
}

function serviceJsonLd(s) {
  const url = abs(servicePath(s));
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: s.h1,
      serviceType: s.name,
      description: s.description,
      url,
      image: abs(`/og/${s.slug}.jpg`),
      areaServed: { '@type': 'City', name: 'Casablanca' },
      provider: business,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: s.name, item: url },
      ],
    },
  ];
}

/** Everything that differs per page in <head>. */
export function routeHead(path) {
  const s = findService(path);
  if (!s) {
    return {
      title: HOME.title,
      description: HOME.description,
      url: abs('/'),
      image: abs(HOME.ogImage),
      jsonLd: homeJsonLd(),
    };
  }
  return {
    title: `${s.title} | CasaBuffet`,
    description: s.description,
    url: abs(servicePath(s)),
    image: abs(`/og/${s.slug}.jpg`),
    jsonLd: serviceJsonLd(s),
  };
}

export function sitemapXml(lastmod) {
  const urls = ROUTES.map(
    (p) => `  <url>
    <loc>${abs(p)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  ).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function robotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}
