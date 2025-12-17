import { SiInstagram } from '@icons-pack/react-simple-icons';
import Masonry from './ui/masonry';
import Slider from './ui/slider';
import { Carousel } from './ui/carousel';
import CommunityCarousel from './ui/community-carousel';

const communityPhotos = [
    { id: '1', img: '/images/community/photo-1.avif', url: '#', height: 800 },
    { id: '2', img: '/images/community/photo-2.avif', url: '#', height: 600 },
    { id: '3', img: '/images/community/photo-3.avif', url: '#', height: 900 },
    { id: '10', img: '/images/community/photo-10.avif', url: '#', height: 700 },
    { id: '4', img: '/images/community/photo-4.avif', url: '#', height: 700 },
    { id: '5', img: '/images/community/photo-5.avif', url: '#', height: 850 },
    { id: '6', img: '/images/community/photo-6.avif', url: '#', height: 650 },
    { id: '7', img: '/images/community/photo-7.avif', url: '#', height: 750 },
    { id: '8', img: '/images/community/photo-8.avif', url: '#', height: 800 },
    { id: '9', img: '/images/community/photo-9.avif', url: '#', height: 900 },
    { id: '11', img: '/images/community/photo-11.avif', url: '#', height: 700 },
    { id: '16', img: '/images/community/photo-16.avif', url: '#', height: 700 },
    { id: '12', img: '/images/community/photo-12.avif', url: '#', height: 700 },
    { id: '13', img: '/images/community/photo-13.avif', url: '#', height: 700 },
    { id: '14', img: '/images/community/photo-14.avif', url: '#', height: 700 },
    { id: '15', img: '/images/community/photo-15.avif', url: '#', height: 700 },
];

export default function CommunitySection() {
    return (
        <section id="comunidad" className="bg-background-soft px-6 py-12 md:py-20 text-black">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 md:gap-12">
                {/* Título */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl xl:text-9xl">COMUNIDAD</h2>
                </div>

                {/* Galería */}
                <div className="h-fit lg:h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {/* Slider → mobile & tablet */}
                    <div className="block lg:hidden">
                        <CommunityCarousel />
                    </div>

                    {/* Masonry → desktop */}
                    <div className="hidden lg:block">
                        <Masonry
                            items={communityPhotos}
                            ease="power3.out"
                            duration={0.6}
                            stagger={0.08}
                            animateFrom="bottom"
                            scaleOnHover={true}
                            hoverScale={1.05}
                            blurToFocus={true}
                            colorShiftOnHover={false}
                        />
                    </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center my-8">
                    <div className="flex max-w-2xl flex-col items-center gap-6 text-center">
                        <h3 className="text-2xl font-bold md:text-3xl">¿Tienes una foto con Toti?</h3>

                        <p className="text-gray-500 text-md md:text-xl">
                            Comparte tu momento con nosotros usando el hashtag
                            <span className="ml-1 font-bold  text-accent-orange">#TotiSanzFans</span>
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://www.instagram.com/toti.sanz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all hover:border-accent-orange hover:bg-accent-orange/10 hover:text-accent-orange"
                            >
                                Etiquétanos en Instagram
                                <SiInstagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
