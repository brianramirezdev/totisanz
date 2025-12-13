// components/SingleSection.tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SingleSection() {
    return (
        <section id="single" className="bg-white px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-8 text-7xl font-bold">NUEVO SINGLE</h2>

                <div className="aspect-video overflow-hidden">
                    <iframe src="https://www.youtube.com/embed/ZVOvuItRNvs" className="h-full w-full rounded" allowFullScreen />
                </div>

                <div className="mt-8 flex gap-4">
                    <Button>
                        <Link href="https://open.spotify.com/intl-es/artist/0RWI1GOUTOVYETw5uVKmRC?nd=1&dlsi=22453915d95b41a1" target="_blank">
                            Spotify
                        </Link>
                    </Button>
                    <Button variant="secondary">
                        <Link href="https://www.youtube.com/@TotiSanz" target="_blank">
                            Apple Music
                        </Link>
                    </Button>
                    <Button variant="outline">
                        <Link href="https://www.youtube.com/@TotiSanz" target="_blank">
                            YouTube
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
