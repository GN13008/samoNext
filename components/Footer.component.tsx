import Image from "next/image";
import { products } from "./data";

export default function FooterComponent() {
  return (
    <>
      <footer className="footer bg-slate-50 text-base-content p-4 px-8 lg:p-10">
        <div className="footer container lg:px-8 mx-auto">
          <aside>
            <Image
              src="/logoSamo_transparent.png"
              alt="logo samo aciers"
              width={200}
              height={100}
            />
            <p>Vente d'acier depuis 1958</p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            {products.map((prod, i) => {
              return (
                <a key={i} className="link link-hover" href={prod.link}>
                  {prod.title}
                </a>
              );
            })}
          </nav>
          <nav>
            <h6 className="footer-title">Samo Aciers</h6>
            <a className="link link-hover" href="/#produits">
              Produits
            </a>
            <a className="link link-hover" href="/#histoire">
              Histoire
            </a>
            <a className="link link-hover" href="/#faq">
              FAQ
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Informations</h6>
            <a href="/informations-legales" className="link link-hover">
              Informations legales
            </a>
            <a href="tel:0477930033" className="link link-hover">
              04 77 93 00 33
            </a>
            <a
              href="mailto:commercial@samo-aciers.fr"
              className="link link-hover"
            >
              commercial@samo-aciers.fr
            </a>
          </nav>
        </div>
      </footer>
      <footer className="footer footer-center bg-slate-50 text-base-content p-4">
        <aside>
          <p>
            Un site conçu par{" "}
            <a
              href="https://ateliergnd.fr/"
              target="_blank"
              className="text-primary"
            >
              L'atelier GND
            </a>{" "}
            © {new Date().getFullYear()}
          </p>
        </aside>
      </footer>
    </>
  );
}
