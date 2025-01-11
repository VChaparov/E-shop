import React from "react";
import Card from "./Card";
import "./utilitiesStyles.css";
import { Link } from "react-router";

function CardList(props) {
  const cards = props.cards;
  return (
    <>
      {cards.map((card, index) => {
        return (
          <Link to={`/Products/${card.category}/${card.id}`} key={index}>
            <Card
              id={card.id}
              name={card.name}
              brand={card.brand}
              category={card.category}
              imgURL={card.imgURL}
              description={card.description}
            />
          </Link>
        );
      })}
    </>
  );
}

export default CardList;
