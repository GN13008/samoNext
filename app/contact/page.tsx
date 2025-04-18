import ContactForm from "@/components/contact-form.component";
import FAQ from "@/components/FAQ.component";

function ContactEl({
  svg,
  title,
  text,
}: {
  svg: any;
  title: string;
  text: string;
}) {
  return (
    <div className="flex lg:flex-col gap-4 lg:gap-0">
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
        {svg}
      </div>
      <div className="">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{text}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="hero bg-slate-50" id="histoire">
        <div className="hero-content flex flex-col lg:my-24">
          <h2 className="w-full lg:mb-4 text-left">Nous contacter</h2>
          <div className="hero-content p-0 py-4 flex-col-reverse lg:flex-row">
            <ContactForm />
            <div className="flex flex-col gap-8 lg:ml-32">
              <a
                className="block"
                target="_blank"
                href="https://maps.app.goo.gl/qq5gxWBXw2evqZG16"
              >
                <ContactEl
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  }
                  title="Samo aciers"
                  text="6 Av. de l'Industrie, 42390 Villars"
                />
              </a>
              <a className="block" href="tel:0477930033">
                <ContactEl
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  }
                  title="Par téléphone"
                  text="04 77 93 00 33"
                />
              </a>
              <a className="block" href="mailto:commercial@samo-aciers.fr">
                <ContactEl
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  }
                  title="Par mail"
                  text="commercial@samo-aciers.fr"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <FAQ />
    </div>
  );
}
