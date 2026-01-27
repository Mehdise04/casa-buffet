import React, { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [formData, setFormData] = useState({
      user_name: '',
      user_email: '',
      message: ''
  });

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            setLoading(false);
            setStatus('success');
            setFormData({ user_name: '', user_email: '', message: '' });
            setTimeout(() => setStatus(null), 5000);
        } else {
            console.error('Server error:', data);
            setLoading(false);
            setStatus('error');
        }
    } catch (error) {
        console.error('Network error:', error);
        setLoading(false);
        setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-4 bg-gradient-to-b from-slate-50 to-white dark:bg-slate-950 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-3">À Votre Écoute</p>
                <h3 className="font-sans text-5xl mb-6">Contactez-nous</h3>
                <div className="w-24 h-px bg-primary/30 mx-auto"></div>
                <p className="mt-8 text-sm opacity-60 max-w-lg mx-auto leading-relaxed">
                    Une question, une demande de devis ou simplement une envie de discuter de votre futur événement ? Laissez-nous un message.
                </p>
            </div>

            <div className="bg-white rounded-[3rem] p-8 md:p-14 shadow-[0_0_50px_rgba(0,0,0,0.08)] border border-slate-100">
                <form onSubmit={sendEmail} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold ml-2 opacity-70 text-slate-700">Email</label>
                            <input 
                                type="email" 
                                name="user_email"
                                id="email" 
                                required
                                value={formData.user_email}
                                onChange={handleChange}
                                placeholder="votre@email.com" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-slate-700"
                            />
                        </div>
                        <div className="space-y-2">
                             <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold ml-2 opacity-70 text-slate-700">Nom Complet</label>
                             <input 
                                type="text" 
                                name="user_name"
                                id="name" 
                                required
                                value={formData.user_name}
                                onChange={handleChange}
                                placeholder="Votre Nom" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-slate-700"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold ml-2 opacity-70 text-slate-700">Message</label>
                        <textarea 
                            name="message"
                            id="message" 
                            rows="6" 
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Comment pouvons-nous vous aider ?" 
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-slate-700"
                        ></textarea>
                    </div>

                    <div className="text-center pt-4">
                        <button 
                            type="submit" 
                            disabled={loading}
                            className={`bg-primary text-white px-12 py-4 rounded-full font-bold tracking-widest hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm shadow-[0_10px_20px_rgba(168,85,247,0.3)] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'ENVOI EN COURS...' : 'ENVOYER LE MESSAGE'}
                        </button>
                    </div>

                    {status === 'success' && (
                        <div className="text-center p-4 bg-green-50 text-green-600 rounded-xl animate-fade-in border border-green-100">
                            <p className="font-bold">Message envoyé avec succès !</p>
                            <p className="text-xs mt-1">Nous vous répondrons dans les plus brefs délais.</p>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="text-center p-4 bg-red-50 text-red-600 rounded-xl animate-fade-in border border-red-100">
                            <p className="font-bold">Une erreur est survenue.</p>
                            <p className="text-xs mt-1">Veuillez vérifier vos informations ou réessayer plus tard.</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    </section>
  );
}