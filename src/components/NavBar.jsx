import { useState } from "react";
import NavLink from "./NavLink";
function NavBar(){

    return(
    <><div className="nav-bar">
         <NavLink
         url="Home" />
         <NavLink
         url="About" />
          </div>
        </>)
    }

export default NavBar;