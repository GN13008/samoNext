"use client";

import { useState } from "react";

const EMPTY_FORM = {
  lastName: "",
  firstName: "",
  company: "",
  email: "",
  message: "",
  // Champ piège anti-robots : doit rester vide.
  website: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setErrorMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Erreur lors de l'envoi du message");
      }

      setSuccess(true);
      setFormData(EMPTY_FORM);
    } catch (error: any) {
      setErrorMessage(
        `${error.message}. Vous pouvez aussi nous écrire à commercial@samo-aciers.fr ou nous appeler au 04 77 93 00 33.`
      );
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Formulaire de contact</h2>
      {success && (
        <p className="text-green-600" role="status">
          Message envoyé avec succès !
        </p>
      )}
      {errorMessage && (
        <p className="text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          aria-label="Nom"
          autoComplete="family-name"
          maxLength={100}
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          aria-label="Prénom"
          autoComplete="given-name"
          maxLength={100}
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Entreprise"
          aria-label="Entreprise"
          autoComplete="organization"
          maxLength={150}
          value={formData.company}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          autoComplete="email"
          maxLength={254}
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          aria-label="Votre message"
          maxLength={5000}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        {/* Honeypot : caché aux humains et aux lecteurs d'écran */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-10000px" }}
        >
          <label>
            Ne pas remplir
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
          disabled={loading}
        >
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
}
