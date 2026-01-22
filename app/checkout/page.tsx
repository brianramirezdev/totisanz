'use client';

import { useEffect, useState, useRef } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe/frontend';
import CheckoutForm from '@/components/CheckoutForm';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ShoppingBag } from 'lucide-react';

export default function CheckoutPage() {
    const { items, totalPrice, isInitialized } = useCart();
    const [clientSecret, setClientSecret] = useState('');
    const hasFetched = useRef(false);

    useEffect(() => {
        if (!isInitialized || items.length === 0 || hasFetched.current) return;

        // Mark as fetched to prevent double execution (React Strict Mode compatibility)
        hasFetched.current = true;

        // Create PaymentIntent as soon as the page loads
        fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret);
                } else {
                    // Reset if error so we can retry? Or handle error.
                    // For now, if no clientSecret, logic stays broken, but at least no double charge intent.
                    console.error('Failed to init payment intent', data);
                    hasFetched.current = false; // Allow retry
                }
            })
            .catch((err) => {
                console.error('Error fetching payment intent', err);
                hasFetched.current = false;
            });
    }, [items, isInitialized]);

    const appearance = {
        theme: 'stripe' as const,
        variables: {
            colorPrimary: '#ff5a1f', // accent-orange likely
        },
    };

    const options = {
        clientSecret,
        appearance,
    };

    if (!isInitialized) return null;

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-accent-orange mb-8 transition-colors">
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Volver a la tienda
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column: Order Summary */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <div className="bg-background-soft rounded-2xl p-6 lg:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <ShoppingBag className="w-6 h-6 text-accent-orange" />
                                Resumen del Pedido
                            </h2>

                            <div className="space-y-6">
                                {items.length === 0 ? (
                                    <p className="text-gray-500">No hay productos en el carrito.</p>
                                ) : (
                                    items.map((item) => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                                <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-gray-900">{(parseFloat(item.price) * item.quantity).toFixed(2)} €</p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>{totalPrice.toFixed(2)} €</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Envío</span>
                                    <span className="text-green-600 font-medium">Gratis</span>
                                </div>
                                <div className="flex justify-between text-2xl font-bold pt-4 border-t border-gray-200">
                                    <span>Total</span>
                                    <span className="text-accent-orange">{totalPrice.toFixed(2)} €</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Payment Form */}
                    <div className="order-1 lg:order-2">
                        <div className="sticky top-8">
                            <div className="mb-6">
                                <h1 className="text-3xl font-bold mb-2">Pago Seguro</h1>
                                <p className="text-gray-500">Completa tus datos para finalizar la compra.</p>
                            </div>

                            {clientSecret ? (
                                <Elements options={options} stripe={stripePromise}>
                                    <CheckoutForm />
                                </Elements>
                            ) : (
                                <div className="bg-background-soft rounded-2xl p-8 border border-gray-100 flex items-center justify-center min-h-[300px]">
                                    {items.length > 0 ? (
                                        <div className="animate-pulse flex flex-col items-center">
                                            <div className="h-4 bg-gray-200 rounded w-32 mb-4"></div>
                                            <div className="h-10 bg-gray-200 rounded w-full"></div>
                                        </div>
                                    ) : (
                                        <p className="text-gray-500">El carrito está vacío.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
