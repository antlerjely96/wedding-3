'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Icon Trái Tim
const HeartIcon = ({ color = "#CF351D" }) => (
    <svg viewBox="0 0 24 24" fill={color} width="100%" height="100%">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

interface Heart {
    id: number;
    left: number;
    scale: number;
    duration: number;
}

export default function FloatingHearts() {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        // Tạo trái tim liên tục mỗi 600ms
        const interval = setInterval(() => {
            const newHeart: Heart = {
                id: Date.now(),
                left: Math.random() * 100, // Vị trí ngẫu nhiên từ trái sang phải
                scale: Math.random() * 0.5 + 0.5, // Kích thước từ 0.5 đến 1.0
                duration: Math.random() * 3 + 4, // Bay trong 4s - 7s
            };
            setHearts((prev) => [...prev, newHeart]);
        }, 600);

        return () => clearInterval(interval);
    }, []);

    const removeHeart = (id: number) => {
        setHearts((prev) => prev.filter((heart) => heart.id !== id));
    };

    return (
        // Z-Index 40: Để nằm trên nền nhưng dưới các Modal/Popup quan trọng (thường là z-50 trở lên)
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
            <AnimatePresence>
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        // Vị trí xuất phát:
                        // left: % ngẫu nhiên
                        // bottom: -50px (Nằm ngay bên dưới mép màn hình)
                        initial={{
                            opacity: 0,
                            y: 0,
                            x: 0
                        }}
                        // Hiệu ứng bay lên:
                        animate={{
                            opacity: [0, 0.8, 0], // Hiện dần rồi mờ đi
                            y: -window.innerHeight * 0.6, // Bay lên trên (Số Âm = Bay lên) khoảng 60% màn hình
                        }}
                        transition={{
                            duration: heart.duration,
                            ease: "easeOut",
                            times: [0, 0.2, 1] // 0% thời gian: mờ, 20%: rõ, 100%: mờ hẳn
                        }}
                        onAnimationComplete={() => removeHeart(heart.id)}
                        className="absolute w-8 h-8 md:w-10 md:h-10 drop-shadow-sm will-change-transform"
                        style={{
                            left: `${heart.left}%`, // Căn vị trí ngang
                            bottom: '-50px',        // Đặt điểm neo ở dưới đáy màn hình
                        }}
                    >
                        <HeartIcon />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}