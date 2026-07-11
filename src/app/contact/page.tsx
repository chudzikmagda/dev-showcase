import type { Metadata } from "next";
import { JSX } from "react";

import { ToastProvider } from "./_providers/toast-provider";
import { H1Heading, PageWrapper } from "./contact.styles";
import ContactForm from "./_components/ContactForm/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Magda Chudzik",
  description:
    "Get in touch with Magda Chudzik for frontend and UI/UX project inquiries.",
};

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
