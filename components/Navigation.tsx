'use client';

import Link from 'next/link';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { CartSheet } from '@/components/CartSheet';

const links = [
    ['INICIO', '#inicio'],
    ['SINGLE', '#single'],
    ['ÁLBUM', '#album'],
    // ['BIOGRAFÍA', '#biografia'],
    ['CONCIERTOS', '#conciertos'],
    // ['COMUNIDAD', '#comunidad'],
    // ['MERCH', '#merch'],
    ['CONTACTO', '#contacto'],
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="mx-auto relative flex max-w-8xl items-center justify-center px-6 py-6 lg:px-8">
                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex mx-auto">
                    {links.map(([label, href]) => (
                        <Link key={label} href={href} className="text-sm font-medium transition-colors hover:text-orange-500">
                            {label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4 ml-auto absolute right-4">
                    {/* Cart Sheet */}
                    <CartSheet />

                    {/* Mobile Menu Button */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <button aria-label="Abrir menú">
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
                                        className="group flex items-center justify-between px-4 py-4 pl-2 text-lg transition-all hover:bg-orange-50 hover:text-orange-500 border-b border-orange-400"
                                    >
                                        <span>{label}</span>
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <p className="text-red-900 bg-red-300 text-2xl py-1 px-2 w-full">testing</p>
        </nav>
    );
}
