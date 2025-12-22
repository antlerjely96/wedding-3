'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Bắt đầu: Ẩn và nằm thấp hơn 50px
            whileInView={{ opacity: 1, y: 0 }} // Khi nhìn thấy: Hiện rõ và trồi lên
            viewport={{ once: true, margin: "-100px" }} // Chỉ chạy 1 lần
            transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}