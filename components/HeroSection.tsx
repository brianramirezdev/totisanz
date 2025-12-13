import Image from 'next/image';
import BookButton from './BookButton';

export default function HeroSection() {
    return (
        <section id="inicio" className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Botón reservar */}
            <BookButton />

            {/* Imagen de fondo */}
            <div className="absolute inset-0">
                <Image src="/images/hero.avif" alt="Toti Sanz" fill priority sizes="100vw" className="object-cover" />
                {/* Overlay para legibilidad */}
                <div className="absolute inset-0 bg-black/20 md:bg-black/10" />
            </div>

            {/* Contenido */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 md:items-center md:justify-end md:px-12 md:pb-0">
                <div
                    className="
      mx-auto
      flex
      w-fit
      flex-col
      items-center
      gap-4
      text-center
      md:mx-0
      md:items-end
      md:text-right
      lg:gap-6
    "
                >
                    {/* Texto */}
                    <div className="leading-none">
                        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">TOTI</h1>
                        <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">SANZ</h2>
                    </div>

                    {/* Firma */}
                    <Image src="/images/firma.png" alt="Firma Toti Sanz" width={120} height={120} className="mt-2 mix-blend-screen md:mt-4" />
                </div>
            </div>
        </section>
    );
}
