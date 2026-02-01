'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Button from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CartDrawer() {
  const {
    items,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 220, damping: 28 }}
            className="fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-white shadow-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between py-3 px-6 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <p className=" text-lg mt-5 text-primary">Shopping Cart</p>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag className="w-14 h-14 text-gray-200 mb-4" />
                  <p className="text-gray-500">Your cart is currently empty</p>
                  <Button
                    variant="ghost"
                    className="mt-4"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* Image */}
                    <div className="w-20 h-20 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex justify-between gap-4">
                        <h3 className="text-sm text-primary leading-snug line-clamp-2">
                          {item.name}
                        </h3>
                        <span className="text-sm text-primary">
                          Rs. {item.price}
                        </span>
                      </div>

                      <p className="text-xs text-gray-400 mt-1">
                        {item.category}
                      </p>

                      {/* Actions */}
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-gray-200 overflow-hidden">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-3 py-1 hover:bg-gray-50"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-3 py-1 hover:bg-gray-50"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-gray-400 hover:text-red-500 transition"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 bg-gray-50 p-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm text-gray-600">Subtotal</span>
                  <span className="text-xl text-primary">
                    Rs. {totalPrice}
                  </span>
                </div>

                <Link href="/checkout" onClick={() => setIsDrawerOpen(false)}>
                  <Button size="lg" className="w-full rounded-full">
                    Proceed to Checkout
                  </Button>
                </Link>

                <p className="mt-4 text-center text-xs text-gray-400">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
