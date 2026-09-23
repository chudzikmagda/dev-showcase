import type { Metadata } from "next";
import { JSX } from "react";

import ContactForm from "./_components/ContactForm/ContactForm";
import { ToastProvider } from "./_providers/toast.provider";
import { H1Heading, PageWrapper } from "./contact.styles";
import { buildSeoMetadata, SITE_URL } from "../../shared/utils/seo.utils";

export const metadata: Metadata = buildSeoMetadata({
  title: "Magda Chudzik | Contact",
  description:
    "Get in touch with Magda Chudzik for frontend development and UI/UX design inquiries. Reach out to discuss projects, collaboration, or hiring opportunities.",
  url: `${SITE_URL}/contact`,
  keywords:
    "contact, hire frontend developer, UI/UX designer, Magda Chudzik, frontend engineer contact, web development inquiries, UI design collaboration, UX designer contact, software engineer contact",
});

const ContactPage = (): JSX.Element => {
  return (
    <ToastProvider>
      <PageWrapper>
        <H1Heading>Let&apos;s get in touch</H1Heading>
        <ContactForm />
      </PageWrapper>
    </ToastProvider>
  );
};

export default ContactPage;
