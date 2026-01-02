import { ConcertCard } from '../ui/concert-card';

// const concerts = [
//     { date: '30', month: 'enero', city: 'Gijón', venue: 'Teatro Albéniz' },
//     { date: '31', month: 'enero', city: 'León', venue: 'Studio 54' },
//     { date: '07', month: 'febrero', city: 'Valencia', venue: 'Joy Valencia' },
//     { date: '19', month: 'febrero', city: 'Pamplona', venue: 'Zentral Kafe Teatro' },
// { date: '20', month: 'febrero', city: 'Valladolid', venue: 'Sala Lava' },
//     { date: '06', month: 'marzo', city: 'Málaga', venue: 'Sala Paris 15' },
// ];
const concerts = [
    { date: '30', month: 'enero', city: 'Gijón', venue: 'Teatro Albéniz', upcoming: true },
    { date: '31', month: 'enero', city: 'León', venue: 'Studio 54', upcoming: true },
    { date: '20', month: 'febrero', city: 'Valladolid', venue: 'Sala Lava' },
];

export default function ConcertsSection() {
    return (
        <section id="conciertos" className="bg-white border-t border-b border-gray-200 px-4 py-8 sm:px-6 md:py-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-6 md:mb-12 flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-6">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">CONCIERTOS </h2>
                    <span className="hidden sm:block text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-gray-500">∗ </span>
                    <h3 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-gray-500">2026</h3>
                </div>

                <div className="grid gap-12 lg:gap-16">
                    {/* Lista de conciertos */}
                    <div className="order-1 lg:order-2">
                        {concerts.map((concert, index) => (
                            <ConcertCard key={index} date={concert.date} month={concert.month} city={concert.city} venue={concert.venue} upcoming={concert.upcoming} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
