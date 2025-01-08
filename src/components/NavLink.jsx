import { useState } from "react";

function NavLink(props){

    return(
    <>          
    <button className="nav-link">
        {props.url}
    </button>
    </>)
    }

export default NavLink;