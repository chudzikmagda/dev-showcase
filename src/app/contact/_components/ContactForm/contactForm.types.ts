import type { FormEvent } from "react";

export interface FormState {
  name: string;
  email: string;
  message: string;
}

export enum Field {
  NAME = "name",
  EMAIL = "email",
  MESSAGE = "message",
}

export enum ActionType {
  SET_FIELD = "SET_FIELD",
  RESET = "RESET",
}

export type FormAction =
  | { type: ActionType.SET_FIELD; field: Field; value: string }
  | { type: ActionType.RESET };

export interface ContactForm {
  formState: FormState;
  isFormValid: boolean;
  handleSubmit: (e: FormEvent) => Promise<void>;
  handleFieldChange: (field: Field, value: string) => void;
}
