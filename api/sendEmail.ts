import { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';


const sendgridApiKey = process.env.SENDGRID_API_KEY;
if (!sendgridApiKey) {
  throw new Error("SENDGRID_API_KEY is missing. Please set it in the environment variables.");
}

sgMail.setApiKey(sendgridApiKey);

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const msg = {
      to: "joanny.bernardeau@gmail.com", 
      from: "contact@ha-jb.ovh", 
      subject: `Nouveau message de ${name}`,
      text: message,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      await sgMail.send(msg);
      return res.status(200).json({ message: "Message envoyé avec succès !" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erreur lors de l'envoi du message." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Méthode non autorisée");
  }
};
