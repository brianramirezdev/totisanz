'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, CartContextType } from '@/types/cart';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Cargar carrito desde localStorage al montar
  useEffect(() => {
    const savedCart = localStorage.getItem('totisanz-cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
    setIsInitialized(true);
  }, []);

  // Guardar carrito en localStorage cuando cambie (solo si ya está inicializado)
  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem('totisanz-cart', JSON.stringify(items));
  }, [items, isInitialized]);

  // ... (addItem, removeItem, updateQuantity logic remains same, memoized)

  const addItem = React.useCallback((product: Product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Incrementar cantidad si ya existe
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Agregar nuevo item
      return [...currentItems, { ...product, quantity: 1 }];
    });
  }, []);

  const removeItem = React.useCallback((productId: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId));
  }, []);

  const updateQuantity = React.useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeItem]);

  const clearCart = React.useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isInitialized,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
