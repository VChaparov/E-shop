import hero from "/images/hero.jpg"

function Home() {
  return(
  <div className="home-container">
   <div class="hero">
        <img src={hero} alt="offers" />
    </div>
    <div class="featured-products">
        <h2>Featured Products</h2>
        <div class="products-container">
            <div class="product">
                <img src="" alt="Product 1" />
                <h3>Product 1</h3>
                <p>$29.99</p>
            </div>
            <div class="product">
                <img src="" alt="Product 2" />
                <h3>Product 2</h3>
                <p>$49.99</p>
            </div>
            <div class="product">
                <img src="" alt="Product 3" />
                <h3>Product 3</h3>
                <p>$19.99</p>
            </div>
        </div>
    </div>  
  </div>)
}

export default Home;
