'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus, Trash2, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function CartSheet() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-accent-orange/10 hover:text-accent-orange"
          aria-label="Abrir carrito"
        >
          <ShoppingCart className="size-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent-orange text-white text-xs font-bold rounded-full size-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg flex flex-col p-8">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Tu Carrito</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingCart className="size-16 text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Tu carrito está vacío
            </h3>
            <p className="text-gray-500 mb-6">
              Agrega productos para comenzar tu compra
            </p>
            <Button
              asChild
              onClick={() => setOpen(false)}
              className="bg-accent-orange hover:bg-orange-600"
            >
              <Link href="/#merch">Ver Productos</Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Lista de productos */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-background-soft rounded-lg border border-gray-200"
                >
                  <div className="relative size-20 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm mb-1 truncate">{item.name}</h4>
                    <p className="text-accent-orange font-bold">{item.price} €</p>

                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-7"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="size-3" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-7"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="size-3" />
                      </Button>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 hover:bg-red-50 hover:text-red-600"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Footer con total y checkout */}
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-accent-orange">{totalPrice.toFixed(2)} €</span>
              </div>

              <div className="space-y-2">
                <Button
                  asChild
                  className="w-full bg-accent-orange hover:bg-orange-600 font-semibold"
                  size="lg"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/checkout">Tramitar Pedido</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/#merch">Seguir Comprando</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
