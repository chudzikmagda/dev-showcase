import { useEffect, useState } from "react";

import type { Toast } from "@/app/contact/_components/Toast/toast.types";
import { ToastType } from "@/app/contact/_components/Toast/toast.types";

const generateToastId = (): string => {
  return String(Date.now()) + Math.random().toString(36).slice(2, 7);
};

const withoutId = (items: Toast[], id: string): Toast[] => {
  return items.filter((item) => item.id !== id);
};

export const useToastState = (): {
  toasts: Toast[];
  show: (message: string, type: ToastType) => void;
  remove: (id: string) => void;
} => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const show = (message: string, type: ToastType = ToastType.Success) => {
    setToasts((prev: Toast[]) => [
      { id: generateToastId(), message, type },
      ...prev,
    ]);
  };

  const remove = (id: string) => {
    setToasts((prev: Toast[]) => withoutId(prev, id));
  };

  useEffect(() => {
    if (toasts.length === 0) return;

    const timers = toasts.map((toast: Toast) =>
      setTimeout(() => {
        setToasts((prev: Toast[]) => withoutId(prev, toast.id));
      }, 5000),
    );
    return () => timers.forEach((id: NodeJS.Timeout) => clearTimeout(id));
  }, [toasts]);

  return { toasts, show, remove };
};
