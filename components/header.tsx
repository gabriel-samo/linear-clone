"use client";

import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";

import { Button } from "@/components/button";
import { Logo } from "@/components/icons/logo";
import { Container } from "@/components/container";
import { HamburgerIcon } from "@/components/icons/hamburger";

const links = [
  {
    name: "Features",
    href: "#"
  },
  {
    name: "Method",
    href: "#"
  },
  {
    name: "Customers",
    href: "#",
    defaultClass: "md:hidden lg:flex"
  },
  {
    name: "Changelog",
    href: "#",
    defaultClass: "md:hidden lg:flex"
  },
  {
    name: "Integrations",
    href: "#",
    defaultClass: "md:hidden lg:flex"
  },
  {
    name: "Pricing",
    href: "#"
  },
  {
    name: "Company",
    href: "#"
  }
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-nav-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="size-[1.8rem] mr-4" />
          Lienar
        </Link>

        <nav
          className={classNames(
            "h-[calc(100vh_-_var(--nav-height))] md:block fixed md:relative top-nav-height md:top-0 md:h-auto md:w-auto left-0 w-full overflow-auto bg-background md:bg-transparent",
            isMenuOpen ? "" : "hidden"
          )}
        >
          <ul className="flex h-full flex-col md:flex-row md:items-center">
            {/* <ul className="flex items-center h-full [&_a]:text-sm [&_a:hover]:text-gray [&_a]:transition-colors [&_li]:ml-6"> */}
            {links.map((link, index) => (
              <li
                key={index}
                className={classNames(
                  "text-md md:text-sm ml-6 hover:text-gray transition-colors w-full min-h-nav-height flex items-center border-b border-gray-dark md:border-none",
                  link.defaultClass
                )}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto h-full flex items-center">
          <Link href="/#" className="text-sm mr-6">
            Log in
          </Link>
          <Button href="/#">Sign up</Button>
        </div>

        <button
          className="md:hidden ml-6"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
