import Image from "next/image";
import { products } from "./data";

export default function FooterComponent() {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10">
        <div className="footer container mx-auto">
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
            <a className="link link-hover" href="#produits">
              Produits
            </a>
            <a className="link link-hover" href="#histoire">
              Histoire
            </a>
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Informations</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
      <footer className="footer footer-center bg-base-200 text-base-content p-4">
        <aside>
          <p>Un site conçu par L'atelier GND © {new Date().getFullYear()}</p>
        </aside>
      </footer>
    </>
  );
}
