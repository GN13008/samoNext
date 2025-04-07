import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Vous avez un nouveau message de Samo-acier.fr</h1>
    <h2>Nom complet : {name}</h2>
    <h2>email : {email}</h2>
    <p>{message}</p>
  </div>
);
