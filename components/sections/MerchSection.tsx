'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, ShoppingBag, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const products = [
    { id: 1, name: 'Álbum Oficial', price: '25', priceId: 'price_album_oficial', image: '/images/album.webp', available: true, date: '14.02' },
    { id: 2, name: 'Gorra Oficial', price: '20', priceId: 'price_gorra_oficial', image: '/images/album.webp', available: false, date: '21.03' },
    { id: 3, name: 'Sudadera Oficial', price: '40', priceId: 'price_sudadera_oficial', image: '/images/album.webp', available: false, date: '05.05' },
    { id: 4, name: 'Póster Edición Limitada', price: '15', priceId: 'price_poster_limitada', image: '/images/album.webp', available: false, date: '18.07' },
    { id: 5, name: 'Llaveros Oficiales', price: '10', priceId: 'price_llaveros_oficiales', image: '/images/album.webp', available: false, date: '30.08' },
];

export default function MerchSection() {
    const [loadingProductId, setLoadingProductId] = useState<number | null>(null);

    const handleCheckout = async (priceId: string, productId: number) => {
        try {
            setLoadingProductId(productId);

            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ priceId }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error response:', errorData);
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
            setLoadingProductId(null);
        }
    };

    return (
        <section id="merch" className="bg-white px-6 py-8 md:py-16 mx-4 rounded border border-gray-200">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 md:mb-20 flex flex-col items-start">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">MERCH </h2>
                    <h3 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-500 uppercase">Colección 2026</h3>
                </div>

                {/* ───────────────── Timeline ───────────────── */}
                <div className="relative mb-20 overflow-x-auto scroll-smooth">
                    {/* ── Línea DESKTOP (no scroll) ── */}
                    <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gray-300 md:block" />

                    <div className="relative inline-flex py-6">
                        {/* ── Línea MÓVIL (crece con el contenido) ── */}
                        <div className="pointer-events-none absolute left-0 right-0 top-8 h-px bg-gray-300 md:hidden" />

                        {/* Items */}
                        <div className="relative flex gap-16 whitespace-nowrap px-4">
                            {products.map((product) => (
                                <div key={product.id} className="flex min-w-28 flex-col items-center select-none">
                                    {/* Punto */}
                                    <div
                                        className={`relative z-10 h-4 w-4 rounded-full border-2 border-gray-50 ${
                                            product.available ? 'bg-accent-orange ring-4 ring-accent-orange/20 border-orange-200' : 'bg-gray-300'
                                        }`}
                                    />

                                    {/* Fecha */}
                                    <span className="mt-2 text-sm font-semibold text-gray-700">{product.date}</span>

                                    {/* Label */}
                                    <span className={`mt-1 text-xs text-gray-500 ${!product.available ? 'blur-xs' : ''}`}>
                                        {!product.available ? 'próximamente' : product.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ───────────────── Productos ───────────────── */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            className={`group min-h-full h-fit overflow-hidden border transition-all ${
                                product.available ? 'hover:border-accent-orange hover:shadow-lg' : ''
                            }  py-0`}
                        >
                            <CardContent className="p-0 bg-background-soft">
                                <div className="relative aspect-square overflow-hidden rounded-b-xl">
                                    <Image
                                        width={500}
                                        height={500}
                                        src={product.image}
                                        alt={product.name}
                                        className={`object-cover transition-transform duration-300 group-hover:scale-105 ${!product.available ? 'blur-2xl' : ''}`}
                                    />

                                    {!product.available && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-zinc-700 to-black ">
                                            <Lock className="size-8 text-white" />
                                        </div>
                                    )}
                                </div>

                                <div className="p-5 flex flex-col">
                                    <h3 className="mb-1 text-lg font-bold">{product.available ? product.name : 'Próximamente'}</h3>
                                    <div className="flex items-end justify-between">
                                        <p className="text-base text-gray-600">{product.available ? product.price + ' €' : '-'}</p>

                                        {product.available ? (
                                            <Button
                                                type="button"
                                                onClick={() => handleCheckout(product.priceId, product.id)}
                                                disabled={loadingProductId === product.id}
                                                aria-label={`Comprar ${product.name}`}
                                                title={`Comprar ${product.name}`}
                                                size="sm"
                                                className=" gap-2 bg-accent-orange font-semibold transition-all hover:bg-orange-600 disabled:opacity-50"
                                            >
                                                {loadingProductId === product.id ? (
                                                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                                                ) : (
                                                    <ShoppingBag className="size-4" aria-hidden="true" />
                                                )}
                                            </Button>
                                        ) : (
                                            <Button
                                                type="button"
                                                aria-label={`${product.name} no disponible`}
                                                title="Producto no disponible"
                                                size="sm"
                                                variant="ghost"
                                                disabled
                                                className="mt-auto text-gray-400 bg-gray-200"
                                            >
                                                <Lock className="size-4" aria-hidden="true" />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}