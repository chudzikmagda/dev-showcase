"use client";
import type { ChangeEventHandler } from "react";
import React, { forwardRef, useId } from "react";

import { Control, FloatingLabel, Wrapper } from "./formField.styles";
import {
  FormFieldProps,
  FormFieldVariant,
  isInputVariant,
  isTextareaVariant,
} from "./formField.types";

const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps
>((props, ref) => {
  const id = useId();

  if (isInputVariant(props)) {
    const { value, placeholder, name, type = "text", onChange } = props;
    const hasValue = Boolean(value && value !== "");

    return (
      <Wrapper htmlFor={id} {...(hasValue ? { "data-has-value": "true" } : {})}>
        <Control
          as={FormFieldVariant.Input}
          data-variant={FormFieldVariant.Input}
          id={id}
          ref={ref as React.Ref<HTMLInputElement>}
          value={value}
          placeholder={placeholder}
          type={type}
          name={name}
          onChange={onChange as ChangeEventHandler<HTMLInputElement>}
        />
        {placeholder ? <FloatingLabel>{placeholder}</FloatingLabel> : null}
      </Wrapper>
    );
  }

  if (isTextareaVariant(props)) {
    const { value, placeholder, name, rows = 4, onChange } = props;
    const hasValue = Boolean(value && value !== "");

    return (
      <Wrapper htmlFor={id} {...(hasValue ? { "data-has-value": "true" } : {})}>
        <Control
          as={FormFieldVariant.Textarea}
          data-variant={FormFieldVariant.Textarea}
          id={id}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          value={value}
          onChange={onChange as ChangeEventHandler<HTMLTextAreaElement>}
          placeholder={placeholder ? " " : " "}
          name={name}
          rows={rows}
        />
        {placeholder ? <FloatingLabel>{placeholder}</FloatingLabel> : null}
      </Wrapper>
    );
  }
  return null;
});

FormField.displayName = "FormField";
export default FormField;
