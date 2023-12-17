import { TOAST_ACTION } from "../const";

const ToastTypes = {
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
};

export type ToastType = keyof typeof ToastTypes;

export interface IToast {
  text: string;
  type: ToastType;
  uid: number;
}
export interface IToastState {
  toasts: IToast[];
}

export interface IToastContext {
  addToast: (type: ToastType, text: string) => void;
  removeToast: () => void;
}

export type ToastActionType =
  | { type: typeof TOAST_ACTION.ADD_TOAST; payload: IToast }
  | { type: typeof TOAST_ACTION.REMOVE_TOAST };
