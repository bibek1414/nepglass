'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '../ui/Button';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <Link href={`/products/${product.id}`}>
            <Button variant="secondary" size="sm" className="rounded-full shadow-lg">
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
          </Link>
          <Button
            variant="primary"
            size="sm"
            className="rounded-full shadow-lg"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs text-secondary font-bold uppercase tracking-wider mb-2">{product.category}</p>
        <h3 className="text-lg font-bold text-primary mb-2 truncate">{product.name}</h3>
        <p className="text-xl font-bold text-primary">Rs. {product.price}</p>
      </div>
    </div>
  );
}
