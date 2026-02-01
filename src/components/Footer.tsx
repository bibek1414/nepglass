import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-bold mb-6 block">NepGlass</Link>
          <p className="text-gray-300 text-sm leading-relaxed">
            Specializing in premium lens solutions and stylish frames designed for Nepal.
            Elevating your look and protecting your vision.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-semibold mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><Link href="/products" className="hover:text-secondary transition-colors">All Products</Link></li>
            <li><Link href="/categories/sunglasses" className="hover:text-secondary transition-colors">Sunglasses</Link></li>
            <li><Link href="/categories/frames" className="hover:text-secondary transition-colors">Frames</Link></li>
            <li><Link href="/categories/lenses" className="hover:text-secondary transition-colors">Lenses</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><Link href="/faqs" className="hover:text-secondary transition-colors">FAQs</Link></li>
            <li><Link href="/track-order" className="hover:text-secondary transition-colors">Track Order</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-6">Policies</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-secondary transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/shipping-and-returns" className="hover:text-secondary transition-colors">Shipping & Returns</Link></li>
          </ul>
        </div>
      </div>

      <div className="container-custom mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} NepGlass. All rights reserved.</p>
        <p>Handcrafted for Nepal 🇳🇵</p>
      </div>
    </footer>
  );
}
