import { RouterInfo } from "./routes/Router";
import { GlobalStyle } from "./style/init";
import { ToastProvider } from "./context/ToastProvider";
import { AuthProvider } from "./context/AuthProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ViewportProvider } from "./context/ViewportProvider";

const queryClient = new QueryClient();
const RouterObject = createBrowserRouter(RouterInfo);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ViewportProvider>
        <AuthProvider>
          <ToastProvider>
            <RouterProvider router={RouterObject} />
          </ToastProvider>
        </AuthProvider>
      </ViewportProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
