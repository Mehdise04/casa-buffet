import React from 'react';
import { photo, SETS } from '../galleryData';
import { useLightbox } from './Lightbox';

const reasons = [
  { num: '01', title: 'Une approche personnalisée', desc: 'Chaque événement est unique et mérite une prestation adaptée à vos attentes.' },
  { num: '02', title: 'Le sens du détail', desc: 'Parce que les plus beaux souvenirs se construisent dans les détails.' },
  { num: '03', title: 'Une qualité maîtrisée', desc: 'Une sélection rigoureuse des produits et une exécution soignée.' },
  { num: '04', title: 'Une présentation élégante', desc: 'Des buffets conçus pour séduire autant les yeux que les papilles.' },
  { num: '05', title: 'Un accompagnement de A à Z', desc: 'De la conception à la réalisation, nous vous accompagnons à chaque étape.' },
];

export default function BookingCta() {
  const { open } = useLightbox();
  const pic = photo(SETS.dessert[1]);
  return (
    <section id="pourquoi" className="cb-section" style={{ background: '#EEE4FA' }}>
      <div className="cb-container cb-why-grid">
        <div className="cb-why-aside">
          <span className="cb-eyebrow">Pourquoi Casa Buffet</span>
          <h2 className="cb-h2">
            Bien plus qu'un{' '}
            <span className="script" style={{ color: '#6A48AC', fontWeight: 400, fontSize: '1.06em' }}>buffet.</span>
          </h2>
          <p className="cb-body" style={{ fontSize: 16, margin: '22px 0 28px', maxWidth: 380 }}>
            Nous sommes convaincus que la réussite d'un événement repose sur l'équilibre entre qualité, présentation et attention portée aux détails. C'est cette philosophie qui guide chacune de nos réalisations.
          </p>
          <img src={pic} alt="Présentation Casa Buffet" loading="lazy" style={{ cursor: 'zoom-in' }} onClick={() => open([{ src: pic, caption: 'Casa Buffet' }], 0)} />
        </div>

        <div>
          {reasons.map((r) => (
            <div key={r.num} className="cb-why-item">
              <span className="cb-why-num">{r.num}</span>
              <div>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
