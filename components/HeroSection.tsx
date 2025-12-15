import Image from 'next/image';
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
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
                <Image src="/images/hero.avif" unoptimized alt="Toti Sanz" fill priority sizes="100vw" className="object-cover opacity-85" />
            </div>

            <div className="grid min-h-svh w-screen grid-cols-1 grid-rows-[auto,1fr,auto] px-6 pt-24 pb-6 md:px-14 lg:px-24 md:pt-32 md:pb-24 md:grid-cols-2 md:grid-rows-2">
                {/* ── TOP · Nombre (mobile) / TOP LEFT (desktop) ── */}
                <div className="z-10 max-w-xs md:max-w-xl gap-2 flex flex-col mx-auto md:mx-0 h-fit">
                    <h1 className="z-10 place-self-center text-center text-white font-extrabold tracking-tight leading-none text-5xl md:place-self-start md:text-left md:text-6xl lg:text-7xl xl:text-8xl">
                        TOTI SANZ
                    </h1>
                    {/* Quote móvil */}
                    <h2 className="text-sm italic text-white/80 md:hidden text-center">“Escribo sobre lo que siento, sobre mis vivencias.”</h2>
                </div>

                {/* ── Quote (mobile centrada / desktop top right) ── */}
                <div className="z-10 place-self-center text-center max-w-xs md:place-self-start md:justify-self-end md:text-right">
                    {/* Quote desktop */}
                    <div className="hidden md:block">
                        <blockquote className="border-l-2 border-white/40 pl-4 text-base italic text-white/80 lg:text-lg">
                            “Escribo sobre lo que siento, sobre mis vivencias.”
                        </blockquote>
                        <span className="mt-2 block text-xs uppercase tracking-wider text-white/50">— Toti Sanz</span>
                    </div>
                </div>

                {/* ── Social links (solo desktop) ── */}
                <div className="z-10 place-self-end justify-self-start hidden md:flex w-fit gap-3 rounded bg-white/90 px-2 py-1 shadow-lg backdrop-blur">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="group flex size-10 md:size-14 items-center justify-center rounded-full text-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:text-orange-500"
                        >
                            <social.icon className="size-6 md:size-7 transition-transform duration-300 group-hover:scale-110" />
                        </a>
                    ))}
                </div>

                {/* ── Circular CTA (bottom mobile / bottom right desktop) ── */}
                <Link href="#contacto" className="z-10 place-self-center md:place-self-end md:justify-self-end relative flex items-center justify-center">
                    <div className="relative size-28 md:size-28 flex items-center justify-center">
                        <CircularText text="TOTI*SANZ*RESÉRVAME*" onHover="slowDown" spinDuration={20} />
                        <ArrowDown className="absolute size-6 md:size-7 text-white" />
                    </div>
                </Link>
            </div>
        </section>
    );
}
