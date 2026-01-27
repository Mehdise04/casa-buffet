import React from 'react';

export default function Concept() {
  return (
    <section id="concept" className="py-32 px-4 bg-background-light dark:bg-background-dark overflow-hidden relative transition-colors duration-300">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <p className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4">Savoir-Faire</p>
                    <h3 className="font-sans text-5xl mb-8">Notre Concept</h3>
                    <p className="text-lg opacity-70 italic mb-12 font-sans">Une démarche artisanale guidée par la passion de l'excellence et le souci du détail.</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <span className="font-sans text-4xl text-primary/30 font-bold">01</span>
                            <div>
                                <h5 className="font-bold mb-2">Sélection Noble</h5>
                                <p className="text-sm opacity-60">Ingrédients premium et de saison uniquement.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="font-sans text-4xl text-primary/30 font-bold">02</span>
                            <div>
                                <h5 className="font-bold mb-2">Artisanat Pur</h5>
                                <p className="text-sm opacity-60">Chaque pièce est façonnée à la main dans nos ateliers.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="font-sans text-4xl text-primary/30 font-bold">03</span>
                            <div>
                                <h5 className="font-bold mb-2">Design Épuré</h5>
                                <p className="text-sm opacity-60">Une esthétique minimaliste et sophistiquée.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="font-sans text-4xl text-primary/30 font-bold">04</span>
                            <div>
                                <h5 className="font-bold mb-2">Logistique Fine</h5>
                                <p className="text-sm opacity-60">Livraison et mise en place soignées pour vos buffets.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="lg:w-1/2 relative">
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                        <img 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuApQH3LJxNHQUX6Jq_L5s0LxAQdICdFPUGf3FMjtEhPMxiPkcxS0S4bU7uMTEWDGP95KHkpgzrGbPMYqmTMRbYEU4l38rw4frgSPRfNKSrVsRb5XyDG6U9rcsUx32TBeVUL1QFjqPAA28nDpv4WTiev4OhGOt9d-B0i8jtrqalC9m-lc_wzyah2cu99gmBCIM2Y-rOLoXxYVZK2JF44mFlTRC0HIEydZM0JV8OxNgnattmBEuXA0it1Cd4Eh2fjrxbcWgQql1HObAz7" 
                          alt="Concept Casa Buffet" 
                          className="w-full h-[500px] object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </div>
    </section>
  );
}
