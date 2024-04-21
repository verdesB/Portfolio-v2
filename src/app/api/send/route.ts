import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import rateLimit from "@/app/utils/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//     const body = await request.text();
//     const json = JSON.parse(body);
//     const {name, surname, email, message} = json;
//     console.log(name, surname, email, message);
//     try {
//         const data = await resend.emails.send({
//             from: 'Portfolio <onboarding@resend.dev>',
//             to: ['verdesb.devacc@gmail.com'],
//             subject: 'New Message',
//             react: EmailTemplate({ name, surname, email, message }),
//             text: name + surname + email + message,
//         });
//
//         return Response.json(data);
//     } catch (error) {
//         return Response.json({ error });
//     }
// }
 export async function POST(request: Request) {
     // const referer = request.headers.get('referer');
     //
     // // if (referer !== 'https://localhost:3000/') {
     //     if (referer !== 'https://77.37.122.221:3000/') {
     // // if (referer !== 'https://www.bennydev.fr/') {
     //     return new Response(JSON.stringify('Unauthorized'), {
     //         status: 401,
     //         headers: {
     //             'Content-Type': 'application/json',
     //         },
     //     });
     //
     // } else {
     //     if (await rateLimit(request)) {
     //         return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
     //             status: 429,
     //             headers: {
     //                 'Content-Type': 'application/json',
     //             },
     //         });
     //     }
         const body = await request.text();
         const json = JSON.parse(body);
         const {name, surname, email, message} = json;
         console.log(name, surname, email, message);
         try {
             const data = await resend.emails.send({
                 from: 'Portfolio <onboarding@resend.dev>',
                 to: ['verdesb.devacc@gmail.com'],
                 subject: 'New Message',
                 react: EmailTemplate({name, surname, email, message}),
                 text: name + surname + email + message,
             });

             return Response.json(data);
         } catch (error) {
             return Response.json({error});
         }
     // }
}
