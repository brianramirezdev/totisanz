'use client';

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from '@/lib/data/merch';
import { ProductCard } from '@/components/sections/merch/ProductCard';

export default function MerchSection() {
    const [loadingProductId, setLoadingProductId] = useState<number | null>(null);

    const { addItem } = useCart();

    const handleAddToCart = (product: typeof products[0]) => {
        setLoadingProductId(product.id);

            addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                priceId: product.priceId,
                image: product.image,
                available: product.available,
                date: product.date
            });
            setLoadingProductId(null)
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

                {/* ───────────────── Desktop Grid ───────────────── */}
                <div className="hidden lg:grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            loadingProductId={loadingProductId}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>

                {/* ───────────────── Mobile Carousel ───────────────── */}
                <div className="block lg:hidden w-full px-8 sm:px-12">
                     <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                     >
                        <CarouselContent>
                             {products.map((product) => (
                                <CarouselItem key={product.id} className="basis-full md:basis-1/2">
                                    <div className="p-1">
                                        <ProductCard
                                            product={product}
                                            loadingProductId={loadingProductId}
                                            onAddToCart={handleAddToCart}
                                        />
                                    </div>
                                </CarouselItem>
                             ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                     </Carousel>
                </div>
            </div>
        </section>
    );
}