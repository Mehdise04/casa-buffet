import React, { useState } from 'react';
import { WHATSAPP } from '../data';
import { WhatsAppIcon, Sparkle } from './icons';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setLoading(false);
        setStatus('success');
        setFormData({ user_name: '', user_email: '', message: '' });
        setTimeout(() => setStatus(null), 6000);
      } else {
        console.error('Server error:', data);
        setLoading(false);
        setStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setLoading(false);
      setStatus('error');
    }
  };

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
          Chaque événement est unique. Laissez-nous un message ou écrivez-nous directement sur WhatsApp.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 28 }}>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="cb-btn cb-btn-white">
            <WhatsAppIcon fill="#5A3E96" />
            Contact WhatsApp
          </a>
        </div>

        <form className="cb-form-card" onSubmit={sendEmail}>
          <div className="cb-form-row">
            <div className="cb-field">
              <label htmlFor="user_name">Nom complet</label>
              <input
                className="cb-input" type="text" id="user_name" name="user_name" required
                value={formData.user_name} onChange={handleChange} placeholder="Votre nom"
              />
            </div>
            <div className="cb-field">
              <label htmlFor="user_email">Email</label>
              <input
                className="cb-input" type="email" id="user_email" name="user_email" required
                value={formData.user_email} onChange={handleChange} placeholder="votre@email.com"
              />
            </div>
          </div>
          <div className="cb-field">
            <label htmlFor="message">Message</label>
            <textarea
              className="cb-input" id="message" name="message" rows="6" required
              value={formData.message} onChange={handleChange} placeholder="Parlez-nous de votre événement…"
            />
          </div>
          <button type="submit" className="cb-form-submit" disabled={loading}>
            {loading ? 'ENVOI EN COURS…' : 'ENVOYER LE MESSAGE'}
          </button>

          {status === 'success' && (
            <div className="cb-form-msg ok">
              <strong>Message envoyé avec succès !</strong><br />
              Nous vous répondrons dans les plus brefs délais.
            </div>
          )}
          {status === 'error' && (
            <div className="cb-form-msg err">
              <strong>Une erreur est survenue.</strong><br />
              Veuillez réessayer ou nous contacter sur WhatsApp.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
