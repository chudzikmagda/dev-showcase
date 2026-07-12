"use client";

import React from "react";

import { Container } from "./toastContainer.styles";
import type { Toast } from "./toastContainer.types";
import { ToastContent } from "../ToastContent/ToastContent";

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
        <ToastContent key={toast.id} toast={toast} onClose={onRemove} />
      ))}
    </Container>
  );
};
