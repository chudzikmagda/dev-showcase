"use client";

import React, { useEffect } from "react";

import type { ToastContentProps } from "./toastContent.types";
import {
  CloseButton,
  Message,
  ToastBox,
} from "../ToastContainer/toastContainer.styles";
export const ToastContent: React.FC<ToastContentProps> = ({
  toast,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(toast.id);
    }, 5000);

    return () => clearTimeout(timer);
  }, [toast.id, onClose]);

  return (
    <ToastBox type={toast.type}>
      <Message>{toast.message}</Message>
      <CloseButton onClick={() => onClose(toast.id)} aria-label="Close">
        ×
      </CloseButton>
    </ToastBox>
  );
};

export default ToastContent;
