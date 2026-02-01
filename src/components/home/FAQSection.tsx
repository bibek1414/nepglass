'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const homepageFaqs = [
    {
        q: 'How long does delivery take?',
        a: 'Inside Kathmandu valley, delivery takes 24–48 hours. Outside the valley, it usually takes 3–5 business days depending on the location.',
    },
    {
        q: 'Do you offer warranty?',
        a: 'Yes, all frames come with a 6-month warranty covering manufacturing defects. Lens coatings have their own warranty coverage.',
    },
    {
        q: 'Can I get prescription lenses?',
        a: 'Yes. You can upload your prescription during checkout or visit one of our partner clinics for precise fitting.',
    },
    {
        q: 'What is your return policy?',
        a: 'We offer a 7-day return on frames if they are unused and in original condition.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-gray-50 py-16">
            <div className="container-custom max-w-3xl">
                {/* Heading */}
                <div className="mb-10 text-center">
                    <span className="text-xs uppercase tracking-wide text-secondary">
                        Support
                    </span>
                    <h2 className="text-primary mt-2">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ list */}
                <div className="divide-y divide-gray-200 bg-white rounded-xl border border-gray-100">
                    {homepageFaqs.map((faq, i) => (
                        <div key={i}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex w-full items-center justify-between px-5 py-4 text-left"
                            >
                                <h4
                                    className={`text-sm md:text-base transition-colors ${openIndex === i ? 'text-secondary' : 'text-primary'
                                        }`}
                                >
                                    {faq.q}
                                </h4>

                                <ChevronDown
                                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${openIndex === i ? 'rotate-180 text-secondary' : ''
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: 'easeOut' }}
                                    >
                                        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Link */}
                <div className="mt-8 text-center">
                    <Link
                        href="/faqs"
                        className="inline-flex items-center text-sm text-primary hover:text-secondary transition"
                    >
                        View all FAQs
                        <ChevronDown className="ml-1 h-4 w-4 -rotate-90" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
