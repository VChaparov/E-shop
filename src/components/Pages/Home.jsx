import { useQuery } from "react-query";
import Loader from "../Utilities/Loader";
import fetchFeatured from "../Utilities/fetchFeatured";
import sleep from "../Utilities/sleep";
import { Box } from "@mui/material";
import Card from "../Utilities/Card";
import CardList from "../Utilities/CardList";

function Home() {
  const hero = `${import.meta.env.BASE_URL}/images/hero.jpg`;
  const query = useQuery({
    queryKey: [`featured`],
    queryFn: () => sleep(1000).then(() => fetchFeatured()),
  });

  if (query.isLoading) {
    return <Loader />;
  }

  if (query.isError) {
    return <pre>{JSON.stringify(query.error)}</pre>;
  }
  if (query.data == undefined || query.data.length == 0)
    return <Navigate to="/NotFound" replace />;
  var items = query.data;

  return (
    <Box className="home-container">
      <Box className="hero">
        <Box
          sx={{
            backgroundImage: `url("${hero}")`,
            backgroundSize: "cover",
            height: "50%",
            width: "50%",
          }}
          alt="offers"
        ></Box>
      </Box>
      <Box className="featured-products">
        <h2>Featured Products</h2>
        <Box
          className="content-grid"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(3, minmax(7em, 7em))",
              sm: "repeat(3, minmax(8em, 8em))",
              md: " repeat(3, minmax(10em, 10em))",
              lg: " repeat(3, minmax(13em, 13em))",
            },
            gridAutoRows: { xs: "9em", sm: "10em", md: "12em", lg: "15em" },
            gap: { xs: "0.5em", sm: "0.7em", md: "0.7em", lg: "1em" },
          }}
        >
          <CardList cards={items} />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
