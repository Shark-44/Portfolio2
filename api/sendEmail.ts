import type { VercelRequest, VercelResponse } from "@vercel/node";
import sgMail from "@sendgrid/mail";

// Vérification de la clé API
const sendgridApiKey = process.env.SENDGRID_API_KEY;
if (!sendgridApiKey) {
  throw new Error("SENDGRID_API_KEY is missing. Please set it in the environment variables.");
}

// Configuration de SendGrid
sgMail.setApiKey(sendgridApiKey);

// Type pour les données du formulaire
interface FormData {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    const { name, email, message } = req.body as FormData;

    const msg = {
      to: "joanny.bernardeau@gmail.com",
      from: "contact@ha-jb.ovh", // Assurez-vous que cet email est vérifié sur SendGrid
      subject: `Nouveau message de ${name}`,
      text: message,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);
    return res.status(200).json({ message: "Message envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
    return res.status(500).json({ error: "Erreur lors de l'envoi du message." });
  }
};

export default handler;