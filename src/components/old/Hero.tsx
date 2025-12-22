'use client';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* 1. Ảnh nền (Có hiệu ứng Zoom chậm - Ken Burns effect) */}
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 opacity-60 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920')" }}
            />

            {/* 2. Nội dung chữ ở giữa */}
            <div className="relative z-10 text-center text-white p-6 border-y-2 border-white/30 backdrop-blur-sm bg-black/20 py-10 max-w-2xl mx-4">
                <motion.p
                    initial={{ opacity: 0, letterSpacing: "0px" }}
                    animate={{ opacity: 1, letterSpacing: "4px" }}
                    transition={{ duration: 1.5 }}
                    className="text-sm md:text-lg uppercase mb-4 font-sans tracking-widest"
                >
                    We Are Getting Married
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-6xl md:text-8xl font-serif mb-2 leading-tight text-[#fdfbf8]"
                >
                    Minh Tuấn <br className="md:hidden"/> & <br className="md:hidden"/> Phương Thảo
                </motion.h1>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="w-20 h-[1px] bg-white mx-auto my-6"
                ></motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-xl md:text-2xl font-serif italic"
                >
                    20 Tháng 12 Năm 2025
                </motion.p>
            </div>

            {/* Icon cuộn chuột */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-10 text-white opacity-80"
            >
                <span className="text-xs uppercase tracking-widest">Trượt xuống</span>
            </motion.div>
        </section>
    );
}