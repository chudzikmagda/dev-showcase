import type { FormState, FormAction } from "./contactForm.types";
import { ActionType } from "./contactForm.types";

export const initialState: FormState = { name: "", email: "", message: "" };

export function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case ActionType.SET_FIELD:
      return { ...state, [action.field]: action.value };
    case ActionType.RESET:
      return initialState;
    default:
      return state;
  }
}
