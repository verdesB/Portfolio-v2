import { nextCsrf } from "next-csrf";

const { csrf, setup } = nextCsrf({
    secret: process.env.CSRF_SECRET, // Assurez-vous d'avoir défini cette variable d'environnement
});

export { csrf, setup };