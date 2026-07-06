export type FormState = {
  name: string;
  email: string;
  message: string;
};

export enum ActionType {
  SET_FIELD = "SET_FIELD",
  RESET = "RESET",
}

export type FormAction =
  | { type: ActionType.SET_FIELD; field: keyof FormState; value: string }
  | { type: ActionType.RESET };
