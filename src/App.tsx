import { RouterInfo } from "./routes/Router";
import { GlobalStyle } from "./style/init";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const queryClient = new QueryClient();

const RouterObject = createBrowserRouter(RouterInfo);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AuthProvider>
        <RouterProvider router={RouterObject} />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
