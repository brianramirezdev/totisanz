'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import { SiInstagram, SiYoutube, SiSpotify, SiTiktok } from '@icons-pack/react-simple-icons';
import { useState } from 'react';

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.message) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Aquí iría tu lógica de envío (API route, email service, etc.)
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" className="bg-white px-6 py-20 md:py-32">
            <div className="mx-auto max-w-7xl">
                {/* <div className="mb-16">
                    <h2 className="mb-4 text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl xl:text-9xl">CONTACTO</h2>
                    <p className="text-2xl text-gray-400 md:text-3xl">Hablemos</p>
                </div> */}
                <div className="mb-8 md:mb-20 flex flex-col items-start">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">CONTACTO </h2>
                    <h3 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-300 uppercase">Hablemos</h3>
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
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://www.instagram.com/toti.sanz/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 transition-all hover:border-pink-500 hover:bg-pink-50 hover:text-pink-500"
                                    aria-label="Instagram"
                                >
                                    <SiInstagram className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.youtube.com/@TotiSanz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 transition-all hover:border-red-500 hover:bg-red-50 hover:text-red-500"
                                    aria-label="YouTube"
                                >
                                    <SiYoutube className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://open.spotify.com/intl-es/artist/0RWI1GOUTOVYETw5uVKmRC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 transition-all hover:border-green-500 hover:bg-green-50 hover:text-green-500"
                                    aria-label="Spotify"
                                >
                                    <SiSpotify className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@toti.sanz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 transition-all hover:border-black hover:bg-gray-50"
                                    aria-label="TikTok"
                                >
                                    <SiTiktok className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        {/* Email directo */}
                        <div className="border-l-4 border-orange-500 pl-6">
                            <p className="mb-2 text-sm font-medium text-gray-500">Email directo</p>
                            <a href="mailto:contacto@totisanz.com" className="text-xl font-semibold hover:text-orange-500 md:text-2xl">
                                contacto@totisanz.com
                            </a>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="space-y-6">
                        {/* Nombre */}
                        <div>
                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold">
                                <User className="h-4 w-4 text-orange-500" />
                                Tu nombre
                            </label>
                            <Input
                                type="text"
                                placeholder="Nombre completo"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                disabled={isSubmitting}
                                className="h-12"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold">
                                <Mail className="h-4 w-4 text-orange-500" />
                                Tu email
                            </label>
                            <Input
                                type="email"
                                placeholder="tu@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                disabled={isSubmitting}
                                className="h-12"
                            />
                        </div>

                        {/* Mensaje */}
                        <div>
                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold">
                                <MessageSquare className="h-4 w-4 text-orange-500" />
                                Tu mensaje
                            </label>
                            <Textarea
                                placeholder="Cuéntame qué tienes en mente..."
                                rows={6}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                disabled={isSubmitting}
                                className="resize-none"
                            />
                        </div>

                        {/* Botón */}
                        <Button
                            onClick={handleSubmit}
                            size="lg"
                            disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                            className="w-full gap-2 bg-orange-500 text-base font-semibold transition-all hover:bg-orange-600 disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <Send className="h-4 w-4" />
                                    Enviar mensaje
                                </>
                            )}
                        </Button>

                        {/* Mensajes de estado */}
                        {submitStatus === 'success' && (
                            <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center text-green-700">✓ ¡Mensaje enviado! Te responderé pronto.</div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-red-700">✕ Hubo un error. Inténtalo de nuevo.</div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
