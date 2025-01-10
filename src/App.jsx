import { Routes, Route } from "react-router";
import Home from "./components/Pages/Home.jsx";
import About from "./components/Pages/About.jsx";
import Contacts from "./components/Pages/Contacts.jsx";
import Shoes from "./components/Pages/Shoes.jsx";
import Clothes from "./components/Pages/Clothes.jsx";
import Swimsuits from "./components/Pages/Swimsuits.jsx";
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
