import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SingleSection from '@/components/SingleSection';
import AlbumSection from '@/components/AlbumSection';
import BiographySection from '@/components/BiographySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ConcertsSection from '@/components/ConcertsSection';
import MerchSection from '@/components/MerchSection';
import CommunitySection from '@/components/CommunitySection';

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
