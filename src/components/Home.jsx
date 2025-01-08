import { useState } from "react";
import NavBar from "./NavBar";
import CardList from "./CardList";

const mockCards = [{id: 1,title: "title1", description :"description1"},{id: 2,title: "title2", description :"description2"},{id: 3,title: "title3", description :"description3"}]

function Home(){

    return(
    <>
    <NavBar />
    <CardList cards = {mockCards}/>
        </>)
    }

export default Home;