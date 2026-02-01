'use client';

import React, { useMemo, use } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const categoryProducts = useMemo(() => {
    return products.filter(p => p.category === slug);
  }, [slug]);

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-gray-50 pt-32 pb-20">
        <div className="container-custom">
          <Link href="/products" className="text-secondary text-sm font-bold flex items-center gap-2 mb-6 hover:underline">
            <ChevronLeft className="w-4 h-4" /> Back to All Products
          </Link>
          <h1 className="text-primary capitalize">{slug}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mt-6">
            Browse our curated selection of {slug}, designed for both style and performance.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container-custom">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 mb-8">No products found in this category.</p>
              <Link href="/products">
                <button className="text-primary font-bold hover:underline">View all products</button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
