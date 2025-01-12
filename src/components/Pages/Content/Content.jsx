import Products from "./Products.jsx";
import NotFoundPage from "../NotFoundPage.jsx";
import Home from "../Home.jsx";
import About from "../About.jsx";
import Contacts from "../Contacts.jsx";
import Shoes from "./Shoes.jsx";
import Clothes from "./Clothes.jsx";
import Swimsuits from "./Swimsuits.jsx";
import { Routes, Route, Navigate } from "react-router";
import CardDetails from "./CardDetails.jsx";

function Content() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:category/:id" element={<CardDetails />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Products/Shoes" element={<Shoes />} />
        <Route path="/Products/Clothes" element={<Clothes />} />
        <Route path="/Products/Swimsuits" element={<Swimsuits />} />
        <Route path="*" element={<Navigate to="/NotFound" replace />} />
        <Route path="/NotFound" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default Content;
