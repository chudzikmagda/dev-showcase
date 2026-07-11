"use client";

import React from "react";
import { Container, ToastBox, Message, CloseButton } from "./toast.styles";
import type { Toast } from "./toast.types";

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  onRemove,
}) => {
  return (
    <Container aria-live="polite" aria-atomic="true">
      {toasts.map((toast: Toast) => (
        <ToastBox key={toast.id} type={toast.type}>
          <Message>{toast.message}</Message>
          <CloseButton onClick={() => onRemove(toast.id)} aria-label="Close">
            ×
          </CloseButton>
        </ToastBox>
      ))}
    </Container>
  );
};
