import React from 'react';
import { photo } from '../galleryData';
import { useLightbox } from './Lightbox';

export default function Concept() {
  const { open } = useLightbox();
  const pic = photo('0D8BA3BB-3C9A-4D5C-861C-B68C47AE99BA.jpeg');
  return (
    <section style={{ padding: '110px 0', background: '#EBE2F8' }}>
      <div className="cb-container cb-story-grid">
        <div className="cb-story-art">
          <div className="frame" />
          <img src={pic} alt="L'histoire de CasaBuffet" style={{ cursor: 'zoom-in' }} onClick={() => open([{ src: pic, caption: 'CasaBuffet' }], 0)} />
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
            C'est ainsi qu'est née CasaBuffet : d'une volonté simple de proposer une expérience où la qualité, l'élégance et l'attention portée aux détails occupent une place centrale.
          </p>
          <p className="cb-quote">
            Notre ambition est d'offrir à nos clients la prestation que nous aurions aimé recevoir nous-mêmes.
          </p>
        </div>
      </div>
    </section>
  );
}
