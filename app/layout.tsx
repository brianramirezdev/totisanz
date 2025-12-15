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
    metadataBase: new URL('https://totisanz.com'), // ← cambia por tu dominio real
    title: {
        default: 'Toti Sanz',
        template: '%s | Toti Sanz',
    },
    description: 'Cantante y compositor de Lanzarote.',
    icons: {
        icon: [{ url: '/images/favicon/favicon.ico' }, { url: '/images/favicon/favicon.svg', type: 'image/svg+xml' }, { url: '/images/favicon/favicon-96x96.png', sizes: '96x96' }],
        apple: '/images/favicon/apple-touch-icon.png',
    },
    manifest: '/images/favicon/site.webmanifest',
    openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: 'https://totisanz.com',
        siteName: 'Toti Sanz',
        title: 'Toti Sanz',
        description: 'Cantante y compositor de Lanzarote.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Toti Sanz',
        description: 'Cantante y compositor de Lanzarote.',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>{children}</body>
        </html>
    );
}
