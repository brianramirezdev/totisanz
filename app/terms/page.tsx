import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Términos y condiciones | Toti Sanz',
    description: 'Aviso legal y términos de uso de la web oficial de Toti Sanz.',
};

export default function TermsPage() {
    return (
        <main className="bg-white text-black">
            <section className="mx-auto max-w-4xl px-6 py-24">
                {/* Header */}
                <header className="mb-20">
                    <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Términos y condiciones</h1>
                    <div className="mt-6 h-1 w-24 bg-orange-500" />
                </header>

                {/* Content */}
                <div className="space-y-12 text-lg leading-relaxed text-gray-700">
                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">1. Titular del sitio web</h2>
                        <p>
                            Este sitio web es titularidad de <strong>Toti Sanz</strong>, artista musical.
                        </p>
                        <p className="mt-2">
                            Email de contacto:{' '}
                            <a href="mailto:contacto@totisanz.com" className="font-medium text-orange-500 hover:underline">
                                contacto@totisanz.com
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">2. Objeto del sitio web</h2>
                        <p>
                            El presente sitio web tiene como finalidad ofrecer información sobre la actividad artística de Toti Sanz, incluyendo música, vídeos, conciertos,
                            novedades y vías de contacto.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">3. Condiciones de uso</h2>
                        <p>
                            El acceso y uso de este sitio web implica la aceptación de los presentes términos. El usuario se compromete a realizar un uso adecuado de los contenidos
                            y a no emplearlos para fines ilícitos o contrarios a la buena fe.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">4. Propiedad intelectual</h2>
                        <p>
                            Todos los contenidos del sitio web —incluyendo textos, imágenes, vídeos, música, diseño gráfico y marca— son propiedad de Toti Sanz o cuentan con los
                            derechos necesarios para su uso.
                        </p>
                        <p className="mt-2">
                            Queda prohibida la reproducción, distribución o modificación total o parcial de dichos contenidos sin autorización expresa del titular.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">5. Enlaces a terceros</h2>
                        <p>
                            Este sitio web puede contener enlaces a plataformas externas como YouTube, Spotify o redes sociales. Toti Sanz no se responsabiliza del contenido ni de
                            las políticas de privacidad de dichos sitios.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">6. Responsabilidad</h2>
                        <p>
                            El titular no se hace responsable de posibles errores técnicos, interrupciones del servicio o daños derivados del uso de este sitio web, siempre que se
                            hayan aplicado las medidas razonables para su correcto funcionamiento.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">7. Legislación aplicable</h2>
                        <p>
                            Los presentes términos se rigen por la legislación española. Para la resolución de cualquier conflicto, las partes se someterán a los juzgados y
                            tribunales que correspondan conforme a la ley.
                        </p>
                    </section>
                </div>
            </section>
        </main>
    );
}
