import fetchClothes from "../../../assets/content/ClothesData";
import CardList from "../../Utilities/CardList";
import { useQuery } from "react-query";
import sleep from "../../Utilities/sleep";
import "./contentStyles.css";
import Loader from "../../Utilities/Loader";

//added sleep function to simulate resource fetching
function Clothes() {
  const query = useQuery({
    queryKey: ["clothes"],
    queryFn: () => sleep(600).then(fetchClothes),
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

export default Clothes;
