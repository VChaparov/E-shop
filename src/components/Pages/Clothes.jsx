import fetchClothes from "../../assets/content/ClothesData";
import CardList from "../Utilities/CardList";
import { useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import sleep from "../Utilities/sleep";

//added sleep function to simulate resource fetching
function Clothes() {
  const query = useQuery({
    queryKey: ["clothes"],
    queryFn: () => sleep(600).then(fetchClothes),
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

export default Clothes;
