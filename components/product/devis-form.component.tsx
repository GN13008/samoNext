"use client";

import { NuanceData } from "@/utils/fake-db";
import { useState, useEffect } from "react";
import { ContactDevisTemplateProps } from "../email/email-template";
import SnackBar from "../snackbar/snackbar.component";

function ProductOptions({
  dim,
  handleChangeRadio,
  section,
}: {
  dim: any;
  handleChangeRadio: (name: string, value: string) => void;
  section: string | null;
}) {
  const [selectedValue, setSelectedValue] = useState<string | null>(() => {
    return section || null;
  });

  useEffect(() => {
    setSelectedValue(section || null);
  }, [section]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    handleChangeRadio("section", value);
  };

  if (dim.type !== "list") return null;

  return (
    <div>
      <label className="block text-lg font-medium text-gray-700 mb-2">
        {dim.label}
      </label>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pr-2 max-h-64 sm:max-h-96 overflow-auto">
        {dim.values.map((value: string) => (
          <label
            key={value}
            className={`cursor-pointer border rounded-md py-2 px-4 flex items-center justify-center text-center transition-colors
              ${
                section === value
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            <input
              type="radio"
              name={dim.name || dim.label}
              value={value}
              className="sr-only"
              onChange={handleChange}
              checked={section === value}
            />
            <span className="w-full">{value}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function DevisForm({
  data,
  nuance,
}: {
  data: NuanceData;
  nuance: string;
}) {
  const emptyForm: ContactDevisTemplateProps = {
    section: "",
    quantite: 1,
    longueur: null,
    nuance: nuance,
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] =
    useState<ContactDevisTemplateProps>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeRadio = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }

      setSuccess(true);
      setFormData(emptyForm);
    } catch (error: any) {
      console.error(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="">
      <SnackBar
        open={success}
        message={"Demande de devis envoyé avec succès !"}
        handleclose={() => setSuccess(false)}
      />

      {/* Formulaire de sélection */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {/* Sélection du diamètre intérieur */}
          <div className="flex flex-col gap-4 mb-4">
            <label className="block text-xl font-semibold text-gray-700">
              {data.dims.length ? "Dimensions disponibles :" : ""}
            </label>
            {data.dims.map((dim, i) => (
              <div key={i}>
                {dim.type === "list" && (
                  <ProductOptions
                    handleChangeRadio={handleChangeRadio}
                    dim={dim}
                    section={formData.section}
                  />
                )}
                {dim.type == "range" && (
                  <div className="">
                    <label className="block text-lg font-medium text-gray-700">
                      {dim.label}
                    </label>
                    <p>
                      De {dim.values[0]} à {dim.values[1]}
                    </p>
                  </div>
                )}
              </div>
            ))}
            <label className="block text-lg font-medium text-gray-700">
              Longueur
            </label>
            <input
              type="number"
              className="input input-primary validator"
              required
              placeholder="Longueur en mm"
              // min="1"
              // max="10"
              onChange={handleChange}
              title="longueur"
              name="longueur"
              value={formData.longueur || ''}
            />
            <label className="block text-lg font-medium text-gray-700">
              Quantité
            </label>
            <input
              type="number"
              className="input input-primary validator"
              required
              placeholder="Quantité"
              min="1"
              onChange={handleChange}
              value={formData.quantite}
              name="quantite"
              // max="10"
              title="quantite"
            />
            <label className="block text-lg font-medium text-gray-700">
              Pour vous re contacter
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Nom"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border input input-primary"
              required
            />
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border input input-primary"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Entreprise"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border input input-primary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border input input-primary"
              required
            />
            <textarea
              name="message"
              placeholder="Un message particulier ?"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border input input-primary"
            ></textarea>
            {/* <p className="validator-hint">Must be between be 1 to 10</p> */}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          {loading ? "Envoi..." : "Envoyer ma demande"}
        </button>
        <button className="btn btn-info btn-block" disabled={loading}>
          Téléphoner
        </button>
      </form>
    </div>
  );
}
