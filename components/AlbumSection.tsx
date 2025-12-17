'use client';

import { Button } from '@/components/ui/button';
import { SiApplemusic, SiSpotify, SiYoutube, SiYoutubemusic } from '@icons-pack/react-simple-icons';
import { Disc3, MoveUpRight, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Marquee from './ui/marquee';

const musicLinks = [
    {
        id: 'spotify',
        label: 'Spotify',
        href: 'https://open.spotify.com/intl-es/album/25HtkUSz3tVzCGjMWJTZiO',
        icon: <SiSpotify className="size-6" />,
    },
    {
        id: 'apple music',
        label: 'Music',
        href: 'https://music.apple.com/es/album/solo-para-ti-ep/1823152801',
        icon: <SiApplemusic className="size-6" />,
    },
    {
        id: 'youtube music',
        label: 'youtube music',
        href: 'https://music.youtube.com/playlist?list=OLAK5uy_k0VhlfJFQX3KO9HWGfcleU20qIW4A0oJo',
        icon: <SiYoutubemusic className="size-6" />,
    },
    {
        id: 'youtube',
        label: 'YouTube',
        href: 'https://www.youtube.com/watch?v=ZVOvuItRNvs&list=PLRcYtI_WwtdbXre5Toy5dmsNP1c2RyFjo',
        icon: <SiYoutube className="size-6" />,
    },
];

const tracks = [
    { name: 'Como te pido', videoId: 'ZVOvuItRNvs', start: 73 },
    { name: 'No pares', videoId: 'Me2H5qfXyIQ', start: 91 },
    { name: 'Perdimos el control', videoId: 'h7DtVfLUpg4', start: 32 },
    { name: 'Volveré', videoId: '8YTowIX5VAA', start: 30 },
    { name: 'Tu nombre', videoId: 'U34jPcc3iD0', start: 81 },
];

export default function AlbumSection() {
    const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);
    const [playingTrack, setPlayingTrack] = useState<number | null>(null);
    const playingRef = useRef<HTMLDivElement | null>(null);

    const activeTrack = playingTrack !== null ? tracks[playingTrack] : null;

    // Click fuera → parar reproducción
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (!playingRef.current) return;
            if (!playingRef.current.contains(e.target as Node)) {
                setPlayingTrack(null);
            }
        };

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <section id="album" className="mx-4 rounded bg-linear-to-b from-zinc-900 to-black px-6 py-8 text-white md:py-16 lg:mx-8 lg:py-24">
            <div className="mx-auto max-w-7xl overflow-hidden">
                <Marquee text="ÁLBUM ∗ ÁLBUM ∗ ÁLBUM ∗ ÁLBUM ∗" className="mb-8 md:mb-16" dark xl />

                <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
                    {/* ── Cover / Video ── */}
                    <div className="flex">
                        <div className="relative aspect-square w-full max-w-xl overflow-hidden rounded-lg shadow-2xl">
                            <Image
                                src="/images/album.webp"
                                alt="Solo para ti - Toti Sanz"
                                fill
                                className={`object-cover transition-opacity duration-300 ${activeTrack ? 'opacity-0' : 'opacity-100'}`}
                                quality={100}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {activeTrack && (
                                <div className="absolute inset-0 overflow-hidden">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${activeTrack.videoId}?start=${activeTrack.start}&autoplay=1&mute=0&playsinline=1&controls=0&loop=1&playlist=${activeTrack.videoId}`}
                                        className="absolute top-1/2 left-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2"
                                        allow="autoplay"
                                        title="Track playing"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ── Info ── */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-8">
                            <h3 className="mb-2 text-5xl font-bold italic md:text-6xl lg:text-7xl">Solo para ti</h3>
                            <p className="text-xl text-gray-400 md:text-2xl">2025</p>
                        </div>

                        {/* ── Tracklist ── */}
                        <div className="mb-8 space-y-3">
                            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Tracklist</p>

                            {tracks.map((track, index) => {
                                const isHovered = hoveredTrack === index;
                                const isPlaying = playingTrack === index;

                                return (
                                    <div
                                        key={index}
                                        ref={isPlaying ? playingRef : null}
                                        className="group flex cursor-pointer items-center gap-4 rounded-lg border border-white/5 bg-white/5 px-4 py-3 transition-all hover:border-gray-200/40 hover:bg-white/10"
                                        onMouseEnter={() => setHoveredTrack(index)}
                                        onMouseLeave={() => setHoveredTrack(null)}
                                        onClick={() => setPlayingTrack(index)}
                                    >
                                        <span className="text-sm font-mono text-gray-500">{String(index + 1).padStart(2, '0')}</span>
                                        <span className="flex-1 text-lg font-medium">{track.name}</span>

                                        {!isPlaying && (
                                            <Play
                                                className={`size-5 translate-x-10 ${
                                                    isHovered ? 'group-hover:translate-x-0 transform transition-transform duration-200 ease-in-out' : ''
                                                }`}
                                            />
                                        )}
                                        {isPlaying && <Disc3 className="size-6 animate-spin animation-duration-[5000ms]" />}
                                    </div>
                                );
                            })}
                        </div>

                        {/* ── Links ── */}
                        <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                            {musicLinks.map(({ id, href, label, icon }) => (
                                <Button
                                    key={id}
                                    variant="outline"
                                    asChild
                                    className="group aspect-square bg-background-soft border transition-all text-black p-6 md:p-8 flex items-center justify-center"
                                >
                                    <Link
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Escuchar en ${label}`}
                                        className="relative size-full flex items-center justify-center overflow-hidden"
                                    >
                                        <div className="flex items-center justify-center text-accent-orange translate-y-0 group-hover:translate-y-16 transform transition-transform duration-200 ease-in-out">
                                            {icon}
                                        </div>

                                        <div className="absolute inset-0 flex items-center justify-center -translate-y-10 group-hover:translate-y-0 transform transition-transform duration-200 ease-in-out">
                                            <MoveUpRight className="size-5 sm:size-6 text-accent-orange" />
                                        </div>
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
