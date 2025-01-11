import fetchSwimsuits from "../../../assets/content/mockData";
import CardList from "../../Utilities/CardList";
import { useQuery } from "react-query";
import sleep from "../../Utilities/sleep";
import Loader from "../../Utilities/Loader";

//added sleep function to simulate resource fetching
function Swimsuits() {
  const query = useQuery({
    queryKey: ["swimsuits"],
    queryFn: () => sleep(600).then(fetchSwimsuits),
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

export default Swimsuits;
