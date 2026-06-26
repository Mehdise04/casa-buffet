// Shared site data — real CasaBuffet contact channels and assets.
export const WHATSAPP = 'https://wa.me/212701145101';
export const PHONE_DISPLAY = '+212 701-145101';
export const EMAIL = 'casa.buffet001@gmail.com';
export const MAILTO = `mailto:${EMAIL}`;
export const INSTAGRAM = 'https://www.instagram.com/casabuffett/';
export const FACEBOOK = 'https://web.facebook.com/casa.buffet.2025';
export const TIKTOK = 'https://www.tiktok.com/@casa.buffett';
export const MAPS = 'https://share.google/7QuDKfAiqNX4AGWiG';

// 17 real gallery photos live in /public/images. The design lays out more
// image slots than we have photos, so we cycle through them.
export const GALLERY_COUNT = 17;
export const img = (n) => `/images/gallery-${((n - 1) % GALLERY_COUNT) + 1}.jpeg`;
