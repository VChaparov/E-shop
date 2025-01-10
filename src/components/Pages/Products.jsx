import fetchShoes from "../../assets/content/ShoeData";
import fetchClothes from "../../assets/content/ClothesData";
import fetchSwimsuits from "../../assets/content/mockData";
import CardList from "../Utilities/CardList";
import { useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import sleep from "../Utilities/sleep";

//added sleep function to simulate resource fetching
function Products() {

  function fetchProducts() {
    const data = [...fetchShoes(), ...fetchClothes(), ...fetchSwimsuits()];
    return data;
  }

  const query = useQuery({
    queryKey: ["products"],
    queryFn: () => sleep(600).then(fetchProducts),
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
  return (
      <div className="product-container">
        <CardList cards={query.data} />
      </div>
  );
}

export default Products;
