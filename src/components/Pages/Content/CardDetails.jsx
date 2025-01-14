import { useQuery } from "react-query";
import { useParams, Navigate } from "react-router";
import sleep from "../../Utilities/sleep";
import fetchProduct from "../../Utilities/fetchproduct";
import Loader from "../../Utilities/Loader";
import { Box } from "@mui/material";

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
  var URL= `${import.meta.env.BASE_URL}images/${item.imgURL}.jpg`;
  console.log(URL)
  return (
    <Box className="card-details">
      <Box
        className="card-detail-image"
        sx={{ height: { xs: "13em", sm: "18em", md: "23em", lg: "28em" },width:{xs:"12em",sm:"17em",md:"22em",lg:"27em",}, backgroundImage:`url(${URL})`,backgroundSize:"contain",backgroundRepeat:"no-repeat"}}
      ></Box>
      <Box className="card-info">
        <Box className="card-details-name">{item.name}</Box>
      </Box>
    </Box>
  );
}
export default CardDetails;
