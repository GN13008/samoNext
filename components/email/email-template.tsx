// import * as React from "react";

// interface ContactEmailTemplateProps {
//   firstName: string;
//   lastName: string;
//   company: string;
//   email: string;
//   message: string;
// }

// export const ContactEmailTemplate: React.FC<
//   Readonly<ContactEmailTemplateProps>
// > = ({ firstName, lastName, company, email, message }) => (
//   <div>
//     <h1>Vous avez un nouveau message de Samo-acier.fr</h1>
//     <h2>Nom : {lastName}</h2>
//     <h2>Prénom : {firstName}</h2>
//     <h2>Entreprise : {company}</h2>
//     <h2>email : {email}</h2>
//     <p>{message}</p>
//     <img src="/logoSamo.png" alt="" />
//   </div>
// );

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import type * as React from "react";

interface ContactEmailTemplateProps {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ContactEmailTemplate = ({
  firstName,
  lastName,
  company,
  email,
  message,
}: ContactEmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Preview>Contact Samo</Preview>
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src="https://www.samo-aciers.fr/logoSamo.png"
            height="75"
            alt="samo"
            className="mx-auto py-20"
          />
          <Container className="bg-white p-45">
            {/* <Heading className="text-center my-0 leading-8">
              Samo aciers.fr
            </Heading> */}

            {/* <Section>
              <Row>
                <Text className="text-base">
                  Vous avez une nouvelle demande de samo-aciers.fr
                </Text>

                <Text className="text-base">La demande :</Text>
              </Row>
            </Section> */}

            <Text className="text-base">
              Vous avez une nouvelle demande provenant du site samo-aciers.fr
            </Text>

            <ul className="mb-20">
              <li className="" key={1}>
                <strong>Nom :</strong> {lastName}
              </li>
              <li className="" key={2}>
                <strong>Prénom :</strong> {firstName}
              </li>
              <li className="" key={3}>
                <strong>Entreprise :</strong> {company}
              </li>
              <li className="" key={3}>
                <strong>Mail :</strong> {email}
              </li>
            </ul>
            <Text className="text-base">La demande :</Text>
            <Text className="text-base">{message}</Text>
            {/* <Section className="text-center">
              <Button className="bg-brand text-white rounded-lg py-3 px-[18px]">
                Go to your dashboard
              </Button>
            </Section> */}

            <Section className="mt-45">
              <Row>
                <Column key="samo">
                  <Link
                    className="text-black underline font-bold"
                    href={"https://samo-aciers.fr"}
                  >
                    Samo aciers.fr
                  </Link>{" "}
                  <span className="text-green-500">→</span>
                </Column>
              </Row>
            </Section>
          </Container>

          {/* <Container className="mt-20">
            <Section>
              <Row>
                <Column className="text-right px-20">
                  <Link>Unsubscribe</Link>
                </Column>
                <Column className="text-left">
                  <Link>Manage Preferences</Link>
                </Column>
              </Row>
            </Section>
            <Text className="text-center text-gray-400 mb-45">
              Netlify, 44 Montgomery Street, Suite 300 San Francisco, CA
            </Text>
          </Container> */}
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmailTemplate;
