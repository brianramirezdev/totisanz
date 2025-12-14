import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const concerts = [
    { date: '30', month: 'enero', city: 'Gijón', venue: 'Teatro Albéniz' },
    { date: '31', month: 'enero', city: 'León', venue: 'Studio 54' },
    { date: '07', month: 'febrero', city: 'Valencia', venue: 'Joy Valencia' },
    { date: '19', month: 'febrero', city: 'Pamplona', venue: 'Zentral Kafe Teatro' },
    { date: '20', month: 'febrero', city: 'Valladolid', venue: 'Sala Lava' },
    { date: '06', month: 'marzo', city: 'Málaga', venue: 'Sala Paris 15' },
];

export default function ConcertsSection() {
    return (
        <section id="conciertos" className="bg-gray-50 border-t border-b border-gray-200 px-4 py-16 sm:px-6 md:py-32">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl xl:text-9xl">CONCIERTOS</h2>

                <p className="mb-12 text-lg text-gray-400 sm:text-xl md:mb-16 md:text-3xl">2026</p>

                <div className="grid gap-12 lg:gap-16">
                    {/* Video lateral */}
                    {/*
      <div className="order-2 lg:order-1">
        <div className="sticky top-24 overflow-hidden rounded-xl shadow-2xl">
          <div className="aspect-9/16">
            <iframe
              src="https://www.youtube.com/embed/ZVOvuItRNvs?start=2&autoplay=1&mute=1&loop=1&playlist=ZVOvuItRNvs"
              className="h-full w-full"
              allowFullScreen
              title="Toti Sanz en vivo"
            />
          </div>
        </div>
      </div>
      */}

                    {/* Lista de conciertos */}
                    <div className="order-1 lg:order-2">
                        {concerts.map((concert, index) => (
                            <div
                                key={index}
                                className="group flex flex-col gap-4 border-b border-gray-200 py-5 transition-all hover:border-orange-500 sm:flex-row sm:items-center sm:justify-between"
                            >
                                {/* Fila superior en móvil: fecha + comprar */}
                                <div className="flex items-center justify-between sm:block sm:justify-start">
                                    {/* Fecha */}
                                    <div className="flex items-baseline gap-2 sm:gap-3 sm:min-w-40">
                                        <span className="text-3xl font-bold tabular-nums sm:text-4xl md:text-5xl">{concert.date}</span>
                                        <span className="text-xs font-medium uppercase text-gray-500 sm:text-sm">{concert.month}</span>
                                    </div>

                                    {/* Botón móvil */}
                                    <div className="sm:hidden">
                                        <Button
                                            variant="ghost"
                                            className="px-0 font-semibold text-gray-900 transition-all hover:bg-transparent hover:text-orange-500 hover:underline hover:underline-offset-4"
                                        >
                                            COMPRAR
                                        </Button>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1 sm:px-6 md:px-8">
                                    <h3 className="text-lg font-bold sm:text-xl md:text-2xl">{concert.city}</h3>
                                    <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-600 md:text-base">
                                        <MapPin className="h-4 w-4" />
                                        {concert.venue}
                                    </p>
                                </div>

                                {/* Botón desktop */}
                                <div className="hidden sm:block">
                                    <Button
                                        variant="ghost"
                                        className="px-0 font-semibold text-gray-900 transition-all hover:bg-transparent hover:text-orange-500 hover:underline hover:underline-offset-4"
                                    >
                                        COMPRAR
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
