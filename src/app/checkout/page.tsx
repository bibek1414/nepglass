'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import FloatingInput from '@/components/ui/FloatingInput';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { ShoppingBag, ChevronRight } from 'lucide-react';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    clearCart();
    router.push('/thank-you');
  };

  if (items.length === 0) {
    return (
      <div className="container-custom py-40 text-center">
        <ShoppingBag className="w-16 h-16 text-gray-200 mx-auto mb-6" />
        <h1 className="text-primary">Your cart is empty</h1>
        <Button className="mt-8" onClick={() => router.push('/products')}>Browse Products</Button>
      </div>
    );
  }

  return (
    <div className="pb-20 bg-gray-50/50">
      <div className="container-custom pt-32">
        <h1 className="text-primary mb-12">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2 space-y-12">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-gray-100">
              <h2 className="text-xl font-bold text-primary mt-0 mb-8">Shipping Information</h2>
              <div className="space-y-6">
                <FloatingInput
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <FloatingInput
                    label="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                  />
                  <FloatingInput
                    label="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>
                <FloatingInput
                  label="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <FloatingInput
                    label="City"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    required
                  />
                  <FloatingInput
                    label="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h2 className="text-xl font-bold text-primary mt-0 mb-8">Payment Method</h2>
                <div className="p-4 border-2 border-primary bg-primary/5 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="font-bold text-primary">Cash on Delivery (COD)</p>
                    <p className="text-xs text-gray-500">Pay when you receive your eyewear.</p>
                  </div>
                  <div className="w-5 h-5 rounded-full border-4 border-primary bg-white" />
                </div>
              </div>

              <Button type="submit" className="w-full mt-12" size="lg">
                Place Order
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 sticky top-32">
              <h2 className="text-xl font-bold text-primary mt-0 mb-8">Order Summary</h2>
              <div className="space-y-4 mb-8">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.name} (x{item.quantity})</span>
                    <span className="font-medium text-primary">Rs. {item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-4 space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>Rs. {totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-primary pt-4 border-t border-gray-100">
                  <span>Total</span>
                  <span>Rs. {totalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
