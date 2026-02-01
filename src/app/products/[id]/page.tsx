'use client';

import React, { use } from 'react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { ChevronLeft, ShoppingCart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addToCart } = useCart();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container-custom py-40 text-center">
        <h1 className="text-primary">Product Not Found</h1>
        <Link href="/products" className="text-secondary hover:underline mt-4 block">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <div className="container-custom pt-32">
        <Link href="/products" className="text-gray-500 text-sm flex items-center gap-2 mb-12 hover:text-primary transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">{product.category}</p>
            <h1 className="text-primary mt-0 mb-6">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-8">Rs. {product.price}</p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4 mb-10">
              {product.features?.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1" onClick={() => addToCart(product)}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-1 gap-6 mt-12 pt-12 border-t border-gray-100">
              <div className="flex gap-4">
                <Truck className="w-6 h-6 text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-primary">Fast Delivery</h4>
                  <p className="text-xs text-gray-500">Ships within 24-48 hours across Nepal.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <RefreshCw className="w-6 h-6 text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-primary">Easy Returns</h4>
                  <p className="text-xs text-gray-500">7-day hassle-free return policy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="w-6 h-6 text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-primary">Authentic Products</h4>
                  <p className="text-xs text-gray-500">100% genuine quality guarantee.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
