import React from 'react';

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 bg-white/30 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <p className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-3">Excellence</p>
                <h3 className="font-sans text-5xl text-slate-800 dark:text-white mb-6">Services Sur-Mesure</h3>
                <div className="w-24 h-px bg-primary/30 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Private Events */}
                <div className="bg-white p-10 rounded-[2.5rem] text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                    <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8">
                        <span className="material-symbols-outlined text-purple-400 text-3xl">cake</span>
                    </div>
                    <h4 className="font-sans font-bold text-2xl mb-4 text-slate-800">Événements Privés</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Anniversaires, mariages, baby showers. Nous créons des buffets qui racontent votre histoire.
                    </p>
                </div>

                {/* Professional Buffets */}
                <div className="bg-white p-10 rounded-[2.5rem] text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
                        <span className="material-symbols-outlined text-blue-400 text-3xl">business_center</span>
                    </div>
                    <h4 className="font-sans font-bold text-2xl mb-4 text-slate-800">Buffets Professionnels</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Lancements de produits, séminaires ou cocktails dînatoires. Une touche de raffinement pour vos affaires.
                    </p>
                </div>

                {/* Catering */}
                <div className="bg-white p-10 rounded-[2.5rem] text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-8">
                        <span className="material-symbols-outlined text-orange-400 text-3xl">star</span>
                    </div>
                    <h4 className="font-sans font-bold text-2xl mb-4 text-slate-800">Catering Spécialisé</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Bar à thèmes, pâtisseries fines et buffets salés gourmets adaptés à vos thématiques.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}
