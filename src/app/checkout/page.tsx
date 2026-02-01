'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import FloatingInput from '@/components/ui/FloatingInput';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { ShoppingBag, CheckCircle2, ChevronRight, CreditCard, User, Truck } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [step, setStep] = useState(2); // 1: Cart, 2: Info, 3: Payment
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
    if (step === 2) {
      setStep(3);
      window.scrollTo(0, 0);
    } else {
      // Simulate order placement
      clearCart();
      router.push('/thank-you');
    }
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

  const steps = [
    { id: 1, name: 'Cart', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 2, name: 'Information', icon: <User className="w-4 h-4" /> },
    { id: 3, name: 'Payment', icon: <CreditCard className="w-4 h-4" /> },
    { id: 4, name: 'Confirmation', icon: <CheckCircle2 className="w-4 h-4" /> },
  ];

  return (
    <div className="pb-20 bg-gray-50/50">
      <div className="container-custom pt-32">
        {/* Progress Indicator */}
        <div className="mb-20">
          <div className="flex items-center justify-between max-w-2xl mx-auto relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-secondary -z-10 -translate-y-1/2 transition-all duration-500"
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            />
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                  step >= s.id ? "bg-secondary text-white shadow-lg shadow-secondary/20" : "bg-white text-gray-400 border-2 border-gray-100"
                )}>
                  {s.icon}
                </div>
                <span className={cn(
                  "text-xs font-bold uppercase tracking-widest",
                  step >= s.id ? "text-primary" : "text-gray-400"
                )}>
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-primary mb-12 text-center">
          {step === 2 ? "Shipping Information" : "Payment & Review"}
        </h1>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2 space-y-12">
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
              {step === 2 ? (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-primary mt-0 mb-8">Where should we send your eyewear?</h2>
                  <div className="space-y-6">
                    <FloatingInput
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                    <div className="grid grid-cols-2 gap-6">
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
                    <div className="grid grid-cols-2 gap-6">
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
                </div>
              ) : (
                <div className="space-y-10">
                  <h2 className="text-2xl font-bold text-primary mt-0 mb-8">Review & Payment</h2>

                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex gap-6 items-start">
                    <Truck className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                       <p className="font-bold text-primary mb-1">Shipping to:</p>
                       <p className="text-sm text-gray-600">
                         {formData.firstName} {formData.lastName}<br />
                         {formData.address}, {formData.city}<br />
                         {formData.phone}
                       </p>
                       <button onClick={() => setStep(2)} className="text-secondary text-xs font-bold mt-4 hover:underline">Edit Shipping</button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-primary mb-6">Choose Payment Method</h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between p-6 border-2 border-primary bg-primary/5 rounded-2xl cursor-pointer">
                        <div className="flex gap-4 items-center">
                          <div className="w-5 h-5 rounded-full border-4 border-primary bg-white" />
                          <div>
                            <p className="font-bold text-primary">Cash on Delivery (COD)</p>
                            <p className="text-xs text-gray-500">Available across all major cities in Nepal.</p>
                          </div>
                        </div>
                      </label>
                      <label className="flex items-center justify-between p-6 border border-gray-100 rounded-2xl opacity-50 cursor-not-allowed">
                        <div className="flex gap-4 items-center">
                          <div className="w-5 h-5 rounded-full border border-gray-200 bg-white" />
                          <div>
                            <p className="font-bold text-gray-400">Online Payment (eSewa/Khalti)</p>
                            <p className="text-xs text-gray-400">Currently unavailable for maintenance.</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full mt-12" size="lg">
                {step === 2 ? "Continue to Payment" : "Complete Order"}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-10 rounded-3xl border border-gray-100 sticky top-32 shadow-sm">
              <h2 className="text-xl font-bold text-primary mt-0 mb-8">Order Summary</h2>
              <div className="space-y-6 mb-8">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-primary text-sm line-clamp-1">{item.name}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                        <span className="text-sm font-bold text-primary">Rs. {item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-50 pt-8 space-y-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-medium">Rs. {totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-2xl font-bold text-primary pt-6 border-t border-gray-100 mt-4">
                  <span>Total</span>
                  <span>Rs. {totalPrice}</span>
                </div>
              </div>
              <p className="text-[10px] text-center text-gray-400 mt-8">
                By placing your order, you agree to our Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
