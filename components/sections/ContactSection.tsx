'use client';

import SocialLinks from '../ui/social-links';
import ContactForm from '../ContactForm';

export default function ContactSection() {
    return (
        <section id="contacto" className="bg-background-soft px-6 2xl:px-0 py-16 md:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 md:mb-20 flex flex-col items-start">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">CONTACTO</h2>
                    <h3 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-500 uppercase">Hablemos</h3>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Información de contacto */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="mb-6 text-3xl font-bold md:text-4xl">¿Tienes una propuesta?</h3>
                            <p className="text-lg leading-relaxed text-gray-600">
                                Ya sea para colaboraciones, conciertos, o simplemente para saludar, estoy aquí para escucharte. Completa el formulario y te responderé lo antes
                                posible.
                            </p>
                        </div>

                        {/* Redes sociales */}
                        <div>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Sígueme en</p>
                            <SocialLinks />
                        </div>

                        {/* Email directo */}
                        <div className="border-l-4 border-accent-orange pl-6">
                            <p className="mb-2 text-sm font-medium text-gray-500">Email directo</p>
                            <a href="mailto:contacto@totisanz.com" className="text-xl font-semibold hover:text-accent-orange md:text-2xl transition-colors">
                                contacto@totisanz.com
                            </a>
                        </div>
                    </div>

                    {/* Formulario */}
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
