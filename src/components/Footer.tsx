import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="text-2xl font-bold tracking-tight block">
            Nep<span className="text-secondary">Glass</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Based in Nepal, we specialize in premium lens solutions, stylish frames, and trendsetting sunglasses designed to protect your vision.
          </p>
          <div className="flex gap-4">
             {/* Social placeholders */}
             <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-secondary transition-colors cursor-pointer" />
             <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-secondary transition-colors cursor-pointer" />
             <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-secondary transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Shop Collections</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/products" className="hover:text-secondary transition-colors">All Products</Link></li>
            <li><Link href="/categories/sunglasses" className="hover:text-secondary transition-colors">Sunglasses</Link></li>
            <li><Link href="/categories/frames" className="hover:text-secondary transition-colors">Stylish Frames</Link></li>
            <li><Link href="/categories/lenses" className="hover:text-secondary transition-colors">Premium Lenses</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/blog" className="hover:text-secondary transition-colors">Vision Insights (Blog)</Link></li>
            <li><Link href="/about" className="hover:text-secondary transition-colors">Our Story</Link></li>
            <li><Link href="/faqs" className="hover:text-secondary transition-colors">FAQs</Link></li>
            <li><Link href="/track-order" className="hover:text-secondary transition-colors">Track Order</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Policies</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-secondary transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/shipping-and-returns" className="hover:text-secondary transition-colors">Shipping & Returns</Link></li>
          </ul>
        </div>
      </div>

      <div className="container-custom mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
        <p>© {new Date().getFullYear()} NepGlass. All rights reserved.</p>
        <p className="flex items-center gap-2">
           Handcrafted for Nepal 🇳🇵
        </p>
      </div>
    </footer>
  );
}
