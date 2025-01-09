import {Routes, Route} from "react-router";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contacts from "./Pages/Contacts.jsx";
import Shoes from "./Pages/Shoes.jsx";
import Clothes from "./Pages/Clothes.jsx";
import Swimsuits from "./Pages/Swimsuits.jsx";
import '../styles.css';
import Layout from "./Layout.jsx";

function App() {
  return (
    <div style={{display:"flex"}}>
      <Layout />
    </div>
  )
}

export default App
