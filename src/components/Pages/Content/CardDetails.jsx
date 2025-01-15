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
  var URL = `${import.meta.env.BASE_URL}images/${item.imgURL}.jpg`;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
      className="card-details"
    >
      <Box
        className="card-detail-image"
        sx={{
          height: { xs: "13em", sm: "18em", md: "23em", lg: "28em" },
          width: { xs: "12em", sm: "17em", md: "22em", lg: "27em" },
          backgroundImage: `url(${URL})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",

          display: "flex",
          padding: "0",
          margin: "2em",
          objectFit: "contain",
          justifyContent: "start",
        }}
      ></Box>
      <Box
        sx={{ display: "flex", justifyContent: "flex-start", width: "100%" }}
        className="card-info"
      >
        <Box
          sx={{
            height: { xs: "2em", sm: "2em", md: "3em", lg: "3em" },
            width: { xs: "12em", sm: "17em", md: "22em", lg: "27em" },
            fontSize: { xs: "8pt", sm: "10pt", md: "12pt" },
            display: "flex",
            float: "right",
            backgroundColor: "antiquewhite",
            color: "rgb(80, 10, 27)",
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          className="card-details-name"
        >
          {item.name}
        </Box>
      </Box>
    </Box>
  );
}
export default CardDetails;
