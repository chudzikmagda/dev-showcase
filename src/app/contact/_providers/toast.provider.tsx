"use client";

import React, { createContext } from "react";

import { ToastContainer } from "../_components/ToastContainer/ToastContainer";
import { ToastType } from "../_components/ToastContainer/toastContainer.types";
import { useToastState } from "../_hooks/useToastState";

export interface ToastContextValue {
  show: (message: string, type: ToastType) => void;
}

export const ToastContext = createContext<ToastContextValue | undefined>(
  undefined,
);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { toasts, show, remove } = useToastState();

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={remove} />
    </ToastContext.Provider>
  );
};
