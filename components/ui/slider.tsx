'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

/* ───────────────── Types ───────────────── */

interface Item {
    id: string;
    img: string;
    height: number;
}

interface SliderProps {
    items: Item[];
}

/* ───────────────── Component ───────────────── */

const Slider: React.FC<SliderProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // 🔍 LIGHTBOX
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const lightboxRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    /* ───────────────── Slider Navigation ───────────────── */

    const goToSlide = (index: number) => {
        if (index < 0 || index >= items.length) return;
        setCurrentIndex(index);
        setTranslateX(0);
    };

    const goToPrevious = () => {
        goToSlide(currentIndex - 1);
    };

    const goToNext = () => {
        goToSlide(currentIndex + 1);
    };

    /* ───────────────── Touch/Mouse Handlers ───────────────── */

    const handleDragStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return;
        const diff = clientX - startX;
        setTranslateX(diff);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const threshold = 100;
        if (translateX > threshold && currentIndex > 0) {
            goToPrevious();
        } else if (translateX < -threshold && currentIndex < items.length - 1) {
            goToNext();
        } else {
            setTranslateX(0);
        }
    };

    /* ───────────────── Lightbox Controls ───────────────── */

    const openLightbox = (index: number) => {
        setActiveIndex(index);
    };

    const closeLightbox = () => {
        if (activeIndex !== null) {
            setCurrentIndex(activeIndex);
        }
        if (lightboxRef.current && imageRef.current) {
            gsap.to(lightboxRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.inOut',
                onComplete: () => setActiveIndex(null),
            });
            gsap.to(imageRef.current, {
                scale: 0.9,
                duration: 0.3,
                ease: 'power2.inOut',
            });
        } else {
            setActiveIndex(null);
        }
    };

    const goToPreviousLightbox = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (activeIndex !== null && activeIndex > 0) {
            animateImageTransition(() => setActiveIndex(activeIndex - 1), 'left');
        }
    };

    const goToNextLightbox = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (activeIndex !== null && activeIndex < items.length - 1) {
            animateImageTransition(() => setActiveIndex(activeIndex + 1), 'right');
        }
    };

    const animateImageTransition = (callback: () => void, direction: 'left' | 'right') => {
        if (!imageRef.current) {
            callback();
            return;
        }

        const xOffset = direction === 'left' ? -100 : 100;

        gsap.to(imageRef.current, {
            opacity: 0,
            x: xOffset,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => {
                callback();
                gsap.fromTo(imageRef.current, { opacity: 0, x: -xOffset, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
            },
        });
    };

    /* ───────────────── Lightbox Open Animation ───────────────── */

    useEffect(() => {
        if (activeIndex !== null && lightboxRef.current && imageRef.current) {
            gsap.fromTo(imageRef.current, { scale: 0.9, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out' });
        }
    }, [activeIndex]);

    /* ───────────────── Keyboard Navigation ───────────────── */

    useEffect(() => {
        if (activeIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft' && activeIndex > 0) {
                animateImageTransition(() => setActiveIndex(activeIndex - 1), 'left');
            }
            if (e.key === 'ArrowRight' && activeIndex < items.length - 1) {
                animateImageTransition(() => setActiveIndex(activeIndex + 1), 'right');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex, items.length]);

    /* ───────────────── Render ───────────────── */

    return (
        <div className="relative w-full">
            {/* Slider Container */}
            <div ref={sliderRef} className="relative w-full overflow-hidden">
                <div
                    ref={trackRef}
                    className="flex transition-transform duration-300 ease-out"
                    style={{
                        transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
                    }}
                    onMouseDown={(e) => handleDragStart(e.clientX)}
                    onMouseMove={(e) => handleDragMove(e.clientX)}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                    onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
                    onTouchEnd={handleDragEnd}
                >
                    {items.map((item, index) => (
                        <div key={item.id} className="w-full shrink-0 px-4">
                            <div
                                className="relative w-full aspect-3/4 rounded-[10px] bg-cover bg-center cursor-zoom-in"
                                style={{ backgroundImage: `url(${item.img})` }}
                                onClick={() => openLightbox(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            {currentIndex > 0 && (
                <button
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/60 p-2 text-white transition-all hover:bg-black/90"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            )}

            {currentIndex < items.length - 1 && (
                <button
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/60 p-2 text-white transition-all hover:bg-black/90"
                    aria-label="Next"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            )}

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* 🔍 LIGHTBOX SLIDER */}
            {activeIndex !== null && (
                <div ref={lightboxRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={closeLightbox}>
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 rounded-full bg-black/30 p-2 sm:p-3 text-white transition-all hover:bg-black/90"
                        aria-label="Close"
                    >
                        <X className="w-6 h-6 sm:w-7 sm:h-7" />
                    </button>

                    {/* Previous Button */}
                    {activeIndex > 0 && (
                        <button
                            onClick={goToPreviousLightbox}
                            className="absolute left-2 sm:left-4 z-10 rounded-full bg-black/60 p-2 sm:p-3 text-white transition-all hover:bg-black/90"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
                        </button>
                    )}

                    {/* Next Button */}
                    {activeIndex < items.length - 1 && (
                        <button
                            onClick={goToNextLightbox}
                            className="absolute right-2 sm:right-4 z-10 rounded-full bg-black/60 p-2 sm:p-3 text-white transition-all hover:bg-black/90"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
                        </button>
                    )}

                    {/* Image */}
                    <img ref={imageRef} src={items[activeIndex].img} alt="" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />

                    {/* Image Counter */}
                    <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white backdrop-blur-md">
                        {activeIndex + 1} / {items.length}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Slider;
