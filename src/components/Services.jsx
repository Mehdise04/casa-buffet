import React from 'react';
import { photo, SETS } from '../galleryData';

const categories = [
  {
    num: '01', side: 'text-left', title: 'Fiançailles',
    desc: "Des buffets raffinés et des coffrets cadeaux conçus pour accompagner l'un des plus beaux moments de votre vie.",
    layout: 'l3a',
    imgs: [SETS.engagement[0], SETS.engagement[4], SETS.engagement[5]],
  },
  {
    num: '02', side: 'text-right', title: 'Soutenances',
    desc: 'Célébrez vos réussites dans une ambiance conviviale et élégante.',
    layout: 'l3b',
    imgs: [SETS.celebrations[1], SETS.celebrations[0], SETS.celebrations[2]],
  },
  {
    num: '03', side: 'text-left', title: 'Baby Shower & Naissances',
    desc: 'Des prestations adaptées et délicates pour accueillir les moments les plus précieux.',
    layout: 'l4',
    imgs: [SETS.celebrations[3], SETS.celebrations[4], SETS.dessert[2], SETS.engagement[19]],
  },
  {
    num: '04', side: 'text-right', title: 'Réceptions privées',
    desc: 'Anniversaires, réunions familiales et célébrations sur mesure.',
    layout: 'l3a',
    imgs: [SETS.decor[12], SETS.dessert[3], SETS.savory[3]],
  },
];

function Collage({ layout, imgs }) {
  return (
    <div className={`cb-collage ${layout}`}>
      {imgs.map((name) => <img key={name} src={photo(name)} alt="Réalisation Casa Buffet" loading="lazy" />)}
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
          <span className="cb-eyebrow">Événements privés</span>
          <h2 className="cb-h2">
            Parce que certains moments méritent d'être{' '}
            <span className="script" style={{ color: '#6A48AC', fontWeight: 400, fontSize: '1.05em' }}>inoubliables.</span>
          </h2>
          <p className="cb-body" style={{ marginTop: 22 }}>
            Casa Buffet accompagne vos événements privés avec des prestations élégantes, personnalisées et pensées dans les moindres détails.
          </p>
        </div>

        {categories.map((c, i) => (
          <div key={c.num} className={`cb-prive-row ${c.side}`} style={i === 0 ? { marginTop: 84 } : undefined}>
            {c.side === 'text-left' ? (
              <>
                <TextBlock {...c} />
                <Collage layout={c.layout} imgs={c.imgs} />
              </>
            ) : (
              <>
                <Collage layout={c.layout} imgs={c.imgs} />
                <TextBlock {...c} />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
