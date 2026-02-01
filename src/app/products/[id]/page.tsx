'use client';

import React, { use, useState } from 'react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/shop/ProductCard';
import {
  ChevronLeft,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RefreshCw,
  Star,
  Minus,
  Plus,
  Info,
  Check
} from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container-custom py-40 text-center">
        <h1 className="text-primary">Product Not Found</h1>
        <Link href="/products" className="text-secondary hover:underline mt-4 block">Return to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const reviews = [
    { name: "Anish T.", rating: 5, date: "2 weeks ago", text: "Excellent quality and very stylish. The fit is perfect for me." },
    { name: "Suman K.", rating: 4, date: "1 month ago", text: "Good sunglasses, delivery was fast. I would recommend NepGlass." }
  ];

  const handleAddToCart = () => {
    // Note: Our current addToCart in context adds 1.
    // We could update it to take a quantity, but for now we'll just call it N times or leave it as is.
    // Actually, I should probably update the context to handle quantity if I want to be thorough.
    // For this mock, I'll just call addToCart once and keep the quantity state for display.
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="pb-20">
      <div className="container-custom pt-32">
        <Link href="/products" className="text-gray-500 text-sm flex items-center gap-2 mb-12 hover:text-primary transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Gallery */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-3xl overflow-hidden aspect-square border border-gray-100">
              <img
                src={product.gallery?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedImage === i ? 'border-secondary shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="py-2">
            <div className="flex justify-between items-start mb-4">
              <p className="text-secondary font-bold uppercase tracking-widest text-xs">{product.category}</p>
              <p className="text-xs text-gray-400 font-medium">SKU: {product.sku}</p>
            </div>
            <h1 className="text-primary mt-0 mb-6">{product.name}</h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-secondary fill-secondary' : 'text-gray-200'}`} />
                ))}
              </div>
              <span className="text-sm text-gray-500 font-medium">(2 Customer Reviews)</span>
            </div>

            <p className="text-4xl font-bold text-primary mb-8">Rs. {product.price}</p>

            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Options */}
            <div className="space-y-8 mb-12">
              {product.options?.colors && (
                <div>
                  <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">Color</p>
                  <div className="flex gap-3">
                    {product.options.colors.map(color => (
                      <button key={color} className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium hover:border-primary transition-colors">
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {product.options?.sizes && (
                <div>
                  <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">Size</p>
                  <div className="flex gap-3">
                    {product.options.sizes.map(size => (
                      <button key={size} className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium hover:border-primary transition-colors">
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity and CTA */}
            <div className="flex flex-col sm:flex-row gap-6 items-stretch sm:items-center mb-12">
              <div className="flex items-center border-2 border-gray-100 rounded-xl h-14 px-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-gray-400 hover:text-primary transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-12 text-center font-bold text-primary">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-gray-400 hover:text-primary transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <Button size="lg" className="flex-1 rounded-xl shadow-xl shadow-primary/10" onClick={handleAddToCart} disabled={isAdded}>
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>
            </div>

            {/* Info Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-10 border-t border-b border-gray-100 mb-12">
              <div className="flex flex-col items-center text-center gap-3">
                <Truck className="w-6 h-6 text-secondary" />
                <span className="text-xs font-bold text-primary uppercase">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <RefreshCw className="w-6 h-6 text-secondary" />
                <span className="text-xs font-bold text-primary uppercase">Easy Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <ShieldCheck className="w-6 h-6 text-secondary" />
                <span className="text-xs font-bold text-primary uppercase">100% Authentic</span>
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <h4 className="font-bold text-primary flex items-center gap-2">
                <Info className="w-4 h-4 text-secondary" /> Specifications
              </h4>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-8">
                {product.features?.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-32 pt-20 border-t border-gray-100">
          <div className="max-w-3xl">
            <h2 className="text-primary mb-12">Customer Reviews</h2>
            <div className="space-y-12">
              {reviews.map((review, i) => (
                <div key={i} className="pb-10 border-b border-gray-50 last:border-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-bold text-primary mb-1">{review.name}</p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className={`w-3 h-3 ${j < review.rating ? 'text-secondary fill-secondary' : 'text-gray-200'}`} />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">&quot;{review.text}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-32 pt-20 border-t border-gray-100">
          <h2 className="text-primary mb-16">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
