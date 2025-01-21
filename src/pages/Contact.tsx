import { useState } from "react";

import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import CV from '../assets/images/CVJoanny.png';
import CVwh from '../assets/images/CVJoannywh.png';
import linkedinwh from '../assets/images/linkedin-white.png';
import githubwh from '../assets/images/githubwh.png';

import Navbar from "../components/Navbar";

const Contact = () => {
  const [over1, setOver1] = useState(false);
  const [over2, setOver2] = useState(false);
  const [over4, setOver4] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Une erreur inattendue est survenue.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
      <Navbar />
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Contactez-moi</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          {status && (
            <div
              className={`text-sm font-medium ${
                status.includes("succès") ? "text-green-500" : "text-red-500"
              } mb-4`}
            >
              {status}
            </div>
          )}
          <button
            type="submit"
            className={`w-full py-3 mt-4 bg-blue-500 text-white rounded-md ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi..." : "Envoyer"}
          </button>
        </form>

      </div>

      <h4 className="text-center my-6 text-lg font-semibold text-gray-800 border-t border-gray-300 pt-4">
      Ou suivez-moi
      </h4>

      <div className='flex mt-4 p-4 bg-blue-500 rounded-lg'>
            <a href="https://github.com/Shark-44" target="_blank" rel="noopener noreferrer"><img className="icone" src={over1 ? githubwh : github} onMouseOver={() => setOver1(true)}
            onMouseOut={() => setOver1(false)} alt="github" /></a>        
            <a href="https://www.linkedin.com/in/joanny-bernardeau-6a9b51bb" target="_blank"><img className="icone" src={over2 ? linkedinwh : linkedin} onMouseOver={() => setOver2(true)}
            onMouseOut={() => setOver2(false)} alt="linkedin" /></a>

            <a href="https://1drv.ms/b/c/f1d07a223c005096/EaTPToTHVwdDl_Keqy21epUB16an95T-8uxqIlw092BUEg?e=52qJkg" target="_blank"><img className="icone" src={over4 ? CVwh : CV} onMouseOver={() => setOver4(true)}
            onMouseOut={() => setOver4(false)} alt="cv" /></a>
            </div>
    </div>
  );
};

export default Contact;
