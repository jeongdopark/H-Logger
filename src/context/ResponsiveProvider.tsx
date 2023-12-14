import { createContext, useEffect, useState } from "react";

interface ResponsiveContextType {
  isMobile: boolean;
}

export const ResponsiveContext = createContext<ResponsiveContextType>({
  isMobile: false,
});

// const debounce = (func: Function, delay: number) => {
//   let timer: NodeJS.Timeout;

//   return () => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func();
//     }, delay);
//   };
// };

export const ResponsiveProvider = ({ children }: { children: React.ReactNode }) => {
  const IS_MOBILE = !matchMedia("screen and (min-width: 850px)").matches;
  const [isMobile, setIsMobile] = useState<boolean>(IS_MOBILE);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 750);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <ResponsiveContext.Provider value={{ isMobile }}>{children}</ResponsiveContext.Provider>;
};
