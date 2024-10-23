"use client";

import { useState, useEffect } from "react";
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

// const cta = <ButtonSignin extraStyle="btn-primary" />;

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <>
      <nav
        className="container flex items-center justify-between px-8 mx-auto"
        aria-label="Global"
      >
        {/* Burger button to open menu on mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
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
              tabIndex={0}
              role="button"
              className="flex align-center items-center gap-2 py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
            >
              Produits
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a href="/produit/exemple">Rond</a>
              </li>
              <li>
                <a href="/produit/exemple">Plat</a>
              </li>
            </ul>
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
          <a
            href="/produit/exemple"
            className="btn btn-primary text-white btn-md"
          >
            Mon Compte client
          </a>
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
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-y-0 left-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
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
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex align-center items-center gap-2 py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Produits
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li>
                      <a href="/produit/exemple">Rond</a>
                    </li>
                    <li>
                      <a href="/produit/exemple">Plat</a>
                    </li>
                  </ul>
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
                <a
                  href="/produit/exemple"
                  className="btn btn-primary text-white btn-md"
                >
                  Mon Compte client
                </a>
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
};

export default Header;
