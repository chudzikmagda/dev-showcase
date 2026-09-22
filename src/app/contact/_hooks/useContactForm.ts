import type { FormEvent } from "react";
import { useReducer } from "react";

import { useToast } from "./useToast";
import {
  initialState,
  reducer,
} from "../_components/ContactForm/contactForm.reducer";
import type { ContactForm } from "../_components/ContactForm/contactForm.types";
import {
  ActionType,
  Field,
} from "../_components/ContactForm/contactForm.types";
import { ToastType } from "../_components/ToastContainer/toastContainer.types";
import { isNotEmpty, isEmailValid } from "../_utils/validation.utils";

export const useContactForm = (): ContactForm => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { show } = useToast();

  const isFormValid =
    isNotEmpty(state.name) &&
    isEmailValid(state.email) &&
    isNotEmpty(state.message);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      const res = await fetch("/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name: state.name,
          email: state.email,
          message: state.message,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status: ${res.status}`);
      }

      const data = await res.json();

      if (data.ok) {
        show("Message sent successfully", ToastType.Success);
        dispatch({ type: ActionType.RESET });
      } else {
        show(
          `An error occurred: ${data.error || "Unknown error"}`,
          ToastType.Error,
        );
      }
    } catch (err) {
      show(
        `Error: ${err instanceof Error ? err.message : "Unknown error"}`,
        ToastType.Error,
      );
    }
  };

  const handleFieldChange = (field: Field, value: string) => {
    dispatch({
      type: ActionType.SET_FIELD,
      field,
      value,
    });
  };

  return {
    formState: state,
    isFormValid,
    handleSubmit,
    handleFieldChange,
  };
};
