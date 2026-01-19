'use client';

import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(item => ({
            priceId: item.priceId,
            quantity: item.quantity
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error al crear checkout:', error);
      alert('Hubo un error al procesar el pago. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background-soft py-12 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/#merch"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-accent-orange transition-colors mb-4"
          >
            <ArrowLeft className="size-4" />
            Volver a la tienda
          </Link>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Tu Carrito
          </h1>
          <p className="text-gray-600 mt-2">
            {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
          </p>
        </div>

        {items.length === 0 ? (
          /* Estado vacío */
          <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
            <ShoppingCart className="size-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Parece que aún no has agregado productos a tu carrito.
              ¡Explora nuestra tienda y encuentra algo que te guste!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent-orange hover:bg-orange-600 font-semibold"
            >
              <Link href="/#merch">
                <ShoppingCart className="size-5 mr-2" />
                Ir a la Tienda
              </Link>
            </Button>
          </div>
        ) : (
          /* Carrito con productos */
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lista de productos */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-accent-orange/30 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* Imagen */}
                    <div className="relative size-32 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>

                    {/* Info del producto */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-2xl font-bold text-accent-orange mb-4">
                        {item.price} €
                      </p>

                      <div className="flex items-center gap-4">
                        {/* Control de cantidad */}
                        <div className="flex items-center gap-3 bg-background-soft rounded-lg p-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 hover:bg-white"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="size-4" />
                          </Button>
                          <span className="text-base sm:text-lg font-semibold w-8 sm:w-12 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 hover:bg-white"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="size-4" />
                          </Button>
                        </div>

                        {/* Botón eliminar */}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:bg-red-50 hover:text-red-700"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="size-4 mr-2" />
                          Eliminar
                        </Button>
                      </div>

                      {/* Subtotal */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                          Subtotal:
                          <span className="font-bold text-gray-900 ml-2">
                            {(parseFloat(item.price) * item.quantity).toFixed(2)} €
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Botón limpiar carrito */}
              <Button
                variant="outline"
                className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                onClick={clearCart}
              >
                <Trash2 className="size-4 mr-2" />
                Vaciar Carrito
              </Button>
            </div>

            {/* Resumen del pedido */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-6">
                <h2 className="text-2xl font-bold mb-6">Resumen del Pedido</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({totalItems} {totalItems === 1 ? 'producto' : 'productos'})</span>
                    <span className="font-semibold">{totalPrice.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Envío</span>
                    <span className="font-semibold">Calculado en checkout</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-accent-orange">{totalPrice.toFixed(2)} €</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-accent-orange hover:bg-orange-600 font-semibold mb-3"
                  size="lg"
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="size-5 mr-2 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="size-5 mr-2" />
                      Proceder al Pago
                    </>
                  )}
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                >
                  <Link href="/#merch">Seguir Comprando</Link>
                </Button>

                {/* Info adicional */}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm text-gray-600">
                  <p className="flex items-start gap-2">
                    <span className="text-accent-orange mt-0.5">✓</span>
                    <span>Pago seguro con Stripe</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-accent-orange mt-0.5">✓</span>
                    <span>Envío en 24-48 horas</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-accent-orange mt-0.5">✓</span>
                    <span>Devoluciones en 30 días</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
