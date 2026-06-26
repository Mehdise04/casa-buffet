import React from 'react';
import { WHATSAPP, MAPS, INSTAGRAM, MAILTO } from '../data';
import { WhatsAppIcon, Pin, Star, Mail } from './icons';

export default function Footer() {
  return (
    <footer className="cb-footer">
      <div className="cb-container cb-footer-grid">
        <div>
          <div className="cb-footer-name">CasaBuffet</div>
          <div className="cb-footer-sub">E V E N T S</div>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: '#9D93B8', maxWidth: 300 }}>
            Buffets &amp; douceurs qui réchauffent le cœur. Des prestations élégantes pour vos événements privés et professionnels.
          </p>
        </div>

        <div>
          <div className="cb-footer-head">Contact</div>
          <div className="cb-footer-col">
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Pin size={16} stroke="#A18FD0" />Casablanca, Maroc
            </span>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="cb-flink">
              <WhatsAppIcon size={16} fill="#A18FD0" />WhatsApp
            </a>
            <a href={MAILTO} className="cb-flink">
              <Mail size={16} stroke="#A18FD0" />Email
            </a>
          </div>
        </div>

        <div>
          <div className="cb-footer-head">Suivez-nous</div>
          <div className="cb-footer-col">
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Star size={16} /><strong style={{ color: '#fff' }}>5 / 5</strong> sur Google
            </span>
            <a href={MAPS} target="_blank" rel="noreferrer" className="cb-flink">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A18FD0" strokeWidth="2"><path d="M9 20l-6-3V4l6 3 6-3 6 3v13l-6-3-6 3z" /><path d="M9 7v13M15 4v13" /></svg>
              Voir sur Google Maps
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="cb-flink">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A18FD0" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="#A18FD0" stroke="none" /></svg>
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="cb-footer-bottom">
        <span>© 2026 CasaBuffet Events. Tous droits réservés.</span>
        <span>Buffets &amp; bonheur · Casablanca</span>
      </div>
    </footer>
  );
}
