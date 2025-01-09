import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./components/App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter basename="/E-shop">
  <StrictMode>
     <App />
    </StrictMode>
  </BrowserRouter>
);