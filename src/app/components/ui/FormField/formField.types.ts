import type { ChangeEventHandler } from "react";

export enum FormFieldVariant {
  Input = "input",
  Textarea = "textarea",
}

export type CommonProps = {
  value: string;
  placeholder: string;
  name: string;
  required?: boolean;
};

export type InputVariant = CommonProps & {
  variant: FormFieldVariant.Input;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export type TextareaVariant = CommonProps & {
  variant: FormFieldVariant.Textarea;
  rows: number;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

export type FormFieldProps = InputVariant | TextareaVariant;

export const isInputVariant = (props: FormFieldProps): props is InputVariant =>
  props.variant === FormFieldVariant.Input;

export const isTextareaVariant = (
  props: FormFieldProps,
): props is TextareaVariant => props.variant === FormFieldVariant.Textarea;
