'use client';

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

/* ───────────────── Hooks auxiliares ───────────────── */

const useMedia = (queries: string[], values: any[], defaultValue: any) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mediaQueryLists = queries.map((q) => window.matchMedia(q));

        const getValue = () => {
            const index = mediaQueryLists.findIndex((mql) => mql.matches);
            return values[index] ?? defaultValue;
        };

        setValue(getValue);

        const handler = () => setValue(getValue);
        mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler));

        return () => mediaQueryLists.forEach((mql) => mql.removeEventListener('change', handler));
    }, [queries, values, defaultValue]);

    return value;
};

const useMeasure = <T extends HTMLElement>() => {
    const ref = useRef<T | null>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (!ref.current) return;
        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });
        ro.observe(ref.current);
        return () => ro.disconnect();
    }, []);

    return [ref, size] as const;
};

const preloadImages = async (urls: string[]) => {
    await Promise.all(
        urls.map(
            (src) =>
                new Promise<void>((resolve) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = img.onerror = () => resolve();
                })
        )
    );
};

/* ───────────────── Types ───────────────── */

interface Item {
    id: string;
    img: string;
    height: number;
}

interface GridItem extends Item {
    x: number;
    y: number;
    w: number;
    h: number;
}

interface MasonryProps {
    items: Item[];
    ease?: string;
    duration?: number;
    stagger?: number;
    animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
    scaleOnHover?: boolean;
    hoverScale?: number;
    blurToFocus?: boolean;
    colorShiftOnHover?: boolean;
}

/* ───────────────── Component ───────────────── */

const Masonry: React.FC<MasonryProps> = ({
    items,
    ease = 'power3.out',
    duration = 0.6,
    stagger = 0.05,
    animateFrom = 'bottom',
    scaleOnHover = true,
    hoverScale = 0.95,
    blurToFocus = true,
    colorShiftOnHover = false,
}) => {
    /* ── responsive columns ── */
    const columns = useMedia(['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'], [5, 4, 3, 2], 1);

    /* ── detect mobile ── */
    const isMobile = useMedia(['(max-width: 640px)'], [true], false);

    /* ── refs & state ── */
    const [containerRef, { width }] = useMeasure<HTMLDivElement>();
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const [imagesReady, setImagesReady] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const hasMounted = useRef(false);

    // 🔍 LIGHTBOX
    const [activeImage, setActiveImage] = useState<string | null>(null);

    /* ───────────────── Intersection Observer ───────────────── */

    useEffect(() => {
        if (!wrapperRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(wrapperRef.current);
        return () => observer.disconnect();
    }, []);

    /* ───────────────── Preload images ───────────────── */

    useEffect(() => {
        preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
    }, [items]);

    /* ───────────────── Layout calculation ───────────────── */

    const grid = useMemo<GridItem[]>(() => {
        if (!width) return [];

        const colHeights = new Array(columns).fill(0);
        const gap = 16;
        const totalGaps = (columns - 1) * gap;
        const columnWidth = (width - totalGaps) / columns;

        return items.map((child) => {
            const col = colHeights.indexOf(Math.min(...colHeights));
            const x = col * (columnWidth + gap);
            const h = child.height / 2;
            const y = colHeights[col];

            colHeights[col] += h + gap;
            return { ...child, x, y, w: columnWidth, h };
        });
    }, [columns, items, width]);

    /* ───────────────── Animation ───────────────── */

    const getInitialPosition = (item: GridItem) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return { x: item.x, y: item.y };

        let dir = animateFrom;
        if (animateFrom === 'random') {
            dir = ['top', 'bottom', 'left', 'right'][Math.floor(Math.random() * 4)] as typeof animateFrom;
        }

        switch (dir) {
            case 'top':
                return { x: item.x, y: -200 };
            case 'bottom':
                return { x: item.x, y: window.innerHeight + 200 };
            case 'left':
                return { x: -200, y: item.y };
            case 'right':
                return { x: window.innerWidth + 200, y: item.y };
            case 'center':
                return {
                    x: rect.width / 2 - item.w / 2,
                    y: rect.height / 2 - item.h / 2,
                };
            default:
                return { x: item.x, y: item.y + 100 };
        }
    };

    useLayoutEffect(() => {
        if (!imagesReady || !isInView) return;

        // 🚫 SIN ANIMACIÓN EN MÓVIL
        if (isMobile) {
            grid.forEach((item) => {
                gsap.set(`[data-key="${item.id}"]`, {
                    opacity: 1,
                    x: item.x,
                    y: item.y,
                    width: item.w,
                    height: item.h,
                    clearProps: 'filter',
                });
            });

            hasMounted.current = true;
            return;
        }

        // 🖥 Desktop animation
        grid.forEach((item, index) => {
            const selector = `[data-key="${item.id}"]`;
            const target = { x: item.x, y: item.y, width: item.w, height: item.h };

            if (!hasMounted.current) {
                const start = getInitialPosition(item);

                gsap.fromTo(
                    selector,
                    {
                        opacity: 0,
                        x: start.x,
                        y: start.y,
                        width: item.w,
                        height: item.h,
                        ...(blurToFocus && { filter: 'blur(10px)' }),
                    },
                    {
                        opacity: 1,
                        ...target,
                        ...(blurToFocus && { filter: 'blur(0px)' }),
                        duration: 0.8,
                        ease: 'power3.out',
                        delay: index * stagger,
                    }
                );
            } else {
                gsap.to(selector, {
                    ...target,
                    duration,
                    ease,
                    overwrite: 'auto',
                });
            }
        });

        hasMounted.current = true;
    }, [grid, imagesReady, isInView, isMobile, stagger, animateFrom, blurToFocus, duration, ease]);

    /* ───────────────── Hover ───────────────── */

    const handleMouseEnter = (id: string) => {
        if (!scaleOnHover || isMobile) return;
        gsap.to(`[data-key="${id}"]`, {
            scale: hoverScale,
            duration: 0.3,
            ease: 'power2.out',
        });
    };

    const handleMouseLeave = (id: string) => {
        if (!scaleOnHover || isMobile) return;
        gsap.to(`[data-key="${id}"]`, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
        });
    };

    /* ───────────────── Render ───────────────── */

    return (
        <div ref={wrapperRef}>
            <div ref={containerRef} className="relative w-full h-full">
                {grid.map((item) => (
                    <div
                        key={item.id}
                        data-key={item.id}
                        className="absolute box-content cursor-zoom-in"
                        style={{ willChange: 'transform, width, height, opacity' }}
                        onClick={() => setActiveImage(item.img)} // 🔍 LIGHTBOX
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={() => handleMouseLeave(item.id)}
                    >
                        <div
                            className="relative h-full w-full rounded-[10px] bg-cover bg-center shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)]"
                            style={{ backgroundImage: `url(${item.img})` }}
                        >
                            {colorShiftOnHover && <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-linear-to-tr from-pink-500/50 to-sky-500/50 opacity-0" />}
                        </div>
                    </div>
                ))}
            </div>

            {/* 🔍 LIGHTBOX MODAL */}
            {activeImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={() => setActiveImage(null)}>
                    <img src={activeImage} alt="" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl transition-all duration-300" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
};

export default Masonry;
