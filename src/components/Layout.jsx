import {Routes, Route, Navigate} from "react-router";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contacts from "./Pages/Contacts.jsx";
import Shoes from "./Pages/Shoes.jsx";
import Clothes from "./Pages/Clothes.jsx";
import Swimsuits from "./Pages/Swimsuits.jsx";
import Header from "./Header";
import SideBar from "./SideBar";
import Products from "./Pages/Products.jsx";
import CardDetails from "./Utilities/CardDetails.jsx"
import NotFoundPage from "./Pages/NotFoundPage.jsx";

function Layout(){
    return(
        <div className="container">
            <Header />
            <div className="body-container">
            <SideBar />
            <div className="content-container">
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
            </div>
      </div>
      </div>
        )
    }

export default Layout;