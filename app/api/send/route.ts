import { ContactEmailTemplate } from "../../../components/email/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  try {
    const body = await req.json(); // Lire le formData envoyé
    const { firstName, lastName, company, email, message } = body;

    // commercial@samo-aciers.fr
    const { data, error } = await resend.emails.send({
      from: `noreply@samo-aciers.fr`,
      to: [process.env.RESEND_MAIL_TO as string],
      subject: `Demande de contact depuis samo-acier`,
      react: ContactEmailTemplate({
        firstName,
        lastName,
        company,
        email,
        message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
