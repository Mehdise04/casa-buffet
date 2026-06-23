import React from 'react';
import { photo, SETS } from '../galleryData';

export default function Concept() {
  return (
    <section style={{ padding: '110px 0', background: '#EBE2F8' }}>
      <div className="cb-container cb-story-grid">
        <div className="cb-story-art">
          <div className="frame" />
          <img src={photo(SETS.engagement[1])} alt="L'histoire de Casa Buffet" />
        </div>
        <div>
          <span className="cb-eyebrow">Notre histoire</span>
          <h2 className="cb-h2 cb-h2-serif">
            Avant de devenir prestataires, nous étions{' '}
            <span className="script" style={{ color: '#6A48AC', fontSize: '1.08em' }}>clients.</span>
          </h2>
          <p className="cb-body" style={{ lineHeight: 1.75, marginTop: 24, maxWidth: 520 }}>
            Et comme beaucoup, nous recherchions bien plus qu'un simple buffet. Nous souhaitions une prestation à la hauteur des moments importants que nous célébrions.
          </p>
          <p className="cb-body" style={{ lineHeight: 1.75, marginTop: 18, maxWidth: 520 }}>
            C'est ainsi qu'est née Casa Buffet : d'une volonté simple de proposer une expérience où la qualité, l'élégance et l'attention portée aux détails occupent une place centrale.
          </p>
          <p className="cb-quote">
            Notre ambition est d'offrir à nos clients la prestation que nous aurions aimé recevoir nous-mêmes.
          </p>
        </div>
      </div>
    </section>
  );
}
