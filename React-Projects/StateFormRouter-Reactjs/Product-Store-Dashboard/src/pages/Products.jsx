import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://fakestoreapi.com/products?limit=8"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>
        Products
      </h1>

      <div className="products-grid">
        {products.map((product) => (
          <div
            className="card"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.title}
            />

            <div className="card-content">
              <h3>
                {product.title.slice(0, 30)}
              </h3>

              <span className="price">
                ${product.price}
              </span>

              <Link
                to={`/products/${product.id}`}
              >
                <button className="btn">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;