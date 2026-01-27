import { Resend } from 'resend';

const resend = new Resend('re_PmerWKmA_Nj7ttyNgd5L4EBN8KRauBUEt');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { user_email, user_name, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Casa Buffet <onboarding@resend.dev>', // Default testing domain for Resend
      to: ['mehdisifessalam111@gmail.com'], // Send to the business email
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
}
