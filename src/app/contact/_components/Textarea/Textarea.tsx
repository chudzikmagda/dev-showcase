"use client";
import type { FC } from "react";

import FormField from "../../../components/ui/FormField/FormField";
import { FormFieldVariant } from "../../../components/ui/FormField/formField.types";
import { TextareaProps } from "./textarea.types";

const Textarea: FC<TextareaProps> = (props) => (
  <FormField {...props} variant={FormFieldVariant.Textarea} />
);

export default Textarea;
