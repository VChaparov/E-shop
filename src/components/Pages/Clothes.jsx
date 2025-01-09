import CardList from "../Utilities/CardList";
import { ClothesData } from "../../assets/content/ClothesData";

function Clothes(){
    return(
    <>
        <CardList cards = {ClothesData}/>
    </>
    )   
    }

export default Clothes;