'use client';
export default function RSVP() {
    return (
        <section className="py-24 bg-wedding-primary/10">
            <div className="max-w-md mx-auto bg-white p-8 shadow-2xl rounded-sm mx-4">
                <h2 className="text-4xl font-serif text-center text-wedding-primary mb-6">Xác Nhận Tham Dự</h2>
                <form className="space-y-4 font-sans text-black">
                    <input type="text" placeholder="Tên của bạn" className="w-full p-3 border border-gray-300 focus:outline-none focus:border-wedding-primary" />
                    <input type="text" placeholder="Số điện thoại" className="w-full p-3 border border-gray-300 focus:outline-none focus:border-wedding-primary" />
                    <div className="flex gap-4 justify-center py-2">
                        <label className="flex items-center gap-2"><input type="radio" name="attend" className="accent-wedding-primary" /> Có tham dự</label>
                        <label className="flex items-center gap-2"><input type="radio" name="attend" className="accent-wedding-primary" /> Rất tiếc</label>
                    </div>
                    <button className="w-full bg-wedding-primary text-white py-3 uppercase tracking-widest hover:bg-[#b5952f] transition-colors">Gửi Xác Nhận</button>
                </form>
            </div>
        </section>
    );
}