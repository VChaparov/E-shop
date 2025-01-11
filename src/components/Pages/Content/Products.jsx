import fetchShoes from "../../../assets/content/ShoeData";
import fetchClothes from "../../../assets/content/ClothesData";
import fetchSwimsuits from "../../../assets/content/mockData";
import CardList from "../../Utilities/CardList";
import { useQuery } from "react-query";
import sleep from "../../Utilities/sleep";
import Loader from "../../Utilities/Loader";

//added sleep function to simulate resource fetching
function Products() {
  function fetchProducts() {
    const data = [...fetchShoes(), ...fetchClothes(), ...fetchSwimsuits()];
    return data;
  }

  const query = useQuery({
    queryKey: ["products"],
    queryFn: () => sleep(600).then(()=>fetchProducts),
  });

  if (query.isLoading) {
    return (
      <Loader />
    );
  }

  if (query.isError) {
    return <pre>{JSON.stringify(query.error)}</pre>;
  }
  return (
    <div className="content-grid">
      <CardList cards={query.data} />
    </div>
  );
}

export default Products;
