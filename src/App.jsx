import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Services from './components/Services';
import WorkGallery from './components/WorkGallery';
import BookingCta from './components/BookingCta';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicePage from './components/ServicePage';
import { LightboxProvider } from './components/Lightbox';
import { Analytics } from '@vercel/analytics/react';
import { findService } from './seo';

/** `path` is the page being shown, e.g. "/" or "/fiancailles" (see seo.js ROUTES). */
function App({ path = '/' }) {
  const service = findService(path);
  return (
    <LightboxProvider>
      <Navbar onHome={!service} />
      {service ? (
        <ServicePage service={service} />
      ) : (
        <main>
          <Hero />
          <Concept />
          <Services />
          <WorkGallery />
          <BookingCta />
          <Gallery />
          <Contact />
        </main>
      )}
      <Footer />
      <Analytics />
    </LightboxProvider>
  );
}

export default App;
