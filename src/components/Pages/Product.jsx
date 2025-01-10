import CardList from "../Utilities/CardList";
import { SwimsuitsData } from "../../assets/content/mockData";
import { ClothesData } from "../../assets/content/ClothesData";
import { ShoeData } from "../../assets/content/ShoeData";
import { useParams } from "react-router";

function Product() {
    let param = useParams();
  return (
    <>
      <div className="product-container">
        {param.id}
        {param.category}
      </div>
    </>
  );
}

export default Product;
