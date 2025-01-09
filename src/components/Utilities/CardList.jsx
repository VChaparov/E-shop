import { useState } from "react";
import React from "react";
import Card from "./Card";
import "./CardStyles.css"

function CardList(props){
    const cards = props.cards;
    return(
        <>
        {cards.map((card, index) => {
            return(
            <Card
            key = {index}
            id={index}
            name = {card.name}
            brand = {card.brand}
            category = {card.category}
            imgURL= {card.imgURL}
            description = {card.description} />
        )
    }
        )}
        </>)
    }

export default CardList;