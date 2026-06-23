import React from 'react';

export function WhatsAppIcon({ size = 17, fill = '#fff' }) {
  // Solid WhatsApp mark: filled bubble with the handset as a clean cutout.
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm5.78 14.16c-.24.68-1.42 1.31-1.96 1.36-.5.05-1.13.21-3.66-.78-3.08-1.21-5.04-4.34-5.19-4.54-.15-.2-1.24-1.65-1.24-3.15 0-1.5.79-2.24 1.07-2.55.28-.31.61-.38.81-.38.2 0 .41 0 .58.01.19.01.44-.07.69.53.24.59.83 2.04.9 2.19.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.39-.45.53-.15.15-.31.31-.13.61.18.3.79 1.31 1.7 2.12 1.17 1.05 2.16 1.37 2.46 1.52.3.15.48.13.66-.08.18-.2.76-.89.96-1.19.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.58.35.07.13.07.74-.17 1.42Z"
      />
    </svg>
  );
}

export function Sparkle({ size = 13, fill = '#C9B48A' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <path d="M12 0c.6 6 5.4 10.8 12 12-6.6 1.2-11.4 6-12 12-.6-6-5.4-10.8-12-12C6.6 10.8 11.4 6 12 0z" />
    </svg>
  );
}

export function Arrow({ size = 17, stroke = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Pin({ size = 17, stroke = '#8B73C4' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Star({ size = 16, fill = '#C9B48A' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <path d="M12 2l2.6 6.3 6.8.5-5.2 4.4 1.7 6.6L12 16.8 6.1 20.3l1.7-6.6L2.6 8.8l6.8-.5z" />
    </svg>
  );
}

export function Mail({ size = 17, stroke = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 6 10-6" />
    </svg>
  );
}

export function Check({ size = 16, stroke = '#6A48AC' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function Heart({ size = 20, stroke = '#6A48AC' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2">
      <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
    </svg>
  );
}
