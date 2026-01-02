'use client';

import { useRef } from 'react';
import Image from 'next/image';
import CircularText from '../ui/circular-text';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { useHeroRevealAnimation } from '@/hooks/useHeroRevealAnimation';
import SocialLinks from '../ui/social-links';

export default function HeroSection() {
    const heroRef = useRef<HTMLElement | null>(null);

    useHeroRevealAnimation(heroRef);

    return (
        <section ref={heroRef} id="inicio" className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
                <Image src="/images/hero.avif" unoptimized alt="Toti Sanz" fill priority sizes="100vw" className="hero-image object-cover opacity-85" />
            </div>

            <div className="grid min-h-svh w-screen grid-cols-1 grid-rows-[auto,1fr,auto] px-6 pt-24 pb-6 md:px-14 lg:px-24 md:pt-32 md:pb-24 md:grid-cols-2 md:grid-rows-2">
                {/* Nombre */}
                <div className="hero-item z-10 max-w-xs md:max-w-full gap-2 flex flex-col mx-auto md:mx-0 h-fit">
                    <h1 className="text-white font-extrabold tracking-tight leading-none text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center md:text-left">TOTI SANZ</h1>
                    <h2 className="text-sm italic text-white/80 md:hidden text-center">“Escribo sobre lo que siento, sobre mis vivencias.”</h2>
                </div>

                {/* Quote desktop */}
                {/* <div className="hero-item z-10 place-self-center max-w-xs md:place-self-start md:justify-self-end md:text-right">
                    <div className="hidden md:block">
                        <blockquote className="border-l-2 border-white/40 pl-4 text-base italic text-white/80 lg:text-lg">
                            “Escribo sobre lo que siento, sobre mis vivencias.”
                        </blockquote>
                        <span className="mt-2 block text-xs uppercase tracking-wider text-white/50">— Toti Sanz</span>
                    </div>
                </div> */}

                {/* Social */}
                {/* <div className="hero-item z-10 place-self-end justify-self-start hidden md:flex w-fit gap-3 rounded  px-2 py-1 ">
                    <SocialLinks dark size="lg" />
                </div> */}
                <div></div>
                <div></div>

                {/* CTA */}
                <Link href="#contacto" className="hero-item z-10 place-self-center md:place-self-end md:justify-self-end relative flex items-center justify-center">
                    <div className="relative size-28 flex items-center justify-center">
                        <CircularText text="TOTI*SANZ*CONTACTO*" onHover="slowDown" spinDuration={20} />
                        <ArrowDown className="absolute size-7 md:size-8 lg:size-9 text-white" />
                    </div>
                </Link>
            </div>
        </section>
    );
}
