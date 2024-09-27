import Link from "next/link";

import { Logo } from "@/components/icons/logo";
import { Container } from "@/components/container";
import { SlackIcon } from "@/components/icons/slack";
import { GithubIcon } from "@/components/icons/github";
import { TwitterIcon } from "@/components/icons/twitter";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-transparent-white mt-12 border-t py-[5.6rem] text-md">
      <Container className="flex flex-col justify-between lg:flex-row">
        <div>
          <div className="flex h-full flex-row justify-between lg:flex-col">
            <div className="text-grey flex items-center">
              <Logo className="mr-4 size-4" />
              Linear - Designed worldwide
            </div>
            <div className="text-grey mt-auto flex space-x-4">
              <TwitterIcon />
              <GithubIcon />
              <SlackIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLinks.map((column, index) => (
            <div
              key={index}
              className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
            >
              <h3 className="mb-3 font-medium">{column.title}</h3>
              <ul>
                {column.links.map((link, index) => (
                  <li key={index} className="[&_a]:last:mb-0">
                    <Link
                      className="text-grey mb-3 block transition-colors hover:text-white"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
