import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Concept from './components/Concept';
import BookingCta from './components/BookingCta';
import Contact from './components/Contact';
import Footer from './components/Footer';

import WorkGallery from './components/WorkGallery';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Concept />
        <WorkGallery />
        <BookingCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
