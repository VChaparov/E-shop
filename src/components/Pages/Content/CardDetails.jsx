import { useQuery } from "react-query";
import { useParams, Navigate } from "react-router";
import sleep from "../../Utilities/sleep";
import fetchProduct from "../../Utilities/fetchproduct";
import Loader from "../../Utilities/Loader";

//added sleep function to simulate resource fetching
function CardDetails() {
  let params = useParams();
  let id = params.id;
  let category = params.category;

  const query = useQuery({
    queryKey: [`product_${id}`],
    queryFn: () => sleep(1000).then(() => fetchProduct(id, category)),
  });

  if (query.isLoading) {
    return <Loader />;
  }

  if (query.isError) {
    return <pre>{JSON.stringify(query.error)}</pre>;
  }
  if (query.data == undefined || query.data.length == 0)
    return <Navigate to="/NotFound" replace />;

  var item = query.data[0];

  return (
    <div className="card-details">
      <img
        className="card-detail-image"
        src={`${import.meta.env.BASE_URL}/images/${item.imgURL}.jpg`}
      ></img>
      <div className="card-info">
        <div className="card-details-name">{item.name}</div>
      </div>
    </div>
  );
}
export default CardDetails;
