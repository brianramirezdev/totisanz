'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Package, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useCart } from '@/contexts/CartContext';

export default function SuccessPage() {
    const [mounted, setMounted] = useState(false);
    const { clearCart, isInitialized } = useCart();

    useEffect(() => {
        setMounted(true);
        if (isInitialized) {
            clearCart();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInitialized]);

    return (
        <main className="min-h-screen bg-background-soft flex items-center justify-center px-6 py-12">
            <div className="mx-auto max-w-2xl w-full">
                {/* Icono de éxito con animación */}
                <div className={`mb-8 flex justify-center transition-all duration-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    <div className="relative">
                        <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl animate-pulse" />
                        <div className="relative bg-green-500 rounded-full p-6">
                            <CheckCircle2 className="size-16 text-white" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>

                {/* Contenido principal */}
                <div className={`text-center space-y-6 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        ¡Pago Exitoso!
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600">
                        Gracias por tu compra
                    </p>

                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 space-y-4">
                        <div className="flex items-start gap-4">
                            <Package className="size-6 text-accent-orange mt-1 shrink-0" />
                            <div className="text-left">
                                <h3 className="font-semibold text-lg mb-2">¿Qué sigue ahora?</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent-orange mt-1">•</span>
                                        <span>Recibirás un email de confirmación con los detalles de tu pedido</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent-orange mt-1">•</span>
                                        <span>Procesaremos tu pedido en las próximas 24-48 horas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent-orange mt-1">•</span>
                                        <span>Te enviaremos el número de seguimiento cuando tu pedido sea enviado</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Mensaje personalizado */}
                    <div className="bg-accent-orange/10 border border-accent-orange/20 rounded-lg p-6">
                        <p className="text-gray-700 italic">
                            "Gracias por apoyar mi música. Cada compra significa mucho para mí."
                        </p>
                        <p className="text-accent-orange font-semibold mt-2">— Toti Sanz</p>
                    </div>

                    {/* Botones de acción */}
                    <div className={`flex flex-col sm:flex-row gap-4 justify-center pt-6 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <Button
                            asChild
                            size="lg"
                            className="bg-accent-orange hover:bg-orange-600 text-white font-semibold gap-2"
                        >
                            <Link href="/#merch">
                                Seguir Comprando
                                <ArrowRight className="size-5" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-gray-300 hover:border-accent-orange hover:bg-accent-orange/10 hover:text-accent-orange font-semibold gap-2"
                        >
                            <Link href="/">
                                <Home className="size-5" />
                                Volver al Inicio
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Footer info */}
                <div className={`mt-12 text-center text-sm text-gray-500 transition-all duration-700 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                    <p>¿Necesitas ayuda? Contáctanos en{' '}
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
