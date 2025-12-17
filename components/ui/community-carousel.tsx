'use client';

import * as React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

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
    const [api, setApi] = React.useState<CarouselApi | null>(null);
    const [carouselIndex, setCarouselIndex] = React.useState(0);

    /* ───────── Lightbox state ───────── */
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const openLightbox = (index: number) => {
        setActiveIndex(index);
    };
    const closeLightbox = () => {
        if (api && activeIndex !== null) {
            api.scrollTo(activeIndex, true); // ← salto instantáneo
        }
        setActiveIndex(null);
    };

    /* ───────── Sync carousel index ───────── */
    React.useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCarouselIndex(api.selectedScrollSnap());
        };

        onSelect();
        api.on('select', onSelect);

        return () => {
            api.off('select', onSelect);
        };
    }, [api]);

    /* ───────── Keyboard navigation (modal) ───────── */
    React.useEffect(() => {
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

    return (
        <>
            {/* ───────── Carousel ───────── */}

            <Carousel opts={{ align: 'start' }} setApi={setApi} className="w-full overflow-x-hidden">
                <CarouselContent>
                    {communityPhotos.map((photo, index) => (
                        <CarouselItem key={photo.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                            <button onClick={() => openLightbox(index)} className="group relative w-full overflow-hidden rounded-[10px]">
                                <div className="relative aspect-3/4 w-full">
                                    <img src={photo.img} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                </div>
                            </button>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* ───────── Counter (inline) ───────── */}

            <div className="mt-3 flex justify-center">
                <div className="flex w-20 items-center justify-center rounded-full bg-black px-4 py-1.5 text-xs text-white tabular-nums">
                    {String(carouselIndex + 1).padStart(2, '0')} / {String(communityPhotos.length).padStart(2, '0')}
                </div>
            </div>

            {/* ───────── Lightbox ───────── */}

            {activeIndex !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={closeLightbox}>
                    {/* Close */}
                    <button onClick={closeLightbox} className="absolute right-4 top-6 rounded-full bg-black/60 p-3 text-white hover:bg-black">
                        <X className="h-5 w-5" />
                    </button>

                    {/* Prev */}
                    {activeIndex > 0 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveIndex((i) => i! - 1);
                            }}
                            className="absolute left-4 rounded-full bg-black/60 p-3 text-white hover:bg-black"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                    )}

                    {/* Next */}
                    {activeIndex < communityPhotos.length - 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveIndex((i) => i! + 1);
                            }}
                            className="absolute right-4 rounded-full bg-black/60 p-3 text-white hover:bg-black"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    )}

                    {/* Image */}
                    <img src={communityPhotos[activeIndex].img} alt="" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />

                    {/* Counter (modal) */}
                    <div className="absolute bottom-12 flex w-20 items-center justify-center rounded-full bg-black/40 px-4 py-1.5 text-xs text-white tabular-nums">
                        {String(activeIndex + 1).padStart(2, '0')} / {String(communityPhotos.length).padStart(2, '0')}
                    </div>
                </div>
            )}
        </>
    );
}
