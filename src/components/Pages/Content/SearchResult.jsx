import featchSearch from "../../Utilities/featchSearch";
import CardList from "../../Utilities/CardList";
import { useQuery } from "react-query";
import sleep from "../../Utilities/sleep";
import Loader from "../../Utilities/Loader";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router";

function SearchResult() {
  let params = useParams();

  const query = useQuery({
    queryKey: ["products", params.query],
    queryFn: () => sleep(600).then(() => featchSearch(params.query)),
    enabled: !!params.query,
  });

  useEffect(() => {
    if (params.query) {
      query.refetch();
    }
  }, [params.query]);

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

export default SearchResult;
