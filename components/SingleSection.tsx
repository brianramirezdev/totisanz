import { Button } from './ui/button';
import Link from 'next/link';
import { SiApplemusic, SiSpotify, SiYoutube } from '@icons-pack/react-simple-icons';

const musicLinks = [
    {
        id: 'spotify',
        label: 'Spotify',
        href: 'https://open.spotify.com/intl-es/track/3dpfkFjhgLy1YUYqsJyZca',
        icon: <SiSpotify />,
    },
    {
        id: 'youtube',
        label: 'YouTube',
        href: 'https://www.youtube.com/watch?v=ZVOvuItRNvs',
        icon: <SiYoutube />,
    },
    {
        id: 'apple',
        label: 'Apple Music',
        href: 'https://music.apple.com/es/album/como-te-pido/1718941267?i=1718941268',
        icon: <SiApplemusic />,
    },
];

export default function SingleSection() {
    return (
        <section id="single" className="bg-white md:px-0 py-8 md:py-16 overflow-hidden">
            <div className="mt-8 mb-12 md:mb-20 border-t border-b border-gray-900 py-4 md:py-6">
                <div className="flex animate-[marquee_40s_linear_infinite] select-none">
                    <h2 className="text-nowrap text-3xl font-bold tracking-tight text-black/80 md:text-6xl lg:text-7xl xl:text-8xl">SINGLE ∗ NOVEDAD ∗ SINGLE ∗ NOVEDAD ∗&nbsp;</h2>
                    <h2 className="text-nowrap text-3xl font-bold tracking-tight text-black/80 md:text-6xl lg:text-7xl xl:text-8xl">SINGLE ∗ NOVEDAD ∗ SINGLE ∗ NOVEDAD ∗&nbsp;</h2>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 2xl:px-0">
                {/* Marquee contextual */}

                {/* Título principal */}
                <h3 className="mb-2 text-5xl font-bold  tracking-tight text-orange-500  md:text-7xl lg:text-8xl uppercase">Como Te Pido</h3>

                {/* Video */}
                <div className="overflow-hidden rounded-xl shadow-lg mb-10">
                    <div className="aspect-video">
                        <iframe src="https://www.youtube.com/embed/ZVOvuItRNvs" className="h-full w-full" allowFullScreen title="Como Te Pido - Toti Sanz" />
                    </div>
                </div>

                <div className="mb-12 md:mb-16">
                    <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-3 w-full">
                        {musicLinks.map(({ id, href, label, icon }) => (
                            <Button
                                key={id}
                                variant="outline"
                                asChild
                                className="gap-2 md:h-12 w-full transition-all hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500"
                            >
                                <Link href={href} target="_blank" rel="noopener noreferrer">
                                    {icon}
                                    {label}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
