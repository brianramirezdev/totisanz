'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, User, MessageSquare, Send, Loader2, CheckCircle2 } from 'lucide-react';

// Schema de validación
const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .refine((v) => v.trim().length > 0, 'El nombre es obligatorio'),
    email: z.email('Email inválido').refine((v) => v.trim().length > 0, 'El email es obligatorio'),
    message: z
        .string()
        .min(10, 'El mensaje debe tener al menos 10 caracteres')
        .refine((v) => v.trim().length > 0, 'El mensaje es obligatorio'),

    // honeypot (no afecta estilos)
    company: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        mode: 'onTouched',
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitStatus('success');
                reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Honeypot invisible */}
            <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register('company')} />

            {/* Nombre */}
            <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold">
                    <User className="h-4 w-4 text-accent-orange" />
                    Tu nombre
                </label>
                <Input placeholder="Nombre completo" disabled={isSubmitting} {...register('name')} className="h-12" />
                {errors.name && <p className="text-red-500 text-sm mt-1 italic">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold">
                    <Mail className="h-4 w-4 text-accent-orange" />
                    Tu email
                </label>
                <Input type="email" placeholder="tu@email.com" disabled={isSubmitting} {...register('email')} className="h-12" />
                {errors.email && <p className="text-red-500 text-sm mt-1 italic">{errors.email.message}</p>}
            </div>

            {/* Mensaje */}
            <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold">
                    <MessageSquare className="h-4 w-4 text-accent-orange" />
                    Tu mensaje
                </label>
                <Textarea placeholder="Cuéntame qué tienes en mente..." rows={6} disabled={isSubmitting} {...register('message')} className="resize-none" />
                {errors.message && <p className="text-red-500 text-sm mt-1 italic">{errors.message.message}</p>}
            </div>

            {/* Botón */}
            <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full gap-2 bg-accent-orange text-base font-semibold transition-all hover:bg-orange-600 disabled:opacity-50"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin" />
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
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <p className="font-medium">¡Mensaje enviado! Te responderé pronto.</p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                    <p className="font-medium">Hubo un error. Inténtalo de nuevo.</p>
                </div>
            )}
        </form>
    );
}
