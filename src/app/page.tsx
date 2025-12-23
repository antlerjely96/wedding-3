'use client';

import HeroEnvelope from '@/components/HeroEnvelope';
import CoupleIntro from '@/components/CoupleIntro';
import FamilyInfo from '@/components/FamilyInfo';
import EventCard from '@/components/EventCard';
import Album from '@/components/Album';
// import MapSection from '@/components/MapSection';
import RsvpForm from '@/components/RsvpForm';
import Footer from '@/components/Footer';
import MusicPlayer from "@/components/MusicPlayer";

export default function WeddingInvite() {
    return (
        <main className="min-h-screen bg-[#fdfbf7] pb-0 overflow-x-hidden">
            {/* 1. Mở đầu */}
            <HeroEnvelope />

            {/* 2. Giới thiệu Cô Dâu - Chú Rể (Dạng nền ảnh như bạn đã chọn) */}
            <CoupleIntro />

            {/* 3. Lễ Chính (Lễ Vu Quy) */}
            {/* Thường lễ chính sẽ nằm ngay sau phần giới thiệu tên */}
            <div className="mt-12 mb-8">
                <EventCard
                    title="Lễ Vu Quy"
                    time="9h00"
                    lunarDate="Thứ 7, ngày 10 tháng 1 năm 2026"
                    locationName="Tại Tư Gia Của Nhà Gái"
                    address="Số 1, ngõ 62, phố Lương Yên, Phường Hai Bà Trưng, TP. Hà Nội"
                    showCalendar={true}

                    mapLink='https://www.google.com/maps/place/Ng.+62+P.+L%C6%B0%C6%A1ng+Y%C3%AAn,+B%E1%BA%A1ch+%C4%90%E1%BA%B1ng,+Hai+B%C3%A0+Tr%C6%B0ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0107403,105.862231,19z/data=!3m1!4b1!4m6!3m5!1s0x3135abf740698de9:0xb02e6f359eff34f5!8m2!3d21.0107403!4d105.8628761!16s%2Fg%2F11p73zqyyd?hl=vi&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
                    mapEmbed='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.137049568503!2d105.86223102845331!3d21.01074029878457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf740698de9%3A0xb02e6f359eff34f5!2zTmcuIDYyIFAuIEzGsMahbmcgWcOqbiwgQuG6oWNoIMSQ4bqxbmcsIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2sus!4v1766345957739!5m2!1svi!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
                />
            </div>

            {/* --- BẮT ĐẦU KHU VỰC ĐỔI CHỖ --- */}

            {/* 4. Tiệc Thân Mật (Đã đổi lên TRÊN FamilyInfo) */}
            <EventCard
                title="Tham Dự Tiệc Thân Mật"
                time="11:30"
                lunarDate="Thứ 5, ngày 8 tháng 1 năm 2026"
                locationName="Trung tâm tiệc cưới Trống Đồng"
                address="Số 40, Hàng Cót, Hoàn Kiếm, Hà Nội"
                showCalendar={false}

                mapLink='https://www.google.com/maps/place/Tr%E1%BB%91ng+%C4%90%E1%BB%93ng+Palace/@21.0377066,105.8444579,17z/data=!3m1!4b1!4m6!3m5!1s0x3135abb95cf9d3d1:0xf3f702ec451c57e2!8m2!3d21.0377066!4d105.8470382!16s%2Fg%2F11j4sw27ft?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
                mapEmbed='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.874511639541!2d105.84217264296142!3d21.03770653078061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb95cf9d3d1%3A0xf3f702ec451c57e2!2zVHLhu5FuZyDEkOG7k25nIFBhbGFjZQ!5e0!3m2!1svi!2s!4v1766345591792!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
            />

            {/* 5. Gia đình (Đã đổi xuống DƯỚI Tiệc Thân Mật) */}
            <FamilyInfo />

            {/* --- KẾT THÚC KHU VỰC ĐỔI CHỖ --- */}

            {/* 6. Album Ảnh */}
            <Album />

            {/* 7. Bản Đồ */}
            {/*<MapSection />*/}

            {/* 8. RSVP & Footer */}
            <RsvpForm />
            <Footer />
            <MusicPlayer />

        </main>
    );
}