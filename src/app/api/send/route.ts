
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const body = await request.text(); // Read the request body as text
    const json = JSON.parse(body); // Parse the text into JSON
    const {name, surname, email, message} = json;
    console.log(name, surname, email, message);
    try {
        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['verdesb.devacc@gmail.com'],
            subject: 'New Message',
            react: EmailTemplate({ name, surname, email, message }),
            text: name + surname + email + message,
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
