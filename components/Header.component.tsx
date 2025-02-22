"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ButtonSignin from "./ButtonSignin";
import logo from "@/app/icon.png";
import config from "@/config";

const links = [
  {
    href: "/#produits",
    label: "Produits",
  },
  {
    href: "/#histoire",
    label: "Histoire",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
];

const categories = [
  [
    {
      href: "/produit/rond",
      label: "Rond",
      icons: "/round_bars.svg",
      smallTxt: "Large gamme de rond acier, ...",
    },
    {
      href: "/produit/plat",
      label: "Plat",
      icons: "/flat_bars.svg",
      smallTxt: "Large gamme de plat acier, ...",
    },
  ],
  [
    {
      href: "/produit/carre",
      label: "Carré",
      icons: "/square_bars.svg",
      smallTxt: "Large gamme de carré acier, ...",
    },
    {
      href: "/produit/tube",
      label: "Tube",
      icons: "/seamless_round_tubes.svg",
      smallTxt: "Large gamme de tube acier, ...",
    },
  ],
  [
    {
      href: "/produit/hexagone",
      label: "Hexagone",
      icons: "/hexagon_bars.svg",
      smallTxt: "Large gamme de profilé acier, ...",
    },
  ],
];
// const categories = [
//   [
//     {
//       href: "/produit/rond",
//       label: "Rond",
//     },
//     {
//       href: "/produit/plat",
//       label: "Plat",
//     },
//     {
//       href: "/produit/carre",
//       label: "Carré",
//     },
//     {
//       href: "/produit/tube",
//       label: "Tube",
//     },
//     {
//       href: "/produit/profile",
//       label: "Profilé",
//     },
//   ],
//   [
//     {
//       href: "/produit/exemple",
//       label: "Acier standard",
//     },
//     {
//       href: "/produit/exemple",
//       label: "Aciers alliés de mécanique",
//     },
//     {
//       href: "/produit/exemple",
//       label: "Aciers fortement alliés à outils",
//     },
//   ],
//   [
//     {
//       href: "/produit/exemple",
//       label: "Aciers inoxydables",
//     },
//     {
//       href: "/produit/exemple",
//       label: "Produit non ferreux",
//     },
//     {
//       href: "/produit/exemple",
//       label: "Plastique",
//     },
//   ],
// ];

// const cta = <ButtonSignin extraStyle="btn-primary" />;

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [bigMenuIsOpen, setBigMenuIsOpen] = useState(false);
  const componentRef = useRef<any>(null);

  const handleBigMenuOpen = () => {
    setBigMenuIsOpen(!bigMenuIsOpen);
  };
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  useEffect(() => {
    // Détecte le clic en dehors du composant
    const handleClickOutside = (event: any) => {
      console.log(event.target);
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setBigMenuIsOpen(false); // Exécute une action (comme fermer le composant)
      }
    };

    // Ajoute l'event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Nettoie l'event listener à la suppression du composant
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        className="static container flex items-center justify-between mx-auto"
        aria-label="Global"
        ref={componentRef}
      >
        {/* Your logo/name on large screens */}
        <div className="flex lg:flex-1">
          <Link
            className="flex items-center gap-2 shrink-0 "
            href="/"
            title={`${config.appName} hompage`}
          >
            <Image
              src="/logoSamo_transparent.png"
              alt="logo samo aciers"
              width={200}
              height={100}
            />
          </Link>
        </div>

        {/* Burger button to open menu on mobile */}
        <div className="flex grow justify-end lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-end justify-end rounded-md p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-base-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Your links on large screens */}
        <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
          {/* {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="link link-hover"
              title={link.label}
            >
              {link.label}
            </Link>
          ))} */}
          <div className="dropdown">
            <div
              // tabIndex={0}
              role="button"
              className="flex align-center items-center gap-2 py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              onClick={handleBigMenuOpen}
            >
              Produits{" "}
              {bigMenuIsOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </div>
            {/* <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a href="/produit/exemple">Rond</a>
              </li>
              <li>
                <a href="/produit/exemple">Plat</a>
              </li>
            </ul> */}
          </div>
          <a
            href="tel:0477930033"
            className="flex align-center items-center gap-2 py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
          >
            <svg
              className="w-4 h-4 size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            04 77 93 00 33
          </a>
          {/* <a
            href="/produit/exemple"
            className="btn btn-primary text-white btn-md"
          >
            Mon Compte client
          </a> */}
        </div>

        {/* CTA on large screens */}
        <div className="">
          {/* <Link
          className="hidden lg:flex lg:justify-end lg:flex-1"
          href="/sportif/enzo"
        >
          Go to profil
        </Link> */}
        </div>
        {/* <div className="hidden lg:flex lg:justify-end lg:flex-1">{cta}</div> */}
        <div
          className={`${bigMenuIsOpen ? " " : "hidden "} w-full left-0 top-20 absolute bg-white border-gray-200 shadow-sm border-y`}
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900  sm:grid-cols-2 md:grid-cols-3 md:px-6">
            {categories.map((categorie) => (
              <ul aria-labelledby="mega-menu-full-dropdown-button">
                {categorie.map((produit) => (
                  <li>
                    <a
                      href={produit.href}
                      className="flex gap-2 items-center p-3 rounded-lg hover:bg-gray-50 "
                    >
                      <div className="flex items-center justify-center w-20 h-20">
                        <img
                          src={produit.icons}
                          alt={produit.href}
                          className="w-16 h-16"
                        />
                      </div>
                      <div className="font-semibold">{produit.label}</div>
                      {/* <span className="text-sm text-gray-500 ">
                        {produit.smallTxt}
                      </span> */}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-y-0 left-0 z-10 w-full px-4 lg:px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
        >
          {/* Your logo/name on small screens */}
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center gap-2 shrink-0 "
              title={`${config.appName} hompage`}
              href="/"
            >
              <Image
                src="/logoSamo_transparent.png"
                alt="logo samo aciers"
                width={200}
                height={100}
              />
            </Link>

            {/* <a className="btn btn-ghost text-xl hidden lg:flex"></a>
            <a className="btn btn-ghost text-xl lg:hidden">
              <Image
                src="/logoS_transparent.png"
                alt="logo samo aciers"
                width={50}
                height={50}
              />
            </a> */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Your links on small screens */}
          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {/* {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="link link-hover"
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                ))} */}
                {/* <a
                  href="/produit/exemple"
                  className="btn btn-primary text-white btn-md"
                >
                  Mon Compte client
                </a> */}
                <a
                  href="tel:0477930033"
                  className="flex align-center items-center gap-2 py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  <svg
                    className="w-4 h-4 size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  04 77 93 00 33
                </a>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="checkbox" name="my-accordion-2" />
                  <div className="collapse-title text-xl font-medium">
                    Produits
                  </div>
                  <div className="collapse-content">
                    <div className="grid max-w-screen-xl mx-auto text-gray-900">
                      {categories.map((categorie) => (
                        <ul>
                          {categorie.map((produit) => (
                            <li>
                              <a
                                href={produit.href}
                                className="flex gap-2 items-center p-3 rounded-lg hover:bg-gray-50 "
                              >
                                <div className="flex items-center justify-center w-16 h-16">
                                  <img
                                    src={produit.icons}
                                    alt={produit.href}
                                    className="w-12 h-12"
                                  />
                                </div>
                                <div className="font-semibold">
                                  {produit.label}
                                </div>
                                {/* <span className="text-sm text-gray-500 ">
                        {produit.smallTxt}
                      </span> */}
                              </a>
                              {/* <a
                                href={produit.href}
                                className="block py-3 rounded-lg hover:bg-gray-50 "
                              >
                                <div className="font-semibold">
                                  {produit.label}
                                </div>
                                <span className="text-sm text-gray-500 ">
                                  {produit.smallTxt}
                                </span>
                              </a> */}
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="divider"></div> */}
            {/* Your CTA on small screens */}
            {/* <Link className="flex flex-col" href="/sportif/enzo">
              Go to profil
            </Link> */}
            {/* <div className="flex flex-col">{cta}</div> */}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <nav className="w-full static bg-white border-gray-200">
      <div className="container flex w-full items-center justify-between mx-auto">
        <a
          href="https://flowbite.com"
          className={`${isOpen ? "hidden " : ""} flex items-center space-x-3 rtl:space-x-reverse`}
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Flowbite
          </span>
        </a>
        <div className="">
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mega-menu-full"
            aria-expanded="false"
            onClick={handleIsOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            id="mega-menu-full"
            className={`"items-center justify-between ${isOpen ? "" : "hidden"} w-full md:flex md:w-auto md:order-1"`}
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  href="/produit/exemple"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={handleBigMenuOpen}
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                >
                  Company{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <a
                  href="/produit/exemple"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  "
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="/produit/exemple"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  "
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="/produit/exemple"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${bigMenuIsOpen ? "" : "hidden "} w-full left-0 top-16 absolute bg-white border-gray-200 shadow-sm border-y`}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900  sm:grid-cols-2 md:grid-cols-3 md:px-6">
          <ul aria-labelledby="mega-menu-full-dropdown-button">
            <li>
              <a
                href="/produit/exemple"
                className="block p-3 rounded-lg hover:bg-gray-50 "
              >
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a
                href="/produit/exemple"
                className="block p-3 rounded-lg hover:bg-gray-50 "
              >
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a
                href="/produit/exemple"
                className="block p-3 rounded-lg hover:bg-gray-50 "
              >
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="/produit/exemple"
                className="block p-3 rounded-lg hover:bg-gray-50 "
              >
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a
                href="/produit/exemple"
                className="block p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a
                href="/produit/exemple"
                className="block p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
          </ul>
          <ul className="hidden md:block">
            <li>
              <a
                href="/produit/exemple"
                className="block p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="font-semibold">Audience Management</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a
                href="/produit/exemple"
                className="block p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="font-semibold">Creative Tools</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a
                href="/produit/exemple"
                className="block p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="font-semibold">Marketing Automation</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
