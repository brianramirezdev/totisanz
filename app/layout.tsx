import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-display',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.totisanz.com'),

    title: {
        default: 'Toti Sanz | Cantante y compositor de Lanzarote',
        template: '%s | Toti Sanz',
    },

    description: 'Toti Sanz es cantante y compositor de Lanzarote. Descubre su música, singles, álbumes, conciertos y contacto.',

    icons: {
        icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
        apple: '/apple-icon-180x180.png',
    },

    manifest: '/manifest.json',

    openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: 'https://www.totisanz.com',
        siteName: 'Toti Sanz',
        title: 'Toti Sanz – Artista musical de Lanzarote',
        description: 'Cantante y compositor de Lanzarote.',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Toti Sanz, cantante y compositor',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Toti Sanz – Artista musical de Lanzarote',
        description: 'Cantante y compositor de Lanzarote.',
        images: ['/images/og-image.jpg'],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
                {/* Schema.org JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                '@context': 'https://schema.org',
                                '@type': 'MusicGroup',
                                '@id': 'https://www.totisanz.com/#musicgroup',
                                name: 'Toti Sanz',
                                url: 'https://www.totisanz.com',
                                genre: ['Pop', 'Pop Latino'],
                                description: 'Toti Sanz es un cantante y compositor de Lanzarote, España.',
                                foundingLocation: {
                                    '@type': 'Place',
                                    name: 'Lanzarote, Islas Canarias, España',
                                },
                                sameAs: [
                                    'https://www.instagram.com/toti.sanz/',
                                    'https://www.facebook.com/people/Toti-Sanz/100091980272864/',
                                    'https://www.youtube.com/@TotiSanz',
                                    'https://open.spotify.com/artist/0RWI1GOUTOVYETw5uVKmRC',
                                    'https://www.tiktok.com/@toti.sanz',
                                    'https://music.apple.com/es/artist/toti-sanz/1718940361',
                                ],
                            },
                            {
                                '@context': 'https://schema.org',
                                '@type': 'VideoObject',
                                '@id': 'https://www.totisanz.com/#video-como-te-pido',
                                name: 'Como Te Pido',
                                description: "Videoclip oficial del single 'Como Te Pido' de Toti Sanz.",
                                thumbnailUrl: ['https://i.ytimg.com/vi/ZVOvuItRNvs/maxresdefault.jpg'],
                                uploadDate: '2025-01-01',
                                contentUrl: 'https://www.youtube.com/watch?v=ZVOvuItRNvs',
                                embedUrl: 'https://www.youtube.com/embed/ZVOvuItRNvs',
                                publisher: {
                                    '@type': 'MusicGroup',
                                    '@id': 'https://www.totisanz.com/#musicgroup',
                                },
                            },
                        ]),
                    }}
                />
                {children}
            </body>
        </html>
    );
}
