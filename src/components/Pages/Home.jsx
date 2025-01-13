import hero from "/images/hero.jpg";
import { useQuery } from "react-query";
import Loader from "../Utilities/Loader";
import fetchFeatured from "../Utilities/fetchFeatured";
import sleep from "../Utilities/sleep";

function Home() {
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
    <div className="home-container">
      <div className="hero">
        <img src={hero} alt="offers" />
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-container">
          <div className="product">
            <img src={`${import.meta.env.BASE_URL}/images/${items[0].imgURL}.jpg`} alt="Product 1" />
            <h3>Product 1</h3>
            <p>$29.99</p>
          </div>
          <div className="product">
            <img src={`${import.meta.env.BASE_URL}/images/${items[1].imgURL}.jpg`} alt="Product 2" />
            <h3>Product 2</h3>
            <p>$49.99</p>
          </div>
          <div className="product">
            <img src={`${import.meta.env.BASE_URL}/images/${items[2].imgURL}.jpg`} alt="Product 3" />
            <h3>Product 3</h3>
            <p>$19.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
