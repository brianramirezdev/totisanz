// components/HeroSection.tsx
import Image from 'next/image';
import BookButton from './BookButton';

export default function HeroSection() {
    return (
        <section id="inicio" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
            <BookButton />

            {/* Contenedor específico para la imagen de fondo */}
            <div className="absolute inset-0 z-10">
                <Image src="/images/hero.avif" alt="Toti Sanz" fill priority className="object-cover" sizes="100vw" />
            </div>

            <div className="absolute right-12 top-1/2 z-10 -translate-y-1/2 flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
                <div>
                    <h1 className="mr-32 text-right text-6xl font-bold text-white md:text-7xl lg:text-8xl xl:text-9xl">TOTI</h1>
                    <h2 className="text-right text-6xl font-bold text-white md:text-7xl lg:text-8xl xl:text-9xl">SANZ</h2>
                </div>

                <Image src="/images/firma.png" alt="Firma Toti Sanz" width={96} height={96} className="mix-blend-screen" />
            </div>
        </section>
    );
}
