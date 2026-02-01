'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
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

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:-translate-y-1 hover:shadow-md"
    >
      {/* Image */}
      <div className="relative h-60 bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}


     <div className='px-4 py-2'>
       <h3 className="text-base text-primary leading-snug ">
        {product.name}
      </h3>

      <p className="text-lg text-primary mb-4">
        Rs. {product.price}
      </p>

      {/* CTA */}
      <div className="mt-auto">
        <Button
          variant="primary"
          size="sm"
          className="w-full rounded-full transition-all hover:shadow-sm active:scale-95"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
     </div>
    </Link>
  );
}
