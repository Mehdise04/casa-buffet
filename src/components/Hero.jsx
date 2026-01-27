import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        {/* Decorative elements */}
        <div className="absolute top-20 left-[20%] text-blue-200 text-4xl animate-pulse">✦</div>
        <div className="absolute top-16 right-[20%] text-purple-200 text-3xl animate-pulse delay-700">✦</div>
        
        <div className="relative z-10 max-w-4xl w-full text-center">
            
            {/* Badge */}
            <div className="inline-block mb-6">
                <span className="bg-purple-100/80 text-purple-600 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                    Buffets & Bonheur
                </span>
            </div>

            {/* Title / Logo */}
            <div className="flex justify-center mb-6 py-2">
                <img src="/casabuffet logo watermark.png" alt="Casa Buffet" className="h-48 lg:h-64 object-contain drop-shadow-md" />
            </div>

            {/* Subtitle */}
            <p className="font-sans font-light text-xl lg:text-3xl text-slate-600 italic mb-12 max-w-2xl mx-auto leading-relaxed">
                Buffets & douceurs that warm the heart.<br/>
                Petits prix, big vibes 🤗, made with love 🥰
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#contact" className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-purple-600 transition-colors shadow-lg shadow-purple-200 min-w-[240px]">
                    Planifier mon événement
                </a>
                <a href="#services" className="px-8 py-4 bg-white text-primary rounded-full font-medium border-2 border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all shadow-sm min-w-[240px]">
                    Découvrir nos buffets
                </a>
            </div>
        </div>
    </section>
  );
}
