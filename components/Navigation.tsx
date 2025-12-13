'use client';

import Link from 'next/link';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
    ['INICIO', '#inicio'],
    ['SINGLE', '#single'],
    ['ÁLBUM', '#album'],
    ['CONCIERTOS', '#conciertos'],
    ['BIOGRAFÍA', '#biografia'],
    ['MERCH', '#merch'],
    ['COMUNIDAD', '#comunidad'],
    ['CONTACTO', '#contacto'],
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center md:justify-center lg:justify-between px-6 py-4 lg:px-8">
                {/* Logo */}
                <Link href="#inicio" className="hidden lg:block text-2xl font-bold transition-colors hover:text-orange-500 lg:text-3xl">
                    TOTI SANZ
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {links.map(([label, href]) => (
                        <Link key={label} href={href} className="text-sm font-medium transition-colors hover:text-orange-500">
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <button
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 transition-colors hover:bg-gray-100"
                            aria-label="Abrir menú"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-full max-w-sm p-4">
                        <SheetTitle className="sr-only">Menú de navegación</SheetTitle>

                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                            <h2 className="text-2xl">TOTI SANZ</h2>
                        </div>

                        {/* Mobile Menu Links */}
                        <nav className="flex flex-col">
                            {links.map(([label, href]) => (
                                <Link
                                    key={label}
                                    href={href}
                                    onClick={handleLinkClick}
                                    className="group flex items-center justify-between rounded-lg px-4 py-4 pl-0 text-lg transition-all hover:bg-orange-50 hover:text-orange-500"
                                >
                                    <span>{label}</span>
                                    <span className="text-orange-500 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">→</span>
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
