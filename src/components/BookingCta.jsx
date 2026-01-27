import React from 'react';

export default function BookingCta() {
  return (
    <section className="py-32 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto glass-card rounded-[4rem] p-12 lg:p-20 relative overflow-hidden shadow-xl border-white/40">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-300 via-primary to-blue-300"></div>
            
            <div className="text-center mb-16">
                <h3 className="font-sans text-4xl mb-4">Conditions de Réservation</h3>
                <p className="text-sm opacity-60 uppercase tracking-widest">Organisons ensemble votre succès</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-10">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-purple-50 rounded-[1.2rem] flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
                        </div>
                        <div>
                            <h6 className="font-bold text-lg text-slate-800 mb-1">Anticipation</h6>
                            <p className="text-sm text-slate-500 leading-relaxed">Réservation minimum 10 jours avant l'événement.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-purple-50 rounded-[1.2rem] flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary text-2xl">payments</span>
                        </div>
                        <div>
                            <h6 className="font-bold text-lg text-slate-800 mb-1">Confirmation</h6>
                            <p className="text-sm text-slate-500 leading-relaxed">Acompte de 50% requis pour validation ferme.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-purple-50 rounded-[1.2rem] flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary text-2xl">local_shipping</span>
                        </div>
                        <div>
                            <h6 className="font-bold text-lg text-slate-800 mb-1">Zone de Service</h6>
                            <p className="text-sm text-slate-500 leading-relaxed">Livraison à Casablanca et environs (Bouznika, Dar Bouazza).</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white/50 dark:bg-slate-800/50 p-10 rounded-[2rem] text-center border border-white/30">
                    <p className="font-sans italic mb-8 opacity-80">Besoin d'un devis personnalisé ou d'une information rapide ?</p>
                    <a href="https://wa.me/#" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg w-full">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.449-1.27.61-1.444.161-.173.346-.217.461-.217.115 0 .231.001.331.005.106.004.25-.039.391.305.143.347.491 1.196.535 1.281.043.086.072.187.015.304-.058.117-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.777 1.394.864.174.088.275.073.376-.042.101-.116.433-.506.548-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"></path></svg>
                        CONTACTER VIA WHATSAPP
                    </a>
                    <p className="text-[10px] uppercase tracking-widest mt-6 opacity-40">Réponse sous 24h ouvrées</p>
                </div>
            </div>
        </div>
    </section>
  );
}
