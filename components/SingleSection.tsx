'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SiApplemusic, SiSpotify, SiYoutube, SiYoutubemusic } from '@icons-pack/react-simple-icons';
import Marquee from './ui/marquee';

const musicLinks = [
    {
        id: 'spotify',
        label: 'Spotify',
        href: 'https://open.spotify.com/intl-es/track/3dpfkFjhgLy1YUYqsJyZca',
        icon: <SiSpotify className="size-5" />,
    },
    {
        id: 'apple',
        label: 'Apple Music',
        href: 'https://music.apple.com/es/album/como-te-pido/1718941267?i=1718941268',
        icon: <SiApplemusic className="size-5" />,
    },
    {
        id: 'youtube music',
        label: 'YouTube Music',
        href: 'https://music.youtube.com/playlist?list=OLAK5uy_k0VhlfJFQX3KO9HWGfcleU20qIW4A0oJo',
        icon: <SiYoutubemusic className="size-5" />,
    },
    {
        id: 'youtube',
        label: 'YouTube',
        href: 'https://www.youtube.com/watch?v=ZVOvuItRNvs',
        icon: <SiYoutube className="size-5" />,
    },
];

export default function SingleSection() {
    const [play, setPlay] = useState(false);

    return (
        <section id="single" className="overflow-hidden bg-background-soft py-8 md:py-16">
            <Marquee text="SINGLE ∗ NOVEDAD ∗ SINGLE ∗ NOVEDAD ∗" border />

            <div className="mx-auto max-w-7xl px-6 2xl:px-0 py-12 md:py-24">
                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.5fr_1fr] lg:gap-12">
                    {/* Video */}
                    <div className="overflow-hidden rounded-xl shadow-2xl">
                        <div className="aspect-video relative">
                            {!play ? (
                                <button type="button" aria-label="Reproducir vídeo Como Te Pido de Toti Sanz" onClick={() => setPlay(true)} className="absolute inset-0 group">
                                    {/* Thumbnail */}
                                    <img src="https://i.ytimg.com/vi/ZVOvuItRNvs/maxresdefault.jpg" alt="" className="h-full w-full object-cover" />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/50" />

                                    {/* Play button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="rounded-full bg-black/60 p-6 transition group-hover:scale-105">
                                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-white">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            ) : (
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/ZVOvuItRNvs?autoplay=1"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    className="h-full w-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Como Te Pido - Toti Sanz"
                                />
                            )}
                        </div>
                    </div>

                    {/* Contenido lateral */}
                    <div className="flex flex-col gap-8 lg:justify-center">
                        <div>
                            <h3 className="text-5xl font-bold uppercase tracking-tight text-accent-orange md:text-6xl lg:text-5xl xl:text-6xl">Como Te Pido</h3>
                            <p className="mt-3 text-lg text-gray-600">Nuevo single 2025</p>
                        </div>

                        <div className="grid grid-cols-3 gap-3 lg:flex lg:flex-col lg:gap-4">
                            {musicLinks.map(({ id, href, label, icon }) => (
                                <Button
                                    key={id}
                                    variant="outline"
                                    size="lg"
                                    asChild
                                    className="h-12 w-full gap-2 border transition-all hover:border-accent-orange hover:bg-accent-orange/10 hover:text-accent-orange lg:h-14 lg:justify-start lg:gap-4 lg:text-base lg:font-semibold"
                                >
                                    <Link href={href} target="_blank" rel="noopener noreferrer">
                                        {icon}
                                        <span className="hidden md:inline lg:inline">{label}</span>
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
