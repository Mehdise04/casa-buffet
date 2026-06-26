import React from 'react';
import { photo, SETS } from '../galleryData';
import { useLightbox, ZoomBadge } from './Lightbox';

const categories = [
  {
    num: '01', side: 'text-left', title: 'Fiançailles',
    desc: "Des buffets raffinés et des coffrets cadeaux conçus pour accompagner l'un des plus beaux moments de votre vie.",
    layout: 'l3a',
    imgs: ['7454801F-40ED-40FD-BECE-0E438F585D2C.jpeg', SETS.engagement[0], SETS.engagement[5]],
  },
  {
    num: '02', side: 'text-right', title: 'Soutenances',
    desc: 'Célébrez vos réussites dans une ambiance conviviale et élégante.',
    layout: 'l3b',
    imgs: [SETS.soutenance[1], SETS.soutenance[0], SETS.soutenance[2]],
  },
  {
    num: '03', side: 'text-left', title: 'Baby Shower & Naissances',
    desc: 'Des prestations adaptées et délicates pour accueillir les moments les plus précieux.',
    layout: 'l3a',
    imgs: [SETS.babyshower[0], SETS.babyshower[1], SETS.babyshower[2]],
  },
  {
    num: '04', side: 'text-right', title: 'Anniversaires',
    desc: 'Anniversaires, réunions familiales et célébrations sur mesure, pour petits et grands.',
    layout: 'l3a',
    imgs: [SETS.anniversaire[0], SETS.anniversaire[1], SETS.anniversaire[2]],
  },
];

function Collage({ layout, imgs, title }) {
  const { open } = useLightbox();
  const openAt = (i) => open(imgs.map((n) => ({ src: photo(n), caption: title })), i);
  return (
    <div className={`cb-collage ${layout}`}>
      {imgs.map((name, i) => (
        <figure key={name} className="cb-cell cb-zoomable" onClick={() => openAt(i)}>
          <img src={photo(name)} alt={`${title} — CasaBuffet`} loading="lazy" />
          <ZoomBadge />
        </figure>
      ))}
    </div>
  );
}

function TextBlock({ num, title, desc }) {
  return (
    <div>
      <span className="cb-prive-num">{num}</span>
      <h3 className="cb-prive-title">{title}</h3>
      <p className="cb-prive-desc">{desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="prives" style={{ padding: '118px 0 96px', background: '#F5EFFC' }}>
      <div className="cb-container">
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
          <span className="cb-eyebrow cb-eyebrow-lg">Événements privés</span>
          <h2 className="cb-h2">
            Parce que certains moments méritent d'être{' '}
            <span className="script" style={{ color: '#6A48AC', fontWeight: 400, fontSize: '1.05em' }}>inoubliables.</span>
          </h2>
          <p className="cb-body" style={{ marginTop: 22 }}>
            CasaBuffet accompagne vos événements privés avec des prestations élégantes, personnalisées et pensées dans les moindres détails.
          </p>
        </div>

        {categories.map((c, i) => (
          <div key={c.num} className={`cb-prive-row ${c.side}`} style={i === 0 ? { marginTop: 84 } : undefined}>
            {c.side === 'text-left' ? (
              <>
                <TextBlock {...c} />
                <Collage layout={c.layout} imgs={c.imgs} title={c.title} />
              </>
            ) : (
              <>
                <Collage layout={c.layout} imgs={c.imgs} title={c.title} />
                <TextBlock {...c} />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
