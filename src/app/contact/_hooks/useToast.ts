import { useContext } from "react";

import { ToastContext, ToastContextValue } from "../_providers/toast.provider";

export const useToast = (): ToastContextValue => {
  const ctx: ToastContextValue | undefined = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};
