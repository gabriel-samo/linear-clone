"use client";

import Link from "next/link";
import classNames from "classnames";
import { useEffect, useState } from "react";

import { Button } from "@/components/button";
import { Logo } from "@/components/icons/logo";
import { Container } from "@/components/container";
import { HamburgerIcon } from "@/components/icons/hamburger";

const links = [
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Method",
    href: "#",
  },
  {
    name: "Customers",
    href: "#",
    defaultClass: "md:hidden lg:flex",
  },
  {
    name: "Changelog",
    href: "#",
    defaultClass: "md:hidden lg:flex",
  },
  {
    name: "Integrations",
    href: "#",
    defaultClass: "md:hidden lg:flex",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Company",
    href: "#",
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.classList.toggle("overflow-hidden", isMenuOpen);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener("orientationchange", closeMenu);
    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("orientationchange", closeMenu);
      window.removeEventListener("resize", closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed left-0 top-0 z-20 w-full backdrop-blur-[12px]">
      <div className="mx-auto w-fit border-b border-transparent-white">
        <Container className="flex h-nav-height">
          <Link className="flex items-center text-lg" href="/">
            <Logo className="mr-4 size-[1.8rem]" />
            Lienar
          </Link>

          <div
            className={classNames(
              "transition-[visibility] md:visible",
              isMenuOpen ? "visible" : "invisible delay-500",
            )}
          >
            <nav
              className={classNames(
                "fixed left-0 top-nav-height h-[calc(100vh_-_var(--nav-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:opacity-100 md:transition-none",
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[-100vw] opacity-0",
              )}
            >
              <ul className="flex h-full flex-col md:flex-row md:items-center">
                {/* <ul className="flex items-center h-full [&_a]:text-md [&_a:hover]:text-grey [&_a]:transition-colors [&_li]:ml-6"> */}
                {links.map((link, index) => (
                  <li
                    key={index}
                    className={classNames(
                      "transition-[color, transform] ml-6 flex min-h-nav-height w-full translate-y-8 items-center border-b border-grey-dark text-lg duration-300 ease-in hover:text-grey md:translate-y-0 md:border-none md:text-md md:transition-colors",
                      link.defaultClass,
                      isMenuOpen && "translate-y-0",
                    )}
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="ml-auto flex h-full items-center">
            <Link href="/#" className="mr-6 text-md">
              Log in
            </Link>
            <Button href="/#">Sign up</Button>
          </div>

          <button
            className="ml-6 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            <HamburgerIcon />
          </button>
        </Container>
      </div>
    </header>
  );
};
