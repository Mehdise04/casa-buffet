import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

// Initialize App
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Resend with the user's API key
// NOTE: In production, this should be in an .env file
const resend = new Resend('re_PmerWKmA_Nj7ttyNgd5L4EBN8KRauBUEt');

// Routes
app.post('/api/send-email', async (req, res) => {
    const { user_email, user_name, message } = req.body;

    try {
        const data = await resend.emails.send({
            from: 'Casa Buffet <onboarding@resend.dev>', // Default testing domain for Resend
            to: ['casabuffet001@gmail.com'], // Send to the business email
            reply_to: user_email,
            subject: `Nouveau message de ${user_name}`,
            html: `
                <h3>Nouveau message reçu via le site web</h3>
                <p><strong>De:</strong> ${user_name} (${user_email})</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
