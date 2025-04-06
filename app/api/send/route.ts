import { EmailTemplate } from "../../../components/email/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  try {
    const body = await req.json(); // Lire le formData envoyé
    const { name, email, message } = body;

    // commercial@samo-aciers.fr
    const { data, error } = await resend.emails.send({
      from: `noreply@samo-aciers.fr`,
      to: ["negro.guillaume.dev@gmail.com"],
      subject: `Demande de contact samo-acier`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
