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
                        <div className="bg-white p-4 rounded-[2rem] shadow-lg h-[400px] overflow-hidden group">
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
        </div>
      </div>
      
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
    </section>
  );
}
