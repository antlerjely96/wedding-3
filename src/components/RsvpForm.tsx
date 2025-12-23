'use client';

import React, { useState } from 'react';
import {motion, AnimatePresence, Variants, Easing} from 'framer-motion';
import { Send, Heart } from 'lucide-react';
import CustomSelect from './ui/Select'; // Import component vừa tách

// --- CONFIG ANIMATION ---
const smoothEase : Easing = [0.4, 0, 0.2, 1];

const containerVariants : Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants : Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: smoothEase } }
};

export default function RsvpForm() {
    const [formData, setFormData] = useState({
        name: '',
        guestOf: '',
        attending: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Giả lập gửi form
        setTimeout(() => setIsSubmitted(true), 500);
    };

    // Data cho các Select
    const guestOptions = [
        { label: "Nhà Trai", value: "groom" },
        { label: "Nhà Gái", value: "bride" },
        // { label: "Cả Hai Nhà", value: "both" }
    ];

    const attendingOptions = [
        { label: "Chắc chắn rồi!", value: "yes" },
        { label: "Có thể (Sẽ báo sau)", value: "maybe" },
        { label: "Tiếc quá, mình bận mất rồi", value: "no" }
    ];

    return (
        <section className="py-12 md:py-20 bg-[#fdfbf7]">
            <div className="container mx-auto px-4 max-w-lg">

                <motion.div
                    className="bg-white rounded-xl shadow-2xl overflow-visible relative z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="bg-[#8B1E29] p-6 text-center text-white rounded-t-xl">
                        <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">Gửi Lời Chúc Mừng</h3>
                        <p className="text-sm md:text-base font-light opacity-90 italic">
                            Hãy gửi những lời chúc tốt đẹp nhất đến chúng mình nhé!
                        </p>
                    </motion.div>

                    {/* Body */}
                    <div className="p-6 md:p-8">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                                >

                                    {/* Input Name */}
                                    <motion.div variants={itemVariants}>
                                        <motion.input
                                            whileFocus={{ scale: 1.01, borderColor: "#8B1E29" }}
                                            type="text"
                                            placeholder="Tên Của Bạn"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8B1E29]/50 transition-colors text-gray-700 placeholder-gray-400"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            required
                                        />
                                    </motion.div>

                                    {/* Custom Select 1: Khách mời của ai */}
                                    <motion.div variants={itemVariants} className="relative z-30">
                                        <CustomSelect
                                            options={guestOptions}
                                            placeholder="Bạn Là Khách Mời Của..."
                                            value={formData.guestOf}
                                            onChange={(val) => setFormData({...formData, guestOf: val})}
                                        />
                                    </motion.div>

                                    {/* Custom Select 2: Tham dự */}
                                    <motion.div variants={itemVariants} className="relative z-20">
                                        <CustomSelect
                                            options={attendingOptions}
                                            placeholder="Bạn Tham Dự Chứ?"
                                            value={formData.attending}
                                            onChange={(val) => setFormData({...formData, attending: val})}
                                        />
                                    </motion.div>

                                    {/* Textarea */}
                                    <motion.div variants={itemVariants}>
                                        <motion.textarea
                                            whileFocus={{ scale: 1.01, borderColor: "#8B1E29" }}
                                            placeholder="Lời nhắn nhủ..."
                                            rows={4}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8B1E29]/50 transition-colors text-gray-700 placeholder-gray-400 resize-none"
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        ></motion.textarea>
                                    </motion.div>

                                    {/* Buttons */}
                                    <motion.div variants={itemVariants} className="space-y-3 pt-2">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.95 }}
                                            type="submit"
                                            className="w-full py-3.5 bg-[#8B1E29] text-white rounded-lg font-bold shadow-md hover:bg-[#a02330] transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Send size={18} /> Gửi Lời Chúc
                                        </motion.button>

                                        {/*<motion.button*/}
                                        {/*    whileHover={{ scale: 1.02 }}*/}
                                        {/*    whileTap={{ scale: 0.95 }}*/}
                                        {/*    type="button"*/}
                                        {/*    className="w-full py-3.5 bg-[#FF6B6B] text-white rounded-lg font-bold shadow-md hover:bg-[#ff5252] transition-colors flex items-center justify-center gap-2"*/}
                                        {/*>*/}
                                        {/*    <Heart size={18} fill="white" /> Gửi Mừng Cưới*/}
                                        {/*</motion.button>*/}
                                    </motion.div>

                                </motion.form>
                            ) : (
                                // Success Message
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: "backOut" }}
                                    className="text-center py-10"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Heart className="text-green-500 w-10 h-10" fill="currentColor" />
                                    </div>
                                    <h3 className="text-2xl font-script text-gray-800 mb-2">Cảm ơn bạn!</h3>
                                    <p className="text-gray-500 font-serif">Lời chúc của bạn đã được gửi đi thành công.</p>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-8 px-6 py-2 text-sm text-[#8B1E29] font-bold border border-[#8B1E29] rounded-full hover:bg-[#8B1E29] hover:text-white transition-colors"
                                    >
                                        Gửi thêm lời chúc khác
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}