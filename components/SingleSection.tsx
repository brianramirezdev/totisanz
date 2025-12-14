import AudioPlayer from '@/components/AudioPlayer';

export default function SingleSection() {
    return (
        <section id="single" className="bg-white px-6 py-16 md:py-24">
            <div className="mx-auto max-w-7xl overflow-hidden">
                {/* Marquee contextual */}
                <div className="mt-8 mb-12 border-t border-b border-gray-900 py-4 md:py-6">
                    <div className="flex w-max gap-12 animate-[marquee_90s_linear_infinite] select-none">
                        <h2 className="text-nowrap text-3xl font-bold tracking-tight text-black/80 md:text-6xl lg:text-7xl xl:text-8xl">SINGLE * NOVEDAD * SINGLE * NOVEDAD *</h2>
                        <h2 className="text-nowrap text-3xl font-bold tracking-tight text-black/80 md:text-6xl lg:text-7xl xl:text-8xl">SINGLE * NOVEDAD * SINGLE * NOVEDAD *</h2>
                    </div>
                </div>

                {/* Título principal */}
                <h3 className="mb-2 text-5xl font-bold italic tracking-tight text-orange-500  md:text-7xl lg:text-8xl xl:text-9xl">Como Te Pido</h3>

                {/* Video */}
                <div className="overflow-hidden rounded-xl shadow-lg mb-10">
                    <div className="aspect-video">
                        <iframe src="https://www.youtube.com/embed/ZVOvuItRNvs" className="h-full w-full" allowFullScreen title="Como Te Pido - Toti Sanz" />
                    </div>
                </div>

                {/* Audio */}
                <div className="mb-12 md:mb-16">
                    <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-600">Escucha a Toti hablar sobre el single</p>

                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
                        <AudioPlayer src="/audios/toti-voice-note.mp3" showLinks />
                    </div>
                </div>
            </div>
        </section>
    );
}

{
    /* Botones streaming */
}
{
    /* <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                            <Button
                                variant="ghost"
                                size="lg"
                                className="w-full sm:w-auto gap-2 transition-all hover:scale-105 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500"
                                asChild
                            >
                                <Link href="https://open.spotify.com/intl-es/track/3dpfkFjhgLy1YUYqsJyZca" target="_blank" rel="noopener noreferrer">
                                    <SiSpotify className="size-5" />
                                    Escuchar en Spotify
                                </Link>
                            </Button>

                            <Button
                                variant="ghost"
                                size="lg"
                                className="w-full sm:w-auto gap-2 transition-all hover:scale-105 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500"
                                asChild
                            >
                                <Link href="https://www.youtube.com/watch?v=ZVOvuItRNvs" target="_blank" rel="noopener noreferrer">
                                    <SiYoutube className="size-5" />
                                    Ver en YouTube
                                </Link>
                            </Button>
                        </div> */
}
