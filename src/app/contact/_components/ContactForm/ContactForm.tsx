"use client";
import { useRouter } from "next/navigation";
import React, { JSX, useReducer } from "react";

import Button from "@/app/components/ui/Button/Button";
import {
  ButtonHtmlType,
  ButtonVersion,
} from "@/app/components/ui/Button/button.types";
import Input from "@/app/contact/_components/Input/Input";
import Textarea from "@/app/contact/_components/Textarea/Textarea";
import { ToastType } from "@/app/contact/_components/Toast/toast.types";
import { isEmailValid, isNotEmpty } from "@/app/shared/utils/validation.utils";

import { initialState, reducer } from "./contactForm.reducer";
import { ButtonRow, ContactFormWrapper } from "./contactForm.styles";
import { ActionType } from "./contactForm.types";
import { useToast } from "../../_hooks/useToast";

const ContactForm = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  const { show } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("./mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name: state.name,
          email: state.email,
          message: state.message,
        }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        show("Wiadomość wysłana pomyślnie", ToastType.Success);
        dispatch({ type: ActionType.RESET });
        router.push(data.redirect || "/thankyoupage");
      } else {
        show(
          "Wystąpił błąd: " + (data.error || "Nieznany błąd"),
          ToastType.Error,
        );
      }
    } catch (err) {
      show("Błąd sieciowy: " + String(err), ToastType.Error);
    }
  };

  const isFormValid =
    isNotEmpty(state.name) &&
    isEmailValid(state.email) &&
    isNotEmpty(state.message);

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <Input
        name="name"
        value={state.name}
        placeholder="Name"
        type="text"
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: ActionType.SET_FIELD,
            field: "name",
            value: e.target.value,
          })
        }
      />
      <Input
        name="email"
        value={state.email}
        placeholder="Email"
        type="email"
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: ActionType.SET_FIELD,
            field: "email",
            value: e.target.value,
          })
        }
      />
      <Textarea
        name="message"
        value={state.message}
        placeholder="Message"
        required
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          dispatch({
            type: ActionType.SET_FIELD,
            field: "message",
            value: e.target.value,
          })
        }
        rows={8}
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
