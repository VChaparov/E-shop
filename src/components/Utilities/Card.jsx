import { useState } from "react";
import "./CardStyles.css"

function Card(props){

    return(
    <><div className="card" style={{backgroundImage:`url(src/assets/images/${props.imgURL}.jpg)`}}>
          <div className="description">
          {props.description}
          </div>
          <div className="name">
            {props.name}
          </div>
        </div>
        </>)
    }

export default Card;