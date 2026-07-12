"use client";
import type { FC } from "react";

import { InputProps } from "./input.types";
import FormField from "../../../components/ui/FormField/FormField";
import { FormFieldVariant } from "../../../components/ui/FormField/formField.types";

const Input: FC<InputProps> = (props) => (
  <FormField {...props} variant={FormFieldVariant.Input} />
);

export default Input;
