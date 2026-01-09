import { Hono } from "hono";
import { Env } from './core-utils';

const RECIPIENT_EMAIL = 'vishnuvaradhan700@gmail.com';

export function userRoutes(app: Hono<{ Bindings: Env }>) {
    app.get('/api/test', (c) => c.json({ success: true, data: { name: 'this works' }}));
    
    // Handle portfolio contact form submissions
    app.post('/api/contact', async (c) => {
        try {
            const body = await c.req.json();
            const { name, email, message } = body;
            
            // Simple server-side validation
            if (!name || !email || !message) {
                return c.json({
                    success: false,
                    error: "Missing required fields: name, email, and message are all required."
                }, 400);
            }
            
            // Send email using Formspree
            const emailResponse = await fetch('https://formspree.io/f/mzddpprj', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                    _replyto: email,
                }),
            });
            
            if (!emailResponse.ok) {
                console.error('[EMAIL SEND ERROR]', await emailResponse.text());
                return c.json({
                    success: false,
                    error: "Failed to send email. Please try again later."
                }, 500);
            }
            
            // Log submission
            console.log("--- CONTACT FORM SUBMISSION ---");
            console.log(`[SENDER NAME]: ${name}`);
            console.log(`[SENDER EMAIL]: ${email}`);
            console.log(`[MESSAGE CONTENT]: ${message}`);
            console.log(`[EMAIL SENT TO]: ${RECIPIENT_EMAIL}`);
            console.log("-------------------------------");
            
            return c.json({
                success: true,
                message: "Thank you for reaching out! Your message has been sent."
            });
        } catch (error) {
            console.error('[CONTACT API ERROR]', error);
            return c.json({
                success: false,
                error: "Failed to process the message. Please try again later."
            }, 500);
        }
    });
}