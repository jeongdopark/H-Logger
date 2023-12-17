import { RouterInfo } from "./routes/Router";
import { GlobalStyle } from "./style/init";
import { ToastProvider } from "./context/ToastProvider";
import { AuthProvider } from "./context/AuthProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { debounce } from "./utils/debounce";
interface ResponsiveContextType {
  isMobile: boolean;
}

const queryClient = new QueryClient();
const RouterObject = createBrowserRouter(RouterInfo);
export const ResponsiveContext = createContext<ResponsiveContextType>({
  isMobile: false,
});

const App = () => {
  const IS_MOBILE = !matchMedia("screen and (min-width: 850px)").matches;
  const [isMobile, setIsMobile] = useState<boolean>(IS_MOBILE);
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
