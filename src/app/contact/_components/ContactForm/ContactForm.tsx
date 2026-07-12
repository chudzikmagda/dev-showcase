"use client";
import type { JSX } from "react";

import Button from "@/app/components/ui/Button/Button";
import {
  ButtonVersion,
  ButtonHtmlType,
} from "@/app/components/ui/Button/button.types";

import { ContactFormWrapper, ButtonRow } from "./contactForm.styles";
import { Field } from "./contactForm.types";
import { useContactForm } from "../../_hooks/useContactForm";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";

export const ContactForm = (): JSX.Element => {
  const { formState, isFormValid, handleSubmit, handleFieldChange } =
    useContactForm();

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <Input
        name="name"
        value={formState.name}
        placeholder="Name"
        type="text"
        required
        onChange={(e) => handleFieldChange(Field.NAME, e.target.value)}
      />
      <Input
        name="email"
        value={formState.email}
        placeholder="Email"
        type="email"
        required
        onChange={(e) => handleFieldChange(Field.EMAIL, e.target.value)}
      />
      <Textarea
        name="message"
        value={formState.message}
        placeholder="Message"
        required
        rows={8}
        onChange={(e) => handleFieldChange(Field.MESSAGE, e.target.value)}
      />
      <ButtonRow>
        <Button
          label="Send"
          version={ButtonVersion.PRIMARY}
          hasArrow={false}
          type={ButtonHtmlType.SUBMIT}
          disabled={!isFormValid}
        />
      </ButtonRow>
    </ContactFormWrapper>
  );
};

export default ContactForm;
