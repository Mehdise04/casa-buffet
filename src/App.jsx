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

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Services />
        <WorkGallery />
        <BookingCta />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
