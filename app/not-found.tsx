import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-white text-black">
            <section className="mx-auto max-w-3xl px-6 text-center">
                {/* Code */}
                <p className="mb-6 text-sm font-medium uppercase tracking-widest text-gray-400">Error 404</p>

                {/* Title */}
                <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Página no encontrada</h1>

                {/* Divider */}
                <div className="mx-auto mt-8 h-1 w-24 bg-orange-500" />

                {/* Description */}
                <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-gray-600">
                    La página que estás buscando no existe o ha sido movida. Puede que la dirección sea incorrecta o que el contenido ya no esté disponible.
                </p>

                {/* CTA */}
                <div className="mt-12">
                    <Link href="/" className="inline-block border-b-2 border-black pb-1 text-base font-medium transition-all hover:border-orange-500 hover:text-orange-500">
                        Volver al inicio
                    </Link>
                </div>
            </section>
        </main>
    );
}
