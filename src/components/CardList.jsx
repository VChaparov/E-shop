import { useState } from "react";
import Card from "./Card";

function CardList(props){
    const cards = props.cards;
    return(
        <>
        <div className = "card-list">
        {cards.map((card, index) => {
            return(
            <Card
            key = {index}
            title = {card.title}
            description = {card.description} />
        )})}
        </div>
        </>)
    }

export default CardList;