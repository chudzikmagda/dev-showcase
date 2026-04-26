import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Montserrat } from "next/font/google";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import "./css/global.css";
import StyledJsxRegistry from "./registry";

const montserrat: NextFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Magda Chudzik - software engineer and UI/UX designer",
  description:
    "I’m a software engineer and UI/UX designer, with a strong technical background as a technical physicist by education. At work, I seamlessly blend technical expertise with artistic vision, crafting intuitive and visually compelling digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={montserrat.className}>
        <StyledJsxRegistry>
          <Header></Header>
          <main>{children}</main>
          <Footer></Footer>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
