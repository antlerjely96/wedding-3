'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroEnvelope() {
    const [isOpen, setIsOpen] = useState(false);

    // --- HIỆU ỨNG TỰ ĐỘNG SCROLL ---
    useEffect(() => {
        if (isOpen) {
            // Tổng thời gian = Delay ban đầu (0.6s) + Thời gian animation (3s) + Chờ thêm (2s) = 5.6s
            const timer = setTimeout(() => {
                const nextSectionTop = window.innerHeight; // Vị trí của màn hình tiếp theo
                window.scrollTo({
                    top: nextSectionTop,
                    behavior: 'smooth'
                });
            }, 5600); // 5600ms

            return () => clearTimeout(timer); // Dọn dẹp nếu component bị unmount
        }
    }, [isOpen]);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-[#fdfbf7] relative p-4 overflow-hidden">

            {/* Tiêu đề */}
            <motion.div
                animate={{ opacity: isOpen ? 0.5 : 1, y: isOpen ? -80 : 0 }}
                transition={{ duration: 1 }}
                className="mb-8 text-center relative z-10"
            >
                <h1 className="font-script text-5xl md:text-6xl text-gray-800 mb-2">Save The Date</h1>
                <p className="font-serif text-gray-500 italic">Mời bạn mở thiệp</p>
            </motion.div>

            {/* --- CONTAINER CHÍNH --- */}
            <div
                className="relative w-[320px] h-[230px] md:w-[500px] md:h-[350px] flex items-center justify-center z-20"
                style={{ perspective: '1200px' }}
            >

                {/* --- KHỐI PHONG BÌ TỔNG --- */}
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                    variants={{
                        closed: {
                            rotate: 0,
                            scale: 1,
                            y: 0
                        },
                        opened: {
                            rotate: [0, 0, 0, -2],
                            scale: [1, 1, 1, 0.95],
                            y: [0, 0, 0, 40],

                            transition: {
                                duration: 3,
                                times: [0, 0.6, 0.7, 1],
                                ease: "easeInOut",
                                delay: 0.6
                            }
                        }
                    }}
                    initial="closed"
                    animate={isOpen ? "opened" : "closed"}
                >
                    {/* 1. LƯNG PHONG BÌ */}
                    <div className="absolute inset-0 bg-[#Cdcac5] rounded-sm shadow-2xl" style={{ transform: 'translateZ(0px)' }}></div>

                    {/* 2. TẤM THIỆP (CARD) */}
                    <motion.div
                        className="absolute top-[15%] left-[5%] w-[90%] h-[85%] bg-white rounded-sm shadow-md overflow-hidden"
                        style={{ transformStyle: 'preserve-3d' }}
                        variants={{
                            closed: {
                                y: 0,
                                z: 2,
                                rotate: 0,
                                scale: 1
                            },
                            opened: {
                                y: [0, -400, -400, -25],
                                z: [2, 2, 60, 60],
                                rotate: [0, 0, 0, 2],
                                scale: [1, 1, 1, 1],

                                transition: {
                                    duration: 3,
                                    times: [0, 0.6, 0.7, 1],
                                    ease: "easeInOut",
                                    delay: 0.6
                                }
                            }
                        }}
                        initial="closed"
                        animate={isOpen ? "opened" : "closed"}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src="/image/DSC03615.JPG"
                                alt="Wedding Card"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* MẶT NẠ CHE ẢNH (Màu #E0DBD7) */}
                            <motion.div
                                className="absolute inset-0 bg-[#E0DBD7] z-50"
                                animate={{ opacity: isOpen ? 0 : 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            />
                        </div>
                    </motion.div>

                    {/* 3. TÚI ĐỰNG (MẶT TIỀN) */}
                    <div
                        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-md"
                        style={{ transform: 'translateZ(30px)' }}
                    >
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 L50 52 L100 100 Z" fill="#E0DBD7" />
                            <path d="M0 0 L50 54 L0 100 Z" fill="#d6d3ce" />
                            <path d="M100 0 L50 54 L100 100 Z" fill="#ccc8c4" />
                        </svg>
                    </div>

                    {/* 4. NẮP PHONG BÌ */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[55%] origin-top"
                        initial={{ rotateX: 0 }}
                        animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{
                            transformStyle: "preserve-3d",
                            transform: 'translateZ(32px)'
                        }}
                    >
                        <div className="relative w-full h-full">
                            <svg className="absolute inset-0 w-full h-full backface-hidden" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ backfaceVisibility: 'hidden' }}>
                                <path d="M0 0 L100 0 L50 100 Z" fill="#E0DBD7" />
                                <line x1="0" y1="0" x2="50" y2="100" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                                <line x1="100" y1="0" x2="50" y2="100" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                            </svg>
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ transform: 'rotateX(180deg)', backfaceVisibility: 'hidden' }}>
                                <path d="M0 0 L100 0 L50 100 Z" fill="#Cdcac5" />
                            </svg>
                        </div>
                    </motion.div>

                </motion.div>

                {/* --- NÚT TEM HÌNH CON DẤU --- */}
                {!isOpen && (
                    <motion.div
                        className="absolute z-50 cursor-pointer"
                        style={{ transform: 'translateZ(40px)' }}
                        onClick={() => setIsOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="relative w-24 h-24 md:w-28 md:h-28 drop-shadow-2xl">
                            <Image
                                src="/image/seal.png"
                                alt="Wax Seal"
                                fill
                                className="object-cover rounded-full"
                                priority
                            />
                            <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-red-800 scale-90"></div>
                        </div>
                    </motion.div>
                )}

            </div>

        </section>
    );
}