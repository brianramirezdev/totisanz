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
    title: 'Artista musical de Lanzarote',
    description: 'Toti Sanz es un cantante y compositor de Lanzarote. Descubre su música, singles, álbumes, conciertos y contacto.',
    openGraph: {
        title: 'Toti Sanz – Artista musical de Lanzarote',
        description: 'Escucha la música de Toti Sanz, conoce sus conciertos y descubre su último trabajo.',
        url: 'https://totisanz.com',
    },
};

export default function Home() {
    return (
        <main className="bg-white font-sans text-black antialiased">
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
