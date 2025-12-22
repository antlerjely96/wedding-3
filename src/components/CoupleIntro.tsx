import Image from 'next/image';
import SectionDivider from './ui/SectionDivider';

export default function CoupleIntro() {
    return (
        // 1. Thiết lập section chính là relative để chứa các phần tử absolute bên trong
        // Đặt min-height cao một chút (ví dụ 80vh) để ảnh nền hiển thị rõ nét
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 py-20">

            {/* 2. Phần Ảnh Nền & Lớp Phủ */}
            <div className="absolute inset-0 z-0">
                {/* Sử dụng Next Image với prop 'fill' để làm background */}
                <Image
                    src="/image/DSC03615.JPG" // Hãy thay bằng đường dẫn ảnh thật của bạn (ví dụ: "/images/couple-bg.jpg")
                    alt="Wedding Couple Background"
                    fill
                    className="object-cover pointer-events-none" // object-cover giúp ảnh phủ kín khung mà không bị méo
                    priority // Ưu tiên tải ảnh này vì nó nằm ở đầu trang
                />
                {/* Lớp phủ màu đen bán trong suốt để tăng độ tương phản cho chữ */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* 3. Nội dung Chữ (Đặt z-index cao hơn để nổi lên trên nền) */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
                <p className="font-serif uppercase tracking-[0.3em] text-sm text-gray-200 mb-8 opacity-90">
                    Trân Trọng Báo Tin Lễ Vu Quy
                </p>

                <div className="flex flex-col items-center gap-6 mb-12">
                    {/* Tăng kích thước font và thêm drop-shadow để chữ nổi bật hơn */}
                    <h2 className="font-script text-6xl md:text-8xl text-white drop-shadow-2xl">
                        Nguyễn Thu Trang
                    </h2>
                    <span className="font-script text-4xl text-gray-300 opacity-80">&</span>
                    <h2 className="font-script text-6xl md:text-8xl text-white drop-shadow-2xl">
                        Phạm Sơn Tùng
                    </h2>
                </div>

                {/* Divider đổi màu sang trắng/sáng để hợp với nền tối */}
                <div className="text-white/80 scale-125">

                </div>
            </div>
        </section>
    );
}