'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/shop/ProductCard';

interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
}

interface ProductShowcaseProps {
    title: string;
    subtitle: string;
    products: Product[];
}

export default function ProductShowcase({ title, subtitle, products }: ProductShowcaseProps) {
    return (
        <section className="bg-white py-20 border-b border-gray-50 last:border-0">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">{subtitle}</p>
                        <h2 className="text-primary mt-0 mb-0">{title}</h2>
                    </div>
                    <Link href="/products" className="group flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
                        View All Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
