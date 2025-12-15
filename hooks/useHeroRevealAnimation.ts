'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';

export function useHeroRevealAnimation(containerRef: React.RefObject<HTMLElement | null>) {
    useLayoutEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // Imagen hero (gigante → normal)
            tl.fromTo('.hero-image', { scale: 1.4 }, { scale: 1, duration: 1.6 });

            // Elementos del hero
            tl.fromTo('.hero-item', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, '-=0.6');
        }, containerRef);

        return () => ctx.revert();
    }, [containerRef]);
}
