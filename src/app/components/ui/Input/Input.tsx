"use client";
import type { FC } from "react";

import type InputProps from "./input.types";
import FormField from "../FormField/FormField";
import { FormFieldVariant } from "../FormField/formField.types";

const Input: FC<InputProps> = (props) => (
  <FormField {...props} variant={FormFieldVariant.Input} />
);

export default Input;
