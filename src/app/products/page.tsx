'use client';

import React, { useState, useMemo } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['all', 'sunglasses', 'frames', 'lenses'];

  const filteredProducts = useMemo(() => {
    let result = activeCategory === 'all'
      ? products
      : products.filter(p => p.category === activeCategory);

    if (sortBy === 'low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-gray-50 pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-primary">Our Collections</h1>
          <p className="text-xl text-gray-600 max-w-2xl mt-6">
            Explore our curated selection of premium eyewear, from timeless classics to modern trends.
          </p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-12">
        <div className="container-custom">
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all border ${
                    activeCategory === cat
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <span className="text-sm text-gray-500 flex items-center gap-2">
                <Filter className="w-4 h-4" /> Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
