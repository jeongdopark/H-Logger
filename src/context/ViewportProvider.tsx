import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { debounce } from "../utils/debounce";

export const ViewportContext = createContext({
  isMobile: false,
});

export const ViewportProvider = ({ children }: { children: React.ReactNode }) => {
  const IS_MOBILE = !matchMedia("screen and (min-width: 850px)").matches;
  const [isMobile, setIsMobile] = useState(IS_MOBILE);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 750);
  };

  useEffect(() => {
    window.addEventListener("resize", debounce(handleResize, 100));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ViewportContext.Provider value={{ isMobile }}>
      <ThemeProvider theme={{ isMobile }}>{children}</ThemeProvider>
    </ViewportContext.Provider>
  );
};
