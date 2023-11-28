import Router from "./routes/Router";
import { GlobalStyle } from "./style/init";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthProvider";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
