import fetchSwimsuits from "../../../assets/content/SwimsuitData";
import CardList from "../../Utilities/CardList";
import { useQuery } from "react-query";
import sleep from "../../Utilities/sleep";
import Loader from "../../Utilities/Loader";
import { Box } from "@mui/material";

//added sleep function to simulate resource fetching
function Swimsuits() {
  const query = useQuery({
    queryKey: ["swimsuits"],
    queryFn: () => sleep(600).then(fetchSwimsuits),
  });

  if (query.isLoading) {
    return <Loader />;
  }

  if (query.isError) {
    return <pre>{JSON.stringify(query.error)}</pre>;
  }
  return (
    <Box
      className="content-grid"
      sx={{
        gridTemplateColumns: {
          xs: "repeat(auto-fill, minmax(7em, 7em))",
          sm: "repeat(auto-fill, minmax(8em, 8em))",
          md: " repeat(auto-fill, minmax(10em, 10em))",
          lg: " repeat(auto-fill, minmax(13em, 13em))",
        },
        gridAutoRows: { xs: "9em", sm: "10em", md: "12em", lg: "15em" },
        gap: { xs: "0.5em", sm: "0.7em", md: "0.7em", lg: "1em" },
      }}
    >
      <CardList cards={query.data} />
    </Box>
  );
}

export default Swimsuits;
