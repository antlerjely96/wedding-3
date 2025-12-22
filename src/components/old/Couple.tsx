import Image from 'next/image';
import FadeIn from './FadeIn';

const Profile = ({ name, role, img, delay }: any) => (
    <FadeIn delay={delay} className="flex flex-col items-center">
        {/* Khung ảnh có viền xoay nhẹ */}
        <div className="relative w-64 h-64 mb-6 group">
            <div className="absolute inset-0 border-2 border-wedding-gold rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-700"></div>
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                <Image src={img} alt={name} fill className="object-cover" />
            </div>
        </div>

        <h3 className="text-4xl font-serif text-wedding-text mb-2">{name}</h3>
        <p className="text-sm uppercase tracking-widest text-wedding-gold font-bold mb-4">{role}</p>
        <div className="w-10 h-[2px] bg-gray-200 mb-4"></div>
        <p className="text-center text-gray-500 font-sans max-w-xs text-sm leading-6">
            Người đàn ông của gia đình, yêu công nghệ và luôn trân trọng những điều giản dị nhất.
        </p>
    </FadeIn>
);

export default function Couple() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <FadeIn className="text-center mb-16">
                    <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">Chú Rể & Cô Dâu</p>
                    <h2 className="text-5xl font-serif text-wedding-gold">Nhân vật chính</h2>
                </FadeIn>

                <div className="flex flex-col md:flex-row justify-center items-start gap-16 md:gap-32">
                    <Profile
                        name="Minh Tuấn" role="The Groom" delay={0.2}
                        img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
                    />

                    <div className="hidden md:block self-center pt-20">
                        <span className="text-6xl font-serif text-wedding-gold">&</span>
                    </div>

                    <Profile
                        name="Phương Thảo" role="The Bride" delay={0.4}
                        img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
                    />
                </div>
            </div>
        </section>
    );
}