import "./styles.css";
import Layout from "./components/Layout.jsx";
import { QueryClient, QueryClientProvider } from "react-query";


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
}

export default App;
