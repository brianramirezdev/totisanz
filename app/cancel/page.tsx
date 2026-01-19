'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { XCircle, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CancelPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <main className="min-h-screen bg-background-soft flex items-center justify-center px-6 py-12">
            <div className="mx-auto max-w-2xl w-full">
                {/* Icono de cancelación con animación */}
                <div className={`mb-8 flex justify-center transition-all duration-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gray-400/20 rounded-full blur-2xl" />
                        <div className="relative bg-gray-500 rounded-full p-6">
                            <XCircle className="size-16 text-white" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>

                {/* Contenido principal */}
                <div className={`text-center space-y-6 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-800">
                        Pago Cancelado
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600">
                        No se realizó ningún cargo
                    </p>

                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-600 leading-relaxed">
                            Tu pago ha sido cancelado y no se ha realizado ningún cargo a tu tarjeta.
                            Puedes volver a intentarlo cuando quieras o explorar más productos en nuestra tienda.
                        </p>
                    </div>

                    {/* Botones de acción */}
                    <div className={`flex flex-col sm:flex-row gap-4 justify-center pt-6 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <Button
                            asChild
                            size="lg"
                            className="bg-accent-orange hover:bg-orange-600 text-white font-semibold gap-2"
                        >
                            <Link href="/#merch">
                                <ShoppingBag className="size-5" />
                                Volver a la Tienda
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-gray-300 hover:border-accent-orange hover:bg-accent-orange/10 hover:text-accent-orange font-semibold gap-2"
                        >
                            <Link href="/">
                                <ArrowLeft className="size-5" />
                                Ir al Inicio
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Footer info */}
                <div className={`mt-12 text-center text-sm text-gray-500 transition-all duration-700 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                    <p>¿Tuviste algún problema? Contáctanos en{' '}
                        <a
                            href="mailto:contacto@totisanz.com"
                            className="text-accent-orange hover:underline font-medium"
                        >
                            contacto@totisanz.com
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
