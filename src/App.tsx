import { RouterInfo } from "./routes/Router";
import { GlobalStyle } from "./style/init";
import { ToastProvider } from "./context/ToastProvider";
import { AuthProvider } from "./context/AuthProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ResponsiveProvider } from "./context/ResponsiveProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
interface ResponsiveContextType {
  isMobile: boolean;
}

export const ResponsiveContext = createContext<ResponsiveContextType>({
  isMobile: false,
});

const queryClient = new QueryClient();

const RouterObject = createBrowserRouter(RouterInfo);

const App = () => {
  const IS_MOBILE = !matchMedia("screen and (min-width: 850px)").matches;
  const [isMobile, setIsMobile] = useState<boolean>(IS_MOBILE);

  const debounce = (func: Function, delay: number) => {
    let timer: NodeJS.Timeout;

    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func();
      }, delay);
    };
  };
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
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ResponsiveContext.Provider value={{ isMobile }}>
        <ThemeProvider theme={{ isMobile }}>
          <AuthProvider>
            <ToastProvider>
              <RouterProvider router={RouterObject} />
            </ToastProvider>
          </AuthProvider>
        </ThemeProvider>
      </ResponsiveContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
