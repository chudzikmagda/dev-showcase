export enum ToastType {
  Success = "success",
  Error = "error",
}

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}
