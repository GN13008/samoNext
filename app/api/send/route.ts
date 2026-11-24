import { ContactEmailTemplate } from "../../../components/email/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_LENGTH = {
  firstName: 100,
  lastName: 100,
  company: 150,
  email: 254,
  message: 5000,
} as const;

// Limite de débit "best effort" : le compteur est en mémoire, donc propre à
// chaque instance serverless. Ça freine un script naïf, pas une attaque distribuée.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Évite que la map grossisse indéfiniment.
  if (hits.size > 1000) {
    hits.forEach((times, key) => {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    });
  }
  return recent.length > MAX_REQUESTS_PER_WINDOW;
}

function field(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  // Retire les caractères de contrôle (sauf retours à la ligne et tabulations).
  const cleaned = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");
  const trimmed = cleaned.trim();
  if (trimmed.length === 0 || trimmed.length > max) return null;
  return trimmed;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Trop de demandes, merci de réessayer dans quelques minutes." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Champ piège (honeypot) : invisible pour un humain, rempli par les robots.
  // On répond "ok" sans rien envoyer pour ne pas leur indiquer qu'ils sont repérés.
  if (typeof body.website === "string" && body.website.length > 0) {
    return Response.json({ ok: true });
  }

  const firstName = field(body.firstName, MAX_LENGTH.firstName);
  const lastName = field(body.lastName, MAX_LENGTH.lastName);
  const company = field(body.company, MAX_LENGTH.company);
  const email = field(body.email, MAX_LENGTH.email);
  const message = field(body.message, MAX_LENGTH.message);

  if (!firstName || !lastName || !company || !email || !message) {
    return Response.json(
      { error: "Merci de remplir tous les champs correctement." },
      { status: 400 }
    );
  }
  if (!EMAIL_REGEX.test(email)) {
    return Response.json({ error: "Adresse e-mail invalide." }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
      from: `noreply@samo-aciers.fr`,
      to: [process.env.RESEND_MAIL_TO as string],
      replyTo: email,
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
      console.error("Resend error:", error);
      return Response.json({ error: "Envoi impossible." }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Envoi impossible." }, { status: 500 });
  }
}
