'use client';

import { Button } from '@/components/ui/button';
import { SiSpotify } from '@icons-pack/react-simple-icons';
import { Disc3 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const tracks = [
    { name: 'Como te pido', videoId: 'ZVOvuItRNvs', start: 73 },
    { name: 'No pares', videoId: 'Me2H5qfXyIQ', start: 91 },
    { name: 'Perdimos el control', videoId: 'h7DtVfLUpg4', start: 32 },
    { name: 'Volveré', videoId: '8YTowIX5VAA', start: 30 },
    { name: 'Tu nombre', videoId: 'U34jPcc3iD0', start: 81 },
];

export default function AlbumSection() {
    const [hoveredTrack, setHoveredTrack] = useState<{ videoId: string; start: number } | null>(null);

    return (
        <section id="album" className="mx-4 rounded bg-linear-to-b from-zinc-900 to-black px-6 py-8 text-white md:py-16 lg:mx-8 lg:py-24">
            <div className="mx-auto max-w-7xl overflow-hidden">
                <div className="mb-8 flex w-max animate-[marquee_40s_linear_infinite] md:mb-16">
                    <h2 className="text-nowrap text-6xl font-bold md:text-7xl lg:text-8xl xl:text-9xl">ÁLBUM ∗ ÁLBUM ∗ ÁLBUM ∗ ÁLBUM ∗&nbsp;</h2>
                    <h2 className="text-nowrap text-6xl font-bold md:text-7xl lg:text-8xl xl:text-9xl">ÁLBUM ∗ ÁLBUM ∗ ÁLBUM ∗ ÁLBUM ∗&nbsp;</h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
                    <div className="flex">
                        <div className="relative aspect-square w-full max-w-xl overflow-hidden rounded-lg shadow-2xl">
                            <Image
                                src="/images/album.webp"
                                alt="Solo para ti - Toti Sanz"
                                fill
                                className={`object-cover transition-opacity duration-300 ${hoveredTrack ? 'opacity-0' : 'opacity-100'}`}
                                quality={100}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {hoveredTrack && (
                                <div className="absolute inset-0 overflow-hidden">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${hoveredTrack.videoId}?start=${hoveredTrack.start}&autoplay=1&controls=0&loop=1&playlist=${hoveredTrack.videoId}`}
                                        className="absolute top-1/2 left-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2"
                                        style={{ pointerEvents: 'none' }}
                                        allow="autoplay"
                                        title="Track preview"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="mb-8">
                            <h3 className="mb-2 text-5xl font-bold italic md:text-6xl lg:text-7xl">Solo para ti</h3>
                            <p className="text-xl text-gray-400 md:text-2xl">2026</p>
                        </div>

                        <div className="mb-8 space-y-3">
                            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Tracklist</p>
                            {tracks.map((track, index) => (
                                <div
                                    key={index}
                                    tabIndex={0}
                                    className="group flex cursor-pointer items-center gap-4 rounded-lg border border-white/5 bg-white/5 px-4 py-3 transition-all"
                                    onMouseEnter={() => setHoveredTrack({ videoId: track.videoId, start: track.start ?? 0 })}
                                    onMouseLeave={() => setHoveredTrack(null)}
                                    onFocus={() => setHoveredTrack({ videoId: track.videoId, start: track.start ?? 0 })}
                                    onBlur={() => setHoveredTrack(null)}
                                >
                                    <span className="text-sm font-mono text-gray-500">{String(index + 1).padStart(2, '0')}</span>
                                    <span className="flex-1 text-lg font-medium">{track.name}</span>
                                    <Disc3 className="size-6 animate-spin animation-duration-[5000ms] opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100" />
                                </div>
                            ))}
                        </div>

                        <Button size="lg" className="h-12 w-full gap-3 bg-green-500 text-lg font-semibold text-white transition-all hover:bg-green-600 md:w-auto" asChild>
                            <Link href="https://open.spotify.com/intl-es/artist/0RWI1GOUTOVYETw5uVKmRC?nd=1&dlsi=22453915d95b41a1" target="_blank" rel="noopener noreferrer">
                                <SiSpotify className="size-6" />
                                Descúbrelo
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
