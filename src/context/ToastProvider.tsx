import React, { createContext, useReducer } from "react";
import { createPortal } from "react-dom";
import Toast from "../components/toast";

interface IToast {
  text: string;
  type: "SUCCESS" | "FAIL";
  uid: number;
}
interface ToastContextType {
  toasts: IToast[];
}

type ToastAction = { type: "ADD_TOAST"; payload: IToast } | { type: "REMOVE_TOAST"; payload: number };
const initialState = {
  toasts: [],
};

const toastReducer = (state: ToastContextType, action: ToastAction) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case "REMOVE_TOAST":
      const updatedToasts = state.toasts.filter((toast) => toast.uid !== action.payload);
      return {
        ...state,
        toasts: updatedToasts,
      };
  }
};

export const ToastContext = createContext<any>({
  addToast: () => {},
  removeToast: () => {},
});

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, dispatch] = useReducer(toastReducer, initialState);

  const addToast = (type: "SUCCESS" | "FAIL", text: string) => {
    const uid = Math.floor(Math.random() * 99999);
    dispatch({ type: "ADD_TOAST", payload: { uid, text, type } });
  };

  const removeToast = (id: number) => {
    dispatch({ type: "REMOVE_TOAST", payload: id });
  };
  const toast = document.getElementById("toast")!;

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {createPortal(
        <React.Fragment>
          {toasts.toasts.map((e: IToast) => (
            <Toast type={e.type} text={e.text} id={e.uid} key={e.uid} />
          ))}
        </React.Fragment>,
        toast
      )}
    </ToastContext.Provider>
  );
};
