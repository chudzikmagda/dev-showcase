"use client";

import React, { createContext, useContext } from "react";
import { ToastContainer } from "../_components/Toast/Toast";
import { ToastType } from "../_components/Toast/toast.types";
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
