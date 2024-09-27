import "@/app/globals.css";
import type { Metadata } from "next";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Linear Clone",
  description:
    "Linear Clone built with Next.js and TailwindCSS by Gabriel Samoylov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`antialiased`}>
        <div className="">
          <Header />
          <main className="pt-nav-height">{children} </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
