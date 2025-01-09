import {Routes, Route} from "react-router";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contacts from "./Pages/Contacts.jsx";
import Shoes from "./Pages/Shoes.jsx";
import Clothes from "./Pages/Clothes.jsx";
import Swimsuits from "./Pages/Swimsuits.jsx";
import Header from "./Header";
import SideBar from "./SideBar";
import Products from "./Pages/Products.jsx";

function Layout(){
    return(
        <div className="container">
            <Header />
            <div className="body-container">
            <SideBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contacts" element={<Contacts />} />
                <Route path="/Shoes" element={<Shoes />} />
                <Route path="/Clothes" element={<Clothes />} />
                <Route path="/Swimsuits" element={<Swimsuits />} />
            </Routes>
      </div>
      </div>
        )
    }

export default Layout;