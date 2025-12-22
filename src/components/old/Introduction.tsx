import FadeIn from './FadeIn';

export default function Introduction() {
    return (
        <section className="py-20 px-4 bg-wedding-cream">
            <FadeIn className="max-w-4xl mx-auto bg-white p-2 shadow-xl">
                {/* Border kép trang trí */}
                <div className="border border-wedding-gold p-8 md:p-12 text-center h-full relative">

                    {/* Họa tiết hoa góc (Giả lập bằng icon nếu chưa có ảnh) */}
                    <div className="absolute top-2 left-2 text-wedding-gold text-4xl">❧</div>
                    <div className="absolute bottom-2 right-2 text-wedding-gold text-4xl rotate-180">❧</div>

                    <h3 className="text-wedding-gold text-lg uppercase tracking-[0.2em] mb-4">Trân trọng kính mời</h3>
                    <h2 className="text-4xl md:text-6xl font-serif text-wedding-text mb-8">Đến dự đám cưới của chúng tôi</h2>

                    <p className="font-sans text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                        "Tình yêu không phải là nhìn về một phía, mà là cùng nhau nhìn về một hướng." <br/>
                        Sự hiện diện của quý vị là niềm vinh hạnh lớn lao nhất đối với gia đình chúng tôi.
                    </p>

                    <div className="text-2xl font-serif text-wedding-gold">
                        Thân mời!
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}