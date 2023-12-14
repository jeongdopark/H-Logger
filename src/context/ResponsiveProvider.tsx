import { createContext, useEffect, useState, FC } from "react";

interface ResponsiveContextType {
  isMobile: boolean;
}

export const ResponsiveContext = createContext<ResponsiveContextType>({
  isMobile: false,
});

const debounce = (func: Function, delay: number) => {
  let timer: NodeJS.Timeout;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
};

export const ResponsiveProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 850);
  };

  useEffect(() => {
    window.addEventListener("resize", debounce(handleResize, 250));

    return () => {
      window.removeEventListener("resize", debounce(handleResize, 250));
    };
  }, []);

  return <ResponsiveContext.Provider value={{ isMobile }}>{children}</ResponsiveContext.Provider>;
};
