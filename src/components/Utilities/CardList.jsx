import { useState } from "react";
import React from "react";
import Card from "./Card";
import "./CardStyles.css"

function CardList(props){
    const cards = props.cards;
    return(
        <>
        <div className = "card-list">
        {cards.map((card, index) => {
            return(
            <Card
            key = {index}
            name = {card.name}
            brand = {card.brand}
            category = {card.category}
            imgURL= {card.imgURL}
            description = {card.description} />
        )})}
        </div>
        </>)
    }

export default CardList;