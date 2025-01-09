import CardList from "../Utilities/CardList";
import { ShoeData } from "../../assets/content/ShoeData";

function Shoes() {
  return (
    <>
      <div className="product-container">
        <CardList cards={ShoeData} />
      </div>
    </>
  );
}

export default Shoes;
