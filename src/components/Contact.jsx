import React from 'react';
import { WHATSAPP, MAILTO } from '../data';
import { WhatsAppIcon, Mail, Sparkle } from './icons';

export default function Contact() {
  return (
    <section id="contact" className="cb-contact">
      <div style={{ position: 'absolute', top: -40, right: '8%', opacity: 0.35 }}>
        <Sparkle size={120} fill="rgba(255,255,255,0.25)" />
      </div>
      <div className="cb-contact-inner">
        <span className="cb-eyebrow" style={{ color: '#D8C9F2' }}>Contact</span>
        <h2 style={{ fontWeight: 300, fontSize: 'clamp(34px,4.4vw,56px)', lineHeight: 1.1, letterSpacing: '-1px', color: '#fff', marginTop: 16 }}>
          Parlons de votre{' '}
          <span className="script" style={{ fontWeight: 400, fontSize: '1.1em' }}>projet</span>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: '#E7DEF7', margin: '22px auto 0', maxWidth: 520 }}>
          Chaque événement est unique. Nous serons ravis de construire avec vous une prestation adaptée à vos besoins.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 36 }}>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="cb-btn cb-btn-white">
            <WhatsAppIcon fill="#5A3E96" />
            Contact WhatsApp
          </a>
          <a href={MAILTO} className="cb-btn cb-btn-outline">
            <Mail />
            Nous écrire
          </a>
        </div>
      </div>
    </section>
  );
}
