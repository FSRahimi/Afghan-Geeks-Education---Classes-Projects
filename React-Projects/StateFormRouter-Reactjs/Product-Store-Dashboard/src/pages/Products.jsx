import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("   ")
      .then((res) => res.json())
      .then((date) => setProducts(date));
  }, []);

  return (
    <>
      <h1> Products</h1>
      <div>
        {products.map((product) => {
          <div key={product.id}>
            <img src={product.image} alt={product.title} />

            <div>
              <h3> {product.title.slice(0, 30)}</h3>

              <span> ${product.price}</span>

              <Link to={`/products/${product.id}`}>
                <button className="btn"> View Details</button>
              </Link>
            </div>
          </div>;
        })}
      </div>
    </>
  );
}

export default Products