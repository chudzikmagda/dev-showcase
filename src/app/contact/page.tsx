import type { Metadata } from "next";
import { JSX } from "react";

import { H1Heading, PageWrapper } from "./contact.styles";
import ContactForm from "../components/layout/ContactForm/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Magda Chudzik",
  description:
    "Get in touch with Magda Chudzik for frontend and UI/UX project inquiries.",
};

const ContactPage = (): JSX.Element => {
  return (
    <PageWrapper>
      <H1Heading>Let&apos;s get in touch</H1Heading>
      <ContactForm />
    </PageWrapper>
  );
};

export default ContactPage;
