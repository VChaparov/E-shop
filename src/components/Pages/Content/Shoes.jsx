import fetchShoes from "../../../assets/content/ShoeData";
import CardList from "../../Utilities/CardList";
import { useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import sleep from "../../Utilities/sleep";

//added sleep function to simulate resource fetching
function Shoes() {
  const query = useQuery({
    queryKey: ["shoes"],
    queryFn: () => sleep(800).then(fetchShoes),
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
      <CardList cards={query.data} />
  );
}

export default Shoes;
