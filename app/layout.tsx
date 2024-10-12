import "@/app/globals.css";
import type { Metadata } from "next";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const runtime = "edge";

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
        <div>
          <Header />
          <main className="bg-page-gradient pt-nav-height">{children} </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
