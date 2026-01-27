import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function WorkGallery() {
  // Generate array of 17 images based on our renaming strategy
  const images = Array.from({ length: 17 }, (_, i) => `/images/gallery-${i + 1}.jpeg`);

  return (
    <section id="gallery" className="py-32 px-4 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <p className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-3">Portfolio</p>
            <h3 className="font-sans text-5xl mb-6 text-slate-800">Nos Réalisations</h3>
            <div className="w-24 h-px bg-primary/30 mx-auto"></div>
            <p className="mt-8 text-sm opacity-60 max-w-lg mx-auto leading-relaxed text-slate-600">
                Découvrez en images la finesse de nos buffets et l'élégance de nos mises en scènes.
            </p>
        </div>

        <div className="px-4">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                className="mySwiper !pb-14"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className="h-full">
                        <div className="bg-white p-4 rounded-[2rem] shadow-lg h-[500px] overflow-hidden group">
                            <div className="h-full w-full rounded-[1.5rem] overflow-hidden relative">
                                <img 
                                    src={img} 
                                    alt={`Réalisation Casa Buffet ${index + 1}`} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="text-center mt-12">
                <a 
                    href="https://www.instagram.com/casabuffett/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm group border border-slate-100"
                >
                    <span className="uppercase tracking-widest text-primary">Voir plus</span>
                    {/* <svg 
                        viewBox="0 0 24 24" 
                        className="w-5 h-5 fill-current text-pink-600 transition-transform group-hover:rotate-12"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg> */}
                </a>
            </div>
        </div>
      </div>
      
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
    </section>
  );
}
