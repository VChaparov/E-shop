import React from "react";
import SearchResult from "./SearchResult";
import "./utilitiesStyles.css";
import { Link } from "react-router";

function ResultsList(props) {
  const cards = props.cards;
  return (
    <>
      {cards.map((card, index) => {
        if (index <= 10) {
          return (
            <Link to={`/Products/${card.category}/${card.id}`} key={index}>
              <SearchResult
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

export default ResultsList;
