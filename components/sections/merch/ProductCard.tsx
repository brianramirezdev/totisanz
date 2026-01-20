'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, ShoppingBag, Loader2, Check } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/lib/data/merch';

interface ProductCardProps {
    product: Product;
    loadingProductId: number | null;
    onAddToCart: (product: Product) => void;
}

export function ProductCard({
    product,
    loadingProductId,
    onAddToCart
}: ProductCardProps) {
    const [isAdded, setIsAdded] = useState(false);

    const handleClick = () => {
        onAddToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 800);
    };

    return (
        <Card
            className={`group min-h-full h-fit overflow-hidden border transition-all ${
                product.available ? 'hover:border-accent-orange lg:hover:shadow-lg' : ''
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
                                onClick={handleClick}
                                disabled={loadingProductId === product.id || isAdded}
                                aria-label={`Añadir ${product.name} al carrito`}
                                title={`Añadir ${product.name} al carrito`}
                                size="sm"
                                className={`gap-2 font-semibold transition-all duration-300 disabled:opacity-100 ${
                                    isAdded
                                    ? 'bg-green-500 hover:bg-green-600 text-white'
                                    : 'bg-accent-orange hover:bg-orange-600 text-white'
                                }`}
                            >
                                {loadingProductId === product.id ? (
                                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                                ) : isAdded ? (
                                    <Check className="size-4 scale-110" aria-hidden="true" />
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
    );
}
