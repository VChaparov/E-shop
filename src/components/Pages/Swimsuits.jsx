import CardList from "../Utilities/CardList";
import { mockCards } from "../../assets/content/mockData";

function Swimsuits() {
  return (
    <>
      <div className="product-container">
        <CardList cards={mockCards} />
      </div>
    </>
  );
}

export default Swimsuits;
