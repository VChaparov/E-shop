import { useState } from "react";
import {Link} from "react-router"

function SideLink(props){

    return(
    <Link to={{
        pathname: props.url
        }} >  
        <div className="side-link">
        {props.title}
        </div>
    </Link>
    )
    }

export default SideLink;