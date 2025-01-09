import CardList from "../Utilities/CardList";
import { mockCards } from "../../assets/content/mockData";
import { ClothesData } from "../../assets/content/ClothesData";
import { ShoeData } from "../../assets/content/ShoeData";

function Products() {
  return (
    <>
      <div className="product-container">
        <CardList cards={ShoeData} />
        <CardList cards={ClothesData} />
        <CardList cards={mockCards} />
      </div>
    </>
  );
}

export default Products;
