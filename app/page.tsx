import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import SingleSection from '@/components/sections/SingleSection';
import AlbumSection from '@/components/sections/AlbumSection';
import BiographySection from '@/components/sections/BiographySection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import ConcertsSection from '@/components/sections/ConcertsSection';
import MerchSection from '@/components/sections/MerchSection';
import CommunitySection from '@/components/sections/CommunitySection';

export const metadata: Metadata = {
    title: 'Toti Sanz – Artista musical de Lanzarote | Música y conciertos',
    description: 'Descubre la música de Toti Sanz, cantante y compositor de Lanzarote. Singles, álbumes, conciertos y contacto.',
    openGraph: {
        title: 'Toti Sanz – Música y conciertos en Lanzarote',
        description: 'Escucha la música de Toti Sanz, conoce sus conciertos y descubre su último trabajo.',
        url: 'https://www.totisanz.com',
    },
};

export default function Home() {
    return (
        <main className="font-sans text-black antialiased bg-background-soft">
            <Navigation />
            <HeroSection />
            <SingleSection />
            <AlbumSection />
            <BiographySection />
            <ConcertsSection />
            <CommunitySection />
            <MerchSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
