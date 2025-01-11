import { useState } from "react";
import {Link} from "react-router"

function NavLink(props){

    return(
    <Link to={{pathname: props.url}} >  
        <div className="nav-link">
            {props.title}
        </div>
    </Link>
    )
    }

export default NavLink;