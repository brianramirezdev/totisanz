import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de privacidad | Toti Sanz',
    description: 'Política de privacidad de la web oficial de Toti Sanz.',
};

export default function PrivacyPage() {
    return (
        <main className="bg-white text-black">
            <section className="mx-auto max-w-4xl px-6 py-24">
                {/* Header */}
                <header className="mb-20">
                    <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Política de privacidad</h1>
                    <div className="mt-6 h-1 w-24 bg-orange-500" />
                </header>

                {/* Content */}
                <div className="space-y-12 text-lg leading-relaxed text-gray-700">
                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">1. Responsable del tratamiento</h2>
                        <p>
                            El responsable del tratamiento de los datos personales recogidos a través de esta web es <strong>Toti Sanz</strong>.
                        </p>
                        <p className="mt-2">
                            Email de contacto:{' '}
                            <a href="mailto:contacto@totisanz.com" className="font-medium text-orange-500 hover:underline">
                                contacto@totisanz.com
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">2. Datos que se recogen</h2>
                        <p>A través del formulario de contacto se recogen los siguientes datos personales:</p>
                        <ul className="mt-4 list-disc pl-6">
                            <li>Nombre</li>
                            <li>Dirección de correo electrónico</li>
                            <li>Mensaje enviado por el usuario</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">3. Finalidad del tratamiento</h2>
                        <p>Los datos se utilizan únicamente para responder a las consultas o mensajes enviados por el usuario a través del formulario de contacto.</p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">4. Legitimación</h2>
                        <p>La base legal para el tratamiento de los datos es el consentimiento del usuario, otorgado al enviar el formulario de contacto.</p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">5. Conservación de los datos</h2>
                        <p>
                            Los datos no se almacenan en bases de datos. Únicamente se conservan en la bandeja de correo electrónico el tiempo necesario para responder a la
                            consulta.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">6. Cesión de datos a terceros</h2>
                        <p>No se ceden datos personales a terceros ni se utilizan con fines comerciales.</p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">7. Derechos del usuario</h2>
                        <p>
                            El usuario puede ejercer sus derechos de acceso, rectificación o supresión de sus datos personales enviando un correo electrónico a{' '}
                            <a href="mailto:contacto@totisanz.com" className="font-medium text-orange-500 hover:underline">
                                contacto@totisanz.com
                            </a>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold text-black">8. Seguridad</h2>
                        <p>Se aplican medidas técnicas razonables para proteger la información personal recibida y evitar accesos no autorizados.</p>
                    </section>
                </div>
            </section>
        </main>
    );
}
