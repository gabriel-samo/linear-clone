import Link from "next/link";

import { Logo } from "@/components/icons/logo";
import { Container } from "@/components/container";

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
    href: "#"
  },
  {
    name: "Changelog",
    href: "#"
  },
  {
    name: "Integrations",
    href: "#"
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
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08">
      <Container className="flex h-[var(--nav-height)]">
        <Link className="flex items-center text-md" href="/">
          <Logo className="size-[1.8rem] mr-4" />
          Lienar
        </Link>

        <nav className="h-full">
          <ul className="flex items-center h-full">
            {/* <ul className="flex items-center h-full [&_a]:text-sm [&_li]:ml-6"> */}
            {links.map((link, index) => (
              <li key={index} className="text-sm ml-6">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto h-full flex items-center">
          <Link href="/#" className="text-sm mr-6">
            Log in
          </Link>
          <Link href="/#" className="text-sm">
            Sign up
          </Link>
        </div>
      </Container>
    </header>
  );
};
