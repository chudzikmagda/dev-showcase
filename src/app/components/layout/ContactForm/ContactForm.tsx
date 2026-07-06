"use client";
import React, { JSX, useReducer } from "react";

import Button from "@/app/components/ui/Button/Button";
import {
  ButtonHtmlType,
  ButtonVersion,
} from "@/app/components/ui/Button/button.types";
import Input from "@/app/components/ui/Input/Input";
import Textarea from "@/app/components/ui/Textarea/Textarea";
import { isNotEmpty, isEmailValid } from "@/app/shared/utils/validation.utils";

import { initialState, reducer } from "./contactForm.reducer";
import { ButtonRow, ContactFormWrapper } from "./contactForm.styles";
import { ActionType } from "./contactForm.types";

const ContactForm = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact submit:", {
      name: state.name,
      email: state.email,
      message: state.message,
    });
    dispatch({ type: ActionType.RESET });
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
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: ActionType.SET_FIELD,
            field: "name",
            value: e.target.value,
          })
        }
        placeholder="Name"
      />
      <Input
        name="email"
        value={state.email}
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: ActionType.SET_FIELD,
            field: "email",
            value: e.target.value,
          })
        }
        placeholder="Email"
        type="email"
      />
      <Textarea
        name="message"
        value={state.message}
        required
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          dispatch({
            type: ActionType.SET_FIELD,
            field: "message",
            value: e.target.value,
          })
        }
        placeholder="Message"
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
