import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { truncate } from 'node:fs/promises';

interface ConcertCardProps {
    date: string;
    month: string;
    city: string;
    venue: string;
    upcoming?: boolean;
}

export function ConcertCard({ date, month, city, venue, upcoming = true }: ConcertCardProps) {
    return (
        <div className="relative overflow-hidden">
            {/* Overlay PRÓXIMAMENTE mejorado */}
            {upcoming && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/40 backdrop-blur-[2px]">
                    <div className="relative">
                        {/* Sombra de texto para mejor legibilidad */}
                        <span className="absolute inset-0  text-3xl font-bold uppercase tracking-widest text-gray-900/20 blur-sm sm:text-3xl md:text-6xl" aria-hidden="true">
                            Próximamente
                        </span>
                        <span className="relative text-3xl font-bold uppercase tracking-widest text-gray-900 sm:text-3xl md:text-6xl">Próximamente</span>
                    </div>
                </div>
            )}

            {/* Card con blur mejorado */}
            <div
                className={`flex flex-col gap-4 border-b border-gray-200 p-5 transition-all sm:flex-row sm:items-center sm:justify-between ${
                    upcoming ? 'blur-sm scale-[0.98] opacity-60 select-none' : 'hover:border-accent-orange'
                }`}
            >
                {/* Fecha */}
                <div className="flex items-center justify-between sm:block sm:justify-start">
                    <div className="flex items-baseline gap-2 sm:gap-3 sm:min-w-40">
                        <span className="text-3xl font-bold tabular-nums sm:text-4xl md:text-5xl">{upcoming ? 'XX' : date}</span>
                        <span className="text-xs font-medium uppercase text-gray-500 sm:text-sm">{upcoming ? 'xxxx' : month}</span>
                    </div>

                    {/* Botón móvil */}
                    {!upcoming && (
                        <div className="sm:hidden">
                            <Button
                                variant="ghost"
                                className="px-0 font-semibold text-gray-900 transition-all hover:bg-transparent hover:text-accent-orange hover:underline hover:underline-offset-4"
                            >
                                COMPRAR
                            </Button>
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="flex-1 sm:px-6 md:px-8">
                    <h3 className="text-lg font-bold sm:text-xl md:text-2xl">{upcoming ? 'XXXX' : city}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-600 md:text-base">
                        <MapPin className="h-4 w-4" />
                        {upcoming ? 'xxxxxx' : venue}
                    </p>
                </div>

                {/* Botón desktop */}
                <div className="hidden sm:block">
                    <Button
                        variant="ghost"
                        className="px-0 font-semibold text-gray-900 transition-all hover:bg-transparent hover:text-accent-orange hover:underline hover:underline-offset-4"
                    >
                        COMPRAR
                    </Button>
                </div>
            </div>
        </div>
    );
}
