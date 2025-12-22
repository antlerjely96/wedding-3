'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const photos = [
    "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?w=800",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    "https://images.unsplash.com/photo-1520854221250-858f2769f46d?w=800",
    "https://images.unsplash.com/photo-1522673607200-1645062cd958?w=800",
];

export default function Gallery() {
    return (
        <section className="py-20 bg-white">
            <h2 className="text-4xl md:text-5xl font-serif text-center text-wedding-text mb-12">Album Hạnh Phúc</h2>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20} slidesPerView={1} loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                className="w-full max-w-[1400px] px-4 pb-12"
            >
                {photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                        <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                            <img src={photo} alt="Wedding" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}