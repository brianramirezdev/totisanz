import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SiApplemusic, SiSpotify, SiYoutube } from '@icons-pack/react-simple-icons';
import Marquee from './ui/marquee';

const musicLinks = [
    {
        id: 'spotify',
        label: 'Spotify',
        href: 'https://open.spotify.com/intl-es/track/3dpfkFjhgLy1YUYqsJyZca',
        icon: <SiSpotify className="size-5" />,
    },
    {
        id: 'youtube',
        label: 'YouTube',
        href: 'https://www.youtube.com/watch?v=ZVOvuItRNvs',
        icon: <SiYoutube className="size-5" />,
    },
    {
        id: 'apple',
        label: 'Apple Music',
        href: 'https://music.apple.com/es/album/como-te-pido/1718941267?i=1718941268',
        icon: <SiApplemusic className="size-5" />,
    },
];

export default function SingleSection() {
    return (
        <section id="single" className="overflow-hidden bg-white py-8 md:py-16">
            {/* Marquee */}
            <Marquee text="SINGLE ∗ NOVEDAD ∗ SINGLE ∗ NOVEDAD ∗" border />

            {/* Contenido principal */}
            <div className="mx-auto max-w-7xl px-6 2xl:px-0 py-12 md:py-24">
                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.5fr_1fr] lg:gap-12">
                    {/* Video */}
                    <div className="overflow-hidden rounded-xl shadow-2xl">
                        <div className="aspect-video">
                            <iframe src="https://www.youtube.com/embed/ZVOvuItRNvs" className="h-full w-full" allowFullScreen title="Como Te Pido - Toti Sanz" />
                        </div>
                    </div>

                    {/* Contenido lateral */}
                    <div className="flex flex-col gap-8 lg:justify-center">
                        {/* Título */}
                        <div>
                            <h3 className="text-5xl font-bold uppercase tracking-tight text-orange-500 md:text-6xl lg:text-5xl xl:text-6xl">Como Te Pido</h3>
                            <p className="mt-3 text-lg text-gray-600">Nuevo single 2025</p>
                        </div>

                        {/* Links - Responsive */}
                        <div className="grid grid-cols-3 gap-3 lg:flex lg:flex-col lg:gap-4">
                            {musicLinks.map(({ id, href, label, icon }) => (
                                <Button
                                    key={id}
                                    variant="outline"
                                    size="lg"
                                    asChild
                                    className="h-12 w-full gap-2 border transition-all hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500 lg:h-14 lg:justify-start lg:gap-4 lg:text-base lg:font-semibold"
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
