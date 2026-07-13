"use client";
import type { FC } from "react";

import { TextareaProps } from "./textarea.types";
import FormField from "../FormField/FormField";
import { FormFieldVariant } from "../FormField/formField.types";

const Textarea: FC<TextareaProps> = (props) => (
  <FormField {...props} variant={FormFieldVariant.Textarea} />
);

export default Textarea;
