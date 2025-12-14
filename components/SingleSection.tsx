'use client';

import { Button } from '@/components/ui/button';
import { SiSpotify, SiYoutube } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

export default function SingleSection() {
    return (
        <section id="single" className="bg-white px-6 py-20 md:py-32">
            <div className="mx-auto max-w-7xl">
                {/* Título artístico */}
                <div className="mb-12 md:mb-16">
                    <h2 className="mb-4 text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl xl:text-9xl">Single</h2>
                    <h3 className="text-6xl font-bold italic tracking-tight text-orange-500 md:text-7xl lg:text-8xl xl:text-9xl">Como Te Pido</h3>
                </div>

                {/* Audio nativo con estilo personalizado */}
                <div className="mb-8 md:mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-600">Escucha a Toti hablar sobre el single</p>
                    <audio controls className="w-full" preload="metadata">
                        <source src="/audio/toti-voice-note.mp3" type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                </div>

                {/* Video */}
                <div className="mb-8 overflow-hidden rounded-xl shadow-2xl md:mb-12">
                    <div className="aspect-video">
                        <iframe src="https://www.youtube.com/embed/ZVOvuItRNvs" className="h-full w-full" allowFullScreen title="Como Te Pido - Toti Sanz" />
                    </div>
                </div>

                {/* Botones de streaming */}
                <div className="flex flex-wrap gap-4">
                    <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 border-2 transition-all hover:scale-105 hover:border-green-500 hover:bg-green-50 hover:text-green-600"
                        asChild
                    >
                        <Link href="https://open.spotify.com/intl-es/track/3dpfkFjhgLy1YUYqsJyZca" target="_blank" rel="noopener noreferrer">
                            <SiSpotify className="h-5 w-5" />
                            Escuchar en Spotify
                        </Link>
                    </Button>

                    <Button variant="outline" size="lg" className="gap-2 border-2 transition-all hover:scale-105 hover:border-red-500 hover:bg-red-50 hover:text-red-600" asChild>
                        <Link href="https://www.youtube.com/watch?v=ZVOvuItRNvs" target="_blank" rel="noopener noreferrer">
                            <SiYoutube className="h-5 w-5" />
                            Ver en YouTube
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
