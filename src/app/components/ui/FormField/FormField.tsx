"use client";
import React, { forwardRef, useId } from "react";

import { Control, FloatingLabel, Wrapper } from "./formField.styles";
import { FormFieldProps, isInputVariant } from "./formField.types";

const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps
>((props, ref) => {
  const id = useId();
  let controlNode: React.ReactNode;

  if (isInputVariant(props)) {
    const { variant, placeholder, type = "text", ...rest } = props;

    controlNode = (
      <Control
        as={variant}
        data-variant={variant}
        id={id}
        ref={ref as React.Ref<HTMLInputElement>}
        placeholder={placeholder}
        type={type}
        {...rest}
      />
    );
  } else {
    const { variant, placeholder, rows, ...rest } = props;

    controlNode = (
      <Control
        as={variant}
        data-variant={variant}
        id={id}
        ref={ref as React.Ref<HTMLTextAreaElement>}
        placeholder={placeholder}
        rows={rows}
        {...rest}
      />
    );
  }
  return (
    <Wrapper
      htmlFor={id}
      data-has-value={Boolean(props.value) ? "true" : undefined}
    >
      {controlNode}
      {<FloatingLabel>{props.placeholder}</FloatingLabel>}
    </Wrapper>
  );
});

FormField.displayName = "FormField";
export default FormField;
