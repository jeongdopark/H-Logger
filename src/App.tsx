import { RouterInfo } from "./routes/Router";
import { GlobalStyle } from "./style/init";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ResponsiveProvider } from "./context/ResponsiveProvider";
import { ToastProvider } from "./context/ToastProvider";
const queryClient = new QueryClient();

const RouterObject = createBrowserRouter(RouterInfo);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AuthProvider>
        <ResponsiveProvider>
          <ToastProvider>
            <RouterProvider router={RouterObject} />
          </ToastProvider>
        </ResponsiveProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
