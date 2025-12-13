// components/AlbumSection.tsx
import { Card, CardContent } from '@/components/ui/card';

const albums = [
    { id: 1, emoji: '🎸', title: 'Cómo te pido', year: '2023' },
    { id: 2, emoji: '🌊', title: 'Próximamente', year: '2025' },
    { id: 3, emoji: '🎹', title: 'Próximamente', year: '2025' },
    { id: 4, emoji: '🔥', title: 'Próximamente', year: '2025' },
];

export default function AlbumSection() {
    return (
        <section id="album" className="bg-black px-6 py-20 text-white">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 text-5xl font-bold">MÚSICA</h2>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {albums.map((album) => (
                        <Card key={album.id} className="bg-zinc-900 text-white">
                            <CardContent className="flex aspect-square items-center justify-center text-6xl">{album.emoji}</CardContent>
                            <div className="p-4">
                                <h4 className="font-bold">{album.title}</h4>
                                <p className="text-sm text-gray-400">{album.year}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
