// components/ContactSection.tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
    return (
        <section id="contacto" className="bg-white px-6 py-20">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="mb-12 text-5xl font-bold">CONTACTO</h2>

                <form className="space-y-4 bg-gray-50 p-8">
                    <Input name="name" placeholder="Tu nombre" />
                    <Input name="email" type="email" placeholder="Tu email" />
                    <Textarea name="message" rows={5} placeholder="Tu mensaje" />

                    <Button type="submit" className="w-full bg-orange-500">
                        ENVIAR MENSAJE
                    </Button>
                </form>
            </div>
        </section>
    );
}
