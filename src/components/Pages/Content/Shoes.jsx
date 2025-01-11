import fetchShoes from "../../../assets/content/ShoeData";
import CardList from "../../Utilities/CardList";
import { useQuery } from "react-query";
import sleep from "../../Utilities/sleep";
import Loader from "../../Utilities/Loader";

//added sleep function to simulate resource fetching
function Shoes() {
  const query = useQuery({
    queryKey: ["shoes"],
    queryFn: () => sleep(800).then(fetchShoes),
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

export default Shoes;
