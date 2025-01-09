import CardList from "../Utilities/CardList";
import { ClothesData } from "../../assets/content/ClothesData";

function Clothes() {
  return (
    <div className="product-container">
      <CardList cards={ClothesData} />
    </div>
  );
}

export default Clothes;
