import Image from 'next/image';
import BookButton from './BookButton';
import CircularText from './ui/circular-text';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { SiInstagram, SiYoutube, SiSpotify, SiTiktok } from '@icons-pack/react-simple-icons';

const socialLinks = [
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/toti.sanz/',
        icon: SiInstagram,
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/@TotiSanz',
        icon: SiYoutube,
    },
    {
        name: 'Spotify',
        href: 'https://open.spotify.com/intl-es/artist/0RWI1GOUTOVYETw5uVKmRC',
        icon: SiSpotify,
    },
    {
        name: 'TikTok',
        href: 'https://www.tiktok.com/@toti.sanz',
        icon: SiTiktok,
    },
];

export default function HeroSection() {
    return (
        <section id="inicio" className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Botón reservar */}
            {/* <BookButton /> */}
            <Link href="#contacto" className="absolute z-10 bottom-48 left-1/2 -translate-x-1/2 md:bottom-20 md:left-auto md:right-20 md:translate-x-0">
                <CircularText text="TOTI*SANZ*RESÉRVAME*" onHover="slowDown" spinDuration={20} />
                <ArrowDown className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white size-10" />
            </Link>

            <div className="hidden absolute bottom-48 right-1/2 z-10 w-fit -translate-x-1/2 rounded bg-white/90 px-2 py-1 shadow-lg backdrop-blur md:bottom-20 md:left-20 md:translate-x-0 md:flex gap-3">
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="group flex size-10 items-center justify-center rounded-full text-zinc-700 transition-all duration-300 hover:-translate-y-1  hover:text-orange-500 md:size-14"
                    >
                        <social.icon className="size-6 transition-transform duration-300 group-hover:scale-110 md:size-7" />
                    </a>
                ))}
            </div>

            {/* Imagen de fondo */}
            <div className="absolute inset-0">
                <Image src="/images/hero.jpg" unoptimized alt="Toti Sanz" fill priority sizes="100vw" className="object-cover opacity-85" />
            </div>

            <div className="absolute top-24 left-0 z-10 flex w-full flex-col items-center gap-4 px-6 sm:top-28 md:top-32 md:flex-row md:items-start md:justify-between md:px-16">
                {/* TEXTO – nombre */}
                <h1 className="text-white font-extrabold tracking-tight leading-none text-5xl md:text-6xl lg:text-7xl">TOTI SANZ</h1>

                {/* Quote móvil */}
                <p className="max-w-xs text-center text-sm italic text-white/80 md:hidden">“Escribo sobre lo que siento, sobre mis vivencias.”</p>

                {/* Quote desktop */}
                <div className="hidden max-w-xs md:block self-center text-right">
                    <blockquote className="border-l-2 border-white/40 pl-4 text-base italic text-white/80 lg:text-lg">
                        “Escribo sobre lo que siento, sobre mis vivencias.”
                    </blockquote>
                    <span className="mt-2 block text-xs uppercase tracking-wider text-white/50">— Toti Sanz</span>
                </div>
            </div>
        </section>
    );
}

//OLD
<section id="inicio" className="relative min-h-screen w-full overflow-hidden bg-black">
    {/* Botón reservar */}
    <BookButton />

    {/* Imagen de fondo */}
    <div className="absolute inset-0">
        <Image src="/images/hero.avif" alt="Toti Sanz" fill priority sizes="100vw" className="object-cover" />
        {/* Overlay para legibilidad */}
    </div>

    {/* Contenido */}
    <div className="relative z-10 mx-auto flex min-h-dvh max-w-7xl items-end px-6 pb-30 md:items-center md:justify-end md:px-12 md:pb-0">
        <div className=" mx-auto flex w-fit flex-col items-center text-center md:mx-0 md:items-end md:text-right lg:gap-6">
            {/* Texto */}
            <div className="leading-none">
                <h1 className="text-7xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">TOTI</h1>
                <h2 className="text-7xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">SANZ</h2>
            </div>

            {/* Firma */}
            <Image src="/images/firma.png" alt="Firma Toti Sanz" width={120} height={120} className="scale-70 md:scale-100 mix-blend-screen md:mt-4" />
        </div>
    </div>
</section>;
