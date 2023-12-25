import Toast from "../components/toast";
import { createPortal } from "react-dom";
import React, { createContext, useMemo, useState } from "react";
import { IToast, ToastType } from "../types/toast";

interface ToastActions {
  addToast: (type: ToastType, text: string) => void;
  removeToast: () => void;
}

export const ToastDispatchContext = createContext<ToastActions | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const toast = document.getElementById("toast")!;
  const [toasts, setToasts] = useState<IToast[]>([]);

  const actions = useMemo(
    () => ({
      addToast(type: ToastType, text: string) {
        const uid = Math.floor(Math.random() * 99999);
        setToasts((currentToasts) => [...currentToasts, { type, text, uid }]);
      },
      removeToast() {
        setToasts((currentToasts) => {
          const updatedToasts = [...currentToasts];
          updatedToasts.shift();
          return updatedToasts;
        });
      },
    }),
    []
  );

  return (
    <ToastDispatchContext.Provider value={actions}>
      {children}
      {createPortal(
        <React.Fragment>
          {toasts.map((e: IToast) => (
            <Toast type={e.type} text={e.text} key={e.uid} />
          ))}
        </React.Fragment>,
        toast
      )}
    </ToastDispatchContext.Provider>
  );
};
