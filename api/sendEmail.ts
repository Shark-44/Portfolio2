import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as sgMail from "@sendgrid/mail";

// Type pour les erreurs SendGrid
interface SendGridError {
  response?: {
    status?: number;
    body?: any;
  };
  code?: number;
  message?: string;
}

// Type pour les données du formulaire
interface FormData {
  name: string;
  email: string;
  message: string;
}

const sendgridApiKey = process.env.SENDGRID_API_KEY;
if (!sendgridApiKey) {
  throw new Error("SENDGRID_API_KEY is missing. Please set it in the environment variables.");
}

sgMail.setApiKey(sendgridApiKey);

const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    const { name, email, message } = req.body as FormData;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Tous les champs sont requis" });
    }

    const msg = {
      to: "joanny.bernardeau@gmail.com",
      from: {
        email: "contact@ha-jb.ovh",
        name: "Votre Site"
      },
      subject: `Nouveau message de ${name}`,
      text: `Message de : ${name}\nEmail : ${email}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <p>${message}</p>
        </div>
      `
    };

    await sgMail.send(msg);
    return res.status(200).json({ message: "Message envoyé avec succès !" });
  } catch (error: unknown) {
    console.error("Erreur lors de l'envoi du message:", error);
    
    const sendGridError = error as SendGridError;
    if (sendGridError.response) {
      return res.status(sendGridError.response.status || 500).json({ 
        error: "Erreur lors de l'envoi du message",
        details: sendGridError.response.body
      });
    }
    
    return res.status(500).json({ 
      error: "Erreur lors de l'envoi du message",
      message: sendGridError.message || "Une erreur inconnue s'est produite"
    });
  }
};

export default handler;