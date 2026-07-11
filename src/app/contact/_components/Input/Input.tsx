"use client";
import type { FC } from "react";

import FormField from "../../../components/ui/FormField/FormField";
import { FormFieldVariant } from "../../../components/ui/FormField/formField.types";
import { InputProps } from "./input.types";

const Input: FC<InputProps> = (props) => (
  <FormField {...props} variant={FormFieldVariant.Input} />
);

export default Input;
