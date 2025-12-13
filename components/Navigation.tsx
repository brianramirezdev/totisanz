// components/Navigation.tsx
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

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
    return (
        <nav className="fixed z-50 w-full border-b bg-white/95 backdrop-blur">
            <div className="mx-auto flex items-center justify-between px-6 py-4">
                <Link href="#inicio" className="hidden text-2xl font-bold lg:block hover:text-orange-500">
                    TOTI SANZ
                </Link>

                {/* Desktop */}
                <div className="hidden space-x-8 md:flex">
                    {links.map(([label, href]) => (
                        <Link key={label} href={href} className="font-medium hover:text-orange-500">
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Mobile */}
                <Sheet>
                    <SheetTrigger className="md:hidden">
                        <Menu />
                    </SheetTrigger>
                    <SheetContent side="right" className="space-y-4 pt-10">
                        {links.map(([label, href]) => (
                            <Link key={label} href={href} className="block font-medium hover:text-orange-500">
                                {label}
                            </Link>
                        ))}
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
