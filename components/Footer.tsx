import { SiInstagram, SiYoutube, SiSpotify, SiTiktok } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

const socialLinks = [
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/toti.sanz/',
        icon: SiInstagram,
        color: 'hover:text-pink-500',
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/@TotiSanz',
        icon: SiYoutube,
        color: 'hover:text-red-500',
    },
    {
        name: 'Spotify',
        href: 'https://open.spotify.com/intl-es/artist/0RWI1GOUTOVYETw5uVKmRC',
        icon: SiSpotify,
        color: 'hover:text-green-500',
    },
    {
        name: 'TikTok',
        href: 'https://www.tiktok.com/@toti.sanz',
        icon: SiTiktok,
        color: 'hover:text-white',
    },
];

const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Single', href: '#single' },
    { name: 'Álbum', href: '#album' },
    { name: 'Conciertos', href: '#conciertos' },
    { name: 'Biografía', href: '#biografia' },
    { name: 'Merch', href: '#merch' },
    { name: 'Comunidad', href: '#comunidad' },
    { name: 'Contacto', href: '#contacto' },
];

export default function Footer() {
    return (
        <footer className="min-h-screen bg-linear-to-b from-black to-zinc-800 px-6 py-20 text-white md:px-12 flex items-center rounded-t-2xl">
            <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-between">
                {/* ── Main content ── */}
                <div className="grid gap-12 md:grid-cols-3 md:gap-16 lg:gap-24">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-5xl font-bold md:text-6xl lg:text-7xl">TOTI SANZ</h3>
                        <p className="text-xl text-gray-400 md:text-2xl lg:text-3xl">De Lanzarote para el mundo</p>
                        <p className="text-base leading-relaxed text-gray-500 md:text-lg lg:text-xl">Cantante, músico y compositor canario. Creando música desde el corazón.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400 md:text-base">Enlaces rápidos</h4>
                        <nav className="grid grid-cols-2 gap-4 md:gap-5">
                            {quickLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="text-base text-gray-400 transition-colors hover:text-orange-500 md:text-lg">
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Social & Contact */}
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400 md:text-base">Sígueme</h4>

                        <div className="mb-8 flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition-all hover:scale-110 md:h-16 md:w-16 ${social.color}`}
                                >
                                    <social.icon className="h-6 w-6 md:h-7 md:w-7" />
                                </a>
                            ))}
                        </div>

                        <div className="space-y-3">
                            <p className="text-sm text-gray-500 md:text-base">Email</p>
                            <a href="mailto:contacto@totisanz.com" className="block text-base text-gray-400 transition-colors hover:text-orange-500 md:text-lg lg:text-xl">
                                contacto@totisanz.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Bottom ── */}
                <div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-6 text-base text-gray-500 md:flex-row md:text-lg">
                    <p>© {new Date().getFullYear()} Toti Sanz. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="transition-colors hover:text-gray-400">
                            Privacidad
                        </Link>
                        <Link href="/terms" className="transition-colors hover:text-gray-400">
                            Términos
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
