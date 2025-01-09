import CardList from "../Utilities/CardList";
import { mockCards } from "../../assets/content/mockData";

function Swimsuits(){
    const Swimsuits = mockCards.filter((Card)=>Card.category =="Swimsuits");
    return(
    <>
        <CardList cards = {Swimsuits}/>
    </>
    )  
    }

export default Swimsuits;