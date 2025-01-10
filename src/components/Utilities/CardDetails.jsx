import fetchShoes from "../../assets/content/ShoeData";
import fetchClothes from "../../assets/content/ClothesData";
import fetchSwimsuits from "../../assets/content/mockData";
import CardList from "../Utilities/CardList";
import { useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import sleep from "../Utilities/sleep";
import { useParams, Navigate } from "react-router";

//added sleep function to simulate resource fetching
function CardDetails() {
  let params = useParams();
  let id = params.id;
  let category = params.category;

  const query = useQuery({
    queryKey: ["product"],
    queryFn: () => sleep(1000).then(() => fetchProduct(id, category)),
  });

  if (query.isLoading) {
    return (
      <div className="loader">
        <PuffLoader size={150} color="blue" aria-label="Loading Spinner" />
      </div>
    );
  }

  if (query.isError) {
    return <pre>{JSON.stringify(query.error)}</pre>;
  }
  if (query.data == undefined || query.data.length == 0) 
    return <Navigate to="/NotFound" replace />;
  return (
    <div className="product-container">
      <CardList cards={query.data} />
    </div>
  );
}
export default CardDetails;

function fetchProduct(id, category) {
  if (category == "Shoes") return [...fetchShoes()].filter((i) => i.id == id);
  if (category == "Clothes")
    return [...fetchClothes()].filter((i) => i.id == id);
  if (category == "Swimsuits")
    return [...fetchSwimsuits()].filter((i) => i.id == id);
}
