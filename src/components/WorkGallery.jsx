import React from 'react';
import { photo, SETS } from '../galleryData';
import { Check } from './icons';
import { useLightbox, ZoomBadge } from './Lightbox';

const solutions = [
  "Petit-déjeuner d'affaires",
  'Pause-café',
  'Cocktail déjeunatoire',
  'Cocktail dînatoire',
  'Séminaires et formations',
  'Lancements de produits',
];

const realisations = [
  { src: 'sitepro-7.jpeg', label: 'Séminaire médical' },
  { src: SETS.professional[4], label: 'Lancement de produit' },
  { src: SETS.professional[5], label: 'Team Building' },
  { src: SETS.professional[7], label: 'Formation professionnelle' },
  { src: SETS.professional[8], label: 'Cocktail professionnel' },
  { src: SETS.professional[9], label: 'Réunion de direction' },
];

export default function WorkGallery() {
  const { open } = useLightbox();
  const strip = SETS.professional.slice(0, 4);
  const openStrip = (i) => open(strip.map((n) => ({ src: photo(n), caption: 'Événement professionnel' })), i);
  const openReal = (i) => open(realisations.map((r) => ({ src: photo(r.src), caption: r.label })), i);
  return (
    <section id="pro" style={{ padding: '118px 0', background: '#E6DBF6' }}>
      <div className="cb-container">
        <div style={{ maxWidth: 720 }}>
          <span className="cb-eyebrow cb-eyebrow-lg">Événements professionnels</span>
          <h2 className="cb-h2">Une prestation à l'image de votre entreprise</h2>
          <p className="cb-body" style={{ marginTop: 18, fontWeight: 500, color: '#4A4360' }}>
            Parce que votre image mérite une prestation à la hauteur.
          </p>
          <p className="cb-body" style={{ marginTop: 14 }}>
            Réunion de direction, séminaire, lancement de produit, formation ou réception client : chaque événement professionnel reflète l'image de votre organisation. CasaBuffet accompagne les entreprises avec des prestations élégantes, flexibles et adaptées à leurs exigences.
          </p>
        </div>

        <div className="cb-pro-strip">
          {strip.map((name, i) => (
            <figure key={name} className="cb-cell cb-zoomable" onClick={() => openStrip(i)}>
              <img src={photo(name)} alt="Événement professionnel" loading="lazy" />
              <ZoomBadge />
            </figure>
          ))}
        </div>

        <div className="cb-solutions">
          <div>
            <h3 style={{ fontWeight: 500, fontSize: 26, color: '#2E2640', letterSpacing: '-0.3px' }}>Nos solutions</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#6E6580', marginTop: 12, maxWidth: 280 }}>
              Des formats pensés pour chaque temps fort de la vie de l'entreprise.
            </p>
          </div>
          <div className="cb-solutions-list">
            {solutions.map((s) => (
              <div key={s} className="cb-solution">
                <span className="tick"><Check stroke="#fff" /></span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 80 }}>
          <h3 style={{ fontWeight: 500, fontSize: 26, color: '#2E2640', margin: '0 0 26px', letterSpacing: '-0.3px' }}>Nos réalisations</h3>
          <div className="cb-real-grid">
            {realisations.map((r, i) => (
              <div key={r.label} className="cb-real" onClick={() => openReal(i)}>
                <img src={photo(r.src)} alt={r.label} loading="lazy" />
                <div className="veil" />
                <span className="cap">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
