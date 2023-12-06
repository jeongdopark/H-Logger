import React, { createContext, useMemo, useState } from "react";

interface IModalContext {
  isInitClick: boolean;
  isModalOpened: boolean;
  setIsInitClick: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalContext>({
  isInitClick: false,
  isModalOpened: false,
  setIsInitClick: () => {},
  setIsModalOpened: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isInitClick, setIsInitClick] = useState<boolean>(false);
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const value = useMemo(
    () => ({ isInitClick, isModalOpened, setIsInitClick, setIsModalOpened }),
    [isInitClick, isModalOpened, setIsInitClick, setIsModalOpened]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
