'use client';

import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Rajesh Hamal",
        role: "Actor",
        text: "NepGlass provided the best experience I've had getting new lenses. The personalized service was exceptional.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=200"
    },
    {
        name: "Sita Rimal",
        role: "Professional",
        text: "The frames are stylish and durable. I love that they are designed with local preferences in mind.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?auto=format&fit=crop&q=80&w=200"
    },
    {
        name: "Anish Thapa",
        role: "Student",
        text: "Great value for money. The blue-cut lenses have really helped with my screen time during studies.",
        rating: 4,
        image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&q=80&w=200"
    }
];

export default function Testimonials() {
    return (
        <section className="bg-primary text-white py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Testimonials</p>
                    <h2 className="text-white mt-0">See Through Our Customers&apos; Eyes</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col h-full hover:bg-white/10 transition-colors">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className={`w-4 h-4 ${j < t.rating ? 'text-secondary fill-secondary' : 'text-gray-600'}`} />
                                ))}
                            </div>
                            <p className="text-gray-200 mb-8 flex-1 italic leading-relaxed">&quot;{t.text}&quot;</p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
                                />
                                <div>
                                    <p className="font-bold text-white mb-0.5">{t.name}</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
