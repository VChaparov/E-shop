import React from "react";
import DropdownResult from "./DropdownResult";
import "./utilitiesStyles.css";
import { Link } from "react-router";

function DropdownList(props) {
  const cards = props.cards;
  return (
    <>
    <br/>
    <br />
      {cards.map((card, index) => {
        if (index <= 5) {
          return (
            <Link to={`/Products/${card.category}/${card.id}`} key={index}>
              <DropdownResult
                id={card.id}
                name={card.name}
                brand={card.brand}
                category={card.category}
                imgURL={card.imgURL}
                description={card.description}
                price={card.price}
              />
            </Link>
          );
        }
      })}
    </>
  );
}

export default DropdownList;
