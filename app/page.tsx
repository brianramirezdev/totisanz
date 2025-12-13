// app/page.tsx
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SingleSection from '@/components/SingleSection';
import AlbumSection from '@/components/AlbumSection';
import BiographySection from '@/components/BiographySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// SEO básico (reemplaza al <head> de Astro)
export const metadata = {
    title: 'Toti Sanz - Artista Musical de Lanzarote',
    description: 'Toti Sanz, cantante y compositor de Lanzarote. Descubre su música, conciertos y contacto.',
};

export default function Home() {
    return (
        <main className="bg-white font-sans text-black antialiased">
            <Navigation />
            <HeroSection />
            <SingleSection />
            <AlbumSection />
            <BiographySection />
            <ContactSection />
            <Footer />
        </main>
    );
}
