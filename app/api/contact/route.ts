import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// --------- Schema backend (no confíes solo en el frontend)
const contactSchema = z.object({
    name: z.string().min(2),
    email: z.email(),
    message: z.string().min(10),
    company: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Honeypot: si viene relleno, es bot
        if (body.company) {
            return NextResponse.json({ ok: true });
        }

        const { name, email, message } = contactSchema.parse(body);

        // Sanitización básica
        const cleanName = name.replace(/[<>]/g, '');
        const cleanMessage = message.replace(/[<>]/g, '');

        const transporter = nodemailer.createTransport({
            host: process.env.OCI_SMTP_HOST,
            port: Number(process.env.OCI_SMTP_PORT),
            secure: false, // 587 = STARTTLS
            auth: {
                user: process.env.OCI_SMTP_USER,
                pass: process.env.OCI_SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Formulario Web" <${process.env.MAIL_FROM}>`,
            to: process.env.MAIL_TO, // fijo en backend
            replyTo: email,
            subject: `Nuevo mensaje de ${cleanName}`,
            text: `
Nombre: ${cleanName}
Email: ${email}

Mensaje:
${cleanMessage}
      `,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('Contact email error:', error);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}
