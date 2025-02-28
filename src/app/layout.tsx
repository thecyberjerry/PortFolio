import type { Metadata } from "next";
import { Rubik, Ubuntu } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Head from "next/head";

const rubikSans = Rubik({
  variable: "--font-family-rubik",
  subsets: ["latin"],
});
const ubuntuSans = Ubuntu({
  variable: "--font-family-ubuntu",
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himanshu Portfolio",
  description: "Welcome to my portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createClient();
  const navbar = await client.getSingle("navbar");
  const footer = await client.getSingle("footer");
  return (
    <html lang="en">
      <head>
        <title>{metadata && metadata?.title as string}</title>
        <meta name="description" content={metadata && metadata?.description as string} />
      </head>
      <body className={`${rubikSans.variable} ${ubuntuSans.variable} container mx-auto p-2`}>
        <SliceZone slices={navbar.data.slices} components={components} />
        <div>{children}</div>
        <SliceZone slices={footer.data.slices} components={components} />
      </body>
    </html>
  );
}
