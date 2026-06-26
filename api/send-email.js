import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { user_email, user_name, message } = req.body;

  // Configurable via env so a verified-domain sender / recipient can be set without code changes.
  const FROM = process.env.CONTACT_FROM || 'CasaBuffet <onboarding@resend.dev>';
  const TO = (process.env.CONTACT_TO || 'mehdisifessalam111@gmail.com').split(',').map((s) => s.trim());

  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: TO,
      reply_to: user_email,
      subject: `Nouveau message de ${user_name}`,
      html: `
        <h3>Nouveau message reçu via le site web</h3>
        <p><strong>De:</strong> ${user_name} (${user_email})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ success: false, error: error.message || error });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
