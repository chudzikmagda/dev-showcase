import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Montserrat } from "next/font/google";
import { JSX } from "react";

import StyledComponentsRegistry from "./registry";
import Footer from "../components/layouts/Footer/Footer";
import Header from "../components/layouts/Header/Header";
import "./../css/global.css";

const montserrat: NextFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Magda Chudzik - Software Engineer and UI/UX Designer",
  description:
    "I'm a Software Engineer & UI/UX Designer specializing in building scalable, high-performance web applications - from micro-frontends (Angular, React, Next.js) to robust backend services (NestJS, Node.js). I combine solid engineering foundations, modern AI-assisted workflows, and deep UI/UX intuition to deliver accessible, responsive, and visually polished digital products.",
  icons: {
    icon: "/images/favicon.svg",
    shortcut: "/images/favicon.svg",
    apple: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head></head>
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <Header></Header>
          <main>{children}</main>
          <Footer></Footer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
