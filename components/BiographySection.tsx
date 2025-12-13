// components/BiographySection.tsx
export default function BiographySection() {
    return (
        <section id="biografia" className="bg-black px-6 py-20 text-white">
            <div className="mx-auto max-w-4xl prose prose-invert prose-lg">
                <h2>BIOGRAFÍA</h2>

                <p>Toti Sanz es un joven cantante, músico y compositor de Lanzarote...</p>

                <blockquote>
                    “Escribo sobre lo que siento, sobre mis vivencias.”
                    <span>— Toti Sanz</span>
                </blockquote>
            </div>
        </section>
    );
}
