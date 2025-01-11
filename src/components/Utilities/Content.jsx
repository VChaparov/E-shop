import Products from "../Pages/Content/Products.jsx";
import NotFoundPage from "../Pages/NotFoundPage.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Contacts from "../Pages/Contacts.jsx";
import Shoes from "../Pages/Content/Shoes.jsx";
import Clothes from "../Pages/Content/Clothes.jsx";
import Swimsuits from "../Pages/Content/Swimsuits.jsx";
import { Routes, Route, Navigate } from "react-router";
import CardDetails from "./CardDetails.jsx";

function Content() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/:category/:id" element={<CardDetails />} />
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
