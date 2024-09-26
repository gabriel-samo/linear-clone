import "@/app/globals.css";
import type { Metadata } from "next";

import { Header } from "@/components/header";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Linear Clone",
  description:
    "Linear Clone built with Next.js and TailwindCSS by Gabriel Samoylov"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="">
          <Header />
          <main className="pt-[var(--nav-height)]">{children} </main>
          <footer>
            <Container>Footer</Container>
          </footer>
        </div>
      </body>
    </html>
  );
}
