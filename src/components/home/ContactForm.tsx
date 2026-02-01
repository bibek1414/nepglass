'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { Input } from '@/components/ui/Input';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

export default function ContactForm() {
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsPending(true);

        // Simulate API call
        setTimeout(() => {
            setIsPending(false);
            alert('Message sent successfully! We will get back to you shortly.');
            e.currentTarget.reset();
        }, 1500);
    };

    return (
        <motion.section
            className="bg-white py-20 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
        >
            {/* Decorative Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
                        <h2 className="text-primary text-4xl md:text-5xl font-bold mb-6">Let&apos;s Clear Things Up</h2>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            Have questions about your prescription? Need help choosing the perfect frame?
                            Our team of eyewear specialists is here to assist you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-lg">Visit Us</h4>
                                    <p className="text-gray-600">123 Vision Street, Kathmandu, Nepal</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-lg">Call Us</h4>
                                    <p className="text-gray-600">+977 1-4000000</p>
                                    <p className="text-gray-500 text-sm">Mon-Fri from 9am to 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-lg">Email Us</h4>
                                    <p className="text-gray-600">hello@nepglass.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Input
                                    type="text"
                                    name="firstName"
                                    required
                                    label="First Name"
                                />

                                <Input
                                    type="text"
                                    name="lastName"
                                    required
                                    label="Last Name"
                                />
                            </div>

                            <Input
                                type="email"
                                name="email"
                                required
                                label="Email Address"
                            />

                            <Input
                                type="tel"
                                name="phone"
                                required
                                label="Phone Number"
                            />

                            <div className="relative">
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder=" "
                                    className="peer w-full px-4 py-3 pt-7 text-base border border-gray-200 rounded-lg bg-white/80 outline-none focus:ring-0 transition-all duration-200 resize-none md:text-sm placeholder-transparent"
                                    required
                                />
                                <label className="text-muted-foreground pointer-events-none absolute left-4 top-2 text-[10px] font-medium transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs">
                                    How can we help?
                                </label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full rounded-lg h-12 text-base"
                                disabled={isPending}
                            >
                                {isPending ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message <Send className="ml-2 w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
