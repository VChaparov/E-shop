import { useState } from "react";
import NavLink from "./NavLink";
import SideLink from "./SideLink";
function SideBar(){

    return(
    <div className="side-bar">
         <SideLink title="Shoes" url="/Shoes" />
         <SideLink title="Clothes" url="/Clothes" />
         <SideLink title="Swimsuits" url="/Swimsuits" />
    </div>)
    }

export default SideBar;