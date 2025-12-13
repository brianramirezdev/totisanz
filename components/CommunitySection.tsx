import { SiInstagram } from '@icons-pack/react-simple-icons';
import Masonry from './ui/masonry';

const communityPhotos = [
    { id: '1', img: '/images/community/photo-1.jpg', url: '#', height: 800 },
    { id: '2', img: '/images/community/photo-2.jpg', url: '#', height: 600 },
    { id: '3', img: '/images/community/photo-3.jpg', url: '#', height: 900 },
    { id: '4', img: '/images/community/photo-4.jpg', url: '#', height: 700 },
    { id: '5', img: '/images/community/photo-5.jpg', url: '#', height: 850 },
    { id: '6', img: '/images/community/photo-6.jpg', url: '#', height: 650 },
    { id: '7', img: '/images/community/photo-7.jpg', url: '#', height: 750 },
    { id: '8', img: '/images/community/photo-8.jpg', url: '#', height: 800 },
    { id: '9', img: '/images/community/photo-9.jpg', url: '#', height: 900 },
    { id: '10', img: '/images/community/photo-10.jpg', url: '#', height: 700 },
];

export default function CommunitySection() {
    return (
        <section id="comunidad" className="bg-black px-6 py-20 text-white md:py-32 ">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16">
                    <h2 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl xl:text-9xl">COMUNIDAD</h2>
                    <p className="text-xl text-gray-400 md:text-2xl">Fotos con los fans y el público</p>
                </div>

                <div className="h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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

                {/* CTA para compartir fotos */}
                <div className="mt-20 text-center">
                    <div className="mx-auto max-w-2xl">
                        <h3 className="mb-4 text-2xl font-bold md:text-3xl">¿Tienes una foto con Toti?</h3>
                        <p className="mb-6 text-gray-400">
                            Comparte tu momento con nosotros usando el hashtag <span className="ml-1 font-bold text-orange-500">#TotiSanzFans</span>
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://www.instagram.com/toti.sanz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold transition-all hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500"
                            >
                                Etiquétanos en Instagram
                                <SiInstagram className="h-6 w-6 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
