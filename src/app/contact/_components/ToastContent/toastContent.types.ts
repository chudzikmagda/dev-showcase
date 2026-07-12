import { Toast } from "../ToastContainer/toastContainer.types";

export interface ToastContentProps {
  toast: Toast;
  onClose: (id: string) => void;
}
