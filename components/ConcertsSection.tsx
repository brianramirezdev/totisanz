// components/ConcertsSection.tsx
import { Button } from '@/components/ui/button';

export default function ConcertsSection() {
    return (
        <section id="conciertos" className="bg-white px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 text-5xl font-bold">CONCIERTOS</h2>

                <div className="space-y-6">
                    <div className="border-l-4 border-orange-400 pl-6 py-4">
                        <h3 className="text-2xl font-bold">Lanzarote</h3>
                        <p className="text-gray-600">Fecha por confirmar</p>
                        <Button className="mt-4">Más info</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
