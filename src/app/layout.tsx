import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magda Chudzik - software engineer and graphic designer",
  description:
    "I’m a software engineer and graphic designer, with a strong technical background as a technical physicist by education. At work, I seamlessly blend technical expertise with artistic vision, crafting intuitive and visually compelling digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
