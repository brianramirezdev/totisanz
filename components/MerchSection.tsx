import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

const products = [
    { id: 1, name: 'Álbum Oficial', price: '25', image: '/images/album.webp', available: true, date: '14.02' },
    { id: 2, name: 'Gorra Oficial', price: '20', image: '/images/merch/product-2.jpg', available: false, date: '21.03' },
    { id: 3, name: 'Sudadera Oficial', price: '40', image: '/images/merch/product-3.jpg', available: false, date: '05.05' },
    { id: 4, name: 'Póster Edición Limitada', price: '15', image: '/images/merch/product-4.jpg', available: false, date: '18.07' },
    { id: 5, name: 'Llaveros Oficiales', price: '10', image: '/images/merch/product-5.jpg', available: false, date: '30.08' },
];

export default function MerchSection() {
    return (
        <section id="merch" className="bg-gray-50 px-6 py-8 md:py-16 m-4 rounded border border-gray-200">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-4 text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl xl:text-9xl">MERCH</h2>
                <p className="mb-16 text-2xl text-gray-400 md:text-3xl">Colección 2026</p>

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
                                            product.available ? 'bg-orange-500 ring-4 ring-orange-500/20 border-orange-200' : 'bg-gray-300'
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
                            className={`group min-h-full h-fit overflow-hidden border transition-all ${product.available ? 'hover:border-orange-500 hover:shadow-lg' : ''}  py-0`}
                        >
                            <CardContent className="p-0">
                                <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-b-xl">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className={`object-cover transition-transform duration-300 group-hover:scale-105 ${!product.available ? 'blur-2xl' : ''}`}
                                    />

                                    {!product.available && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-zinc-700 to-black ">
                                            {/* <p className="text-2xl font-bold text-white">Próximamente</p> */}
                                            <Lock className="size-8 text-white" />
                                        </div>
                                    )}
                                </div>

                                <div className="p-5 flex flex-col">
                                    <h3 className="mb-1 text-lg font-bold">{product.available ? product.name : 'Próximamente'}</h3>
                                    <div className="flex items-end justify-between">
                                        <p className="text-base text-gray-600">{product.available ? product.price + ' €' : '-'}</p>

                                        {product.available ? (
                                            <Button size="sm" className=" gap-2 bg-orange-500 font-semibold transition-all hover:bg-orange-600">
                                                <ShoppingBag className="size-4" />
                                            </Button>
                                        ) : (
                                            <Button size="sm" variant="ghost" disabled className="mt-auto text-gray-400 bg-gray-200">
                                                <Lock className="size-4" />
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
