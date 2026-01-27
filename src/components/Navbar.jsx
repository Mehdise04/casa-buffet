import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-card border-b border-white/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#">
                <img src="/casabuffet logo watermark.png" alt="Casa Buffet" className="h-16 w-auto object-contain" />
            </a>
          </div>

          {/* Right: Menu (Desktop) */}
          <div className="hidden lg:flex space-x-8 text-xs font-semibold tracking-widest uppercase">
            <a href="#" className="hover:text-primary transition-colors">Accueil</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#concept" className="hover:text-primary transition-colors">Concept</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Right: Menu Button (Mobile) */}
          <button 
            className="p-2 lg:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md border-b border-purple-100 p-8 flex flex-col items-center space-y-6 shadow-xl animate-fade-in-down">
            <a href="#" className="text-slate-800 hover:text-primary transition-colors text-sm font-bold uppercase tracking-[0.2em]" onClick={() => setIsMenuOpen(false)}>Accueil</a>
            <a href="#services" className="text-slate-800 hover:text-primary transition-colors text-sm font-bold uppercase tracking-[0.2em]" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#concept" className="text-slate-800 hover:text-primary transition-colors text-sm font-bold uppercase tracking-[0.2em]" onClick={() => setIsMenuOpen(false)}>Concept</a>
            
            <div className="pt-4">
                <a href="#contact" className="bg-purple-100 text-primary px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-purple-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Contact
                </a>
            </div>

             <div className="flex justify-center pt-8 opacity-40">
                <img src="/casabuffet logo watermark.png" alt="Casa Buffet" className="h-12 w-auto object-contain grayscale" />
            </div>
        </div>
      )}
    </nav>
  );
}
