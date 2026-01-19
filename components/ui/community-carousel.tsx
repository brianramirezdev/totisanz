'use client';

import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

/* ───────────────── Types ───────────────── */

type Photo = {
    id: string;
    img: string;
};

/* ───────────────── Data ───────────────── */

const communityPhotos: Photo[] = [
    { id: '1', img: '/images/community/photo-1.avif' },
    { id: '2', img: '/images/community/photo-2.avif' },
    { id: '3', img: '/images/community/photo-3.avif' },
    { id: '10', img: '/images/community/photo-10.avif' },
    { id: '4', img: '/images/community/photo-4.avif' },
    { id: '5', img: '/images/community/photo-5.avif' },
    { id: '6', img: '/images/community/photo-6.avif' },
    { id: '7', img: '/images/community/photo-7.avif' },
    { id: '8', img: '/images/community/photo-8.avif' },
    { id: '9', img: '/images/community/photo-9.avif' },
    { id: '11', img: '/images/community/photo-11.avif' },
    { id: '16', img: '/images/community/photo-16.avif' },
    { id: '12', img: '/images/community/photo-12.avif' },
    { id: '13', img: '/images/community/photo-13.avif' },
    { id: '14', img: '/images/community/photo-14.avif' },
    { id: '15', img: '/images/community/photo-15.avif' },
];

/* ───────────────── Component ───────────────── */

export default function CommunityCarousel() {
    /* ───────── Carousel state ───────── */
    const [api, setApi] = useState<CarouselApi | null>(null);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    /* ───────── Lightbox state ───────── */
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setActiveIndex(index);
    };

    const closeLightbox = () => {
        if (api && activeIndex !== null) {
            api.scrollTo(activeIndex, true);
        }
        setActiveIndex(null);
    };

    /* ───────── Sync carousel state ───────── */
    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCarouselIndex(api.selectedScrollSnap());
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        };

        onSelect();
        api.on('select', onSelect);

        return () => {
            api.off('select', onSelect);
        };
    }, [api]);

    /* ───────── Keyboard navigation (modal) ───────── */
    useEffect(() => {
        if (activeIndex === null) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft' && activeIndex > 0) {
                setActiveIndex((i) => i! - 1);
            }
            if (e.key === 'ArrowRight' && activeIndex < communityPhotos.length - 1) {
                setActiveIndex((i) => i! + 1);
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeIndex]);

    /* ───────── Estilo unificado de botones ───────── */
    const buttonBaseClass = 'rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-all hover:bg-white/20';

    return (
        <>
            {/* ───────── Carousel ───────── */}
            <div className="relative">
                <Carousel
                    opts={{
                        align: 'start',
                        slidesToScroll: 1,
                        dragFree: true,
                    }}
                    setApi={setApi}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {communityPhotos.map((photo, index) => (
                            <CarouselItem key={photo.id} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                                <button
                                    onClick={() => openLightbox(index)}
                                    aria-label={`Abrir imagen ${index + 1} de la galería`}
                                    className="group relative w-full overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]"
                                >
                                    <div className="relative aspect-3/4 w-full">
                                        <Image
                                            width={500}
                                            height={500}
                                            src={photo.img}
                                            alt={`Foto de la comunidad ${index + 1}`}
                                            loading="lazy"
                                            decoding="async"
                                            className="h-full w-full object-cover transition-all duration-300 group-hover:brightness-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </div>
                                </button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                {/* Indicador de scroll para desktop */}
                <div className="mt-6 hidden text-center text-sm text-gray-500 md:block">← Desliza para ver más fotos →</div>
            </div>

            {/* ───────── Counter (inline) ───────── */}
            <div className="mt-4 flex justify-center md:mt-6">
                <div className="flex w-20 items-center justify-center rounded-full bg-black px-4 py-1.5 text-xs text-white tabular-nums">
                    {String(carouselIndex + 1).padStart(2, '0')} / {String(communityPhotos.length).padStart(2, '0')}
                </div>
            </div>

            {/* ───────── Lightbox ───────── */}
            {activeIndex !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm" onClick={closeLightbox}>
                    {/* Close - Posición mejorada */}
                    <button onClick={closeLightbox} className={`absolute right-4 top-4 z-10 ${buttonBaseClass} md:right-8 md:top-8`} aria-label="Cerrar">
                        <X className="h-6 w-6" />
                    </button>

                    {/* Prev - Posición mejorada en desktop */}
                    {activeIndex > 0 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveIndex((i) => i! - 1);
                            }}
                            className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 ${buttonBaseClass} md:left-8`}
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                    )}

                    {/* Next - Posición mejorada en desktop */}
                    {activeIndex < communityPhotos.length - 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveIndex((i) => i! + 1);
                            }}
                            className={`absolute right-4 top-1/2 z-10 -translate-y-1/2 ${buttonBaseClass} md:right-8`}
                            aria-label="Imagen siguiente"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    )}

                    {/* Image */}
                    <Image
                        width={500}
                        height={500}
                        src={communityPhotos[activeIndex].img}
                        alt={`Foto de la comunidad ${activeIndex + 1}`}
                        className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl md:max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Counter (modal) */}
                    <div className="absolute bottom-6 flex w-20 items-center justify-center rounded-full bg-white/10 px-4 py-1.5 text-xs text-white backdrop-blur-md tabular-nums md:bottom-12">
                        {String(activeIndex + 1).padStart(2, '0')} / {String(communityPhotos.length).padStart(2, '0')}
                    </div>
                </div>
            )}
        </>
    );
}
