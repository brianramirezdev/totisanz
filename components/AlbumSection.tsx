import { Button } from '@/components/ui/button';
import { SiSpotify } from '@icons-pack/react-simple-icons';
import Image from 'next/image';
import Link from 'next/link';

const tracks = ['Como te pido', 'No pares', 'Perdimos el control', 'Volveré', 'Tu nombre'];

export default function AlbumSection() {
    return (
        <section id="album" className="bg-linear-to-b from-zinc-900 to-black px-6 py-8 text-white md:py-16 lg:py-24 rounded mx-4 lg:mx-8">
            <div className="mx-auto max-w-7xl overflow-hidden">
                <div className="flex w-max animate-[marquee_40s_linear_infinite] mb-8 md:mb-16">
                    <h2 className="text-nowrap text-6xl font-bold md:text-7xl lg:text-8xl xl:text-9xl">ÁLBUM ∗ ÁLBUM ∗ ÁLBUM ∗ ÁLBUM ∗&nbsp;</h2>
                    <h2 className="text-nowrap text-6xl font-bold md:text-7xl lg:text-8xl xl:text-9xl">ÁLBUM ∗ ÁLBUM ∗ ÁLBUM ∗ ÁLBUM ∗&nbsp;</h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
                    {/* Portada del álbum */}
                    <div className="flex ">
                        <div className="relative aspect-square w-full max-w-xl overflow-hidden rounded-lg shadow-2xl ring-4 ring-white/10">
                            <Image src="/images/album.webp" alt="Solo para ti - Toti Sanz" fill className="object-cover" quality={100} sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                    </div>

                    {/* Información del álbum */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-8">
                            <h3 className="mb-2 text-5xl font-bold italic md:text-6xl lg:text-7xl">Solo para ti</h3>
                            <p className="text-xl text-gray-400 md:text-2xl">2026</p>
                        </div>

                        {/* Lista de canciones */}
                        <div className="mb-8 space-y-3">
                            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Tracklist</p>
                            {tracks.map((track, index) => (
                                <div key={index} className="group flex items-center gap-4 rounded-lg border border-white/5 bg-white/5 px-4 py-3 transition-all hover:bg-white/10">
                                    <span className="text-sm font-mono text-gray-500">{String(index + 1).padStart(2, '0')}</span>
                                    <span className="flex-1 text-lg font-medium">{track}</span>
                                </div>
                            ))}
                        </div>

                        {/* Botón de Spotify */}
                        <Button
                            size="lg"
                            className="w-full gap-3 bg-green-500 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-green-600 md:w-auto"
                            asChild
                        >
                            <Link href="https://open.spotify.com/intl-es/artist/0RWI1GOUTOVYETw5uVKmRC?nd=1&dlsi=22453915d95b41a1" target="_blank" rel="noopener noreferrer">
                                <SiSpotify className="h-6 w-6" />
                                Descúbrelo
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
