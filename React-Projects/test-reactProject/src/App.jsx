import { useState } from "react";

import Header from "./components/Header";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "GitHub Pro", price: 10 },
    { id: 2, name: "AI Pro", price: 30 },
    { id: 3, name: "Vercel Pro", price: 10 },
    { id: 4, name: "Figma Pro", price: 10 }
  ];

  function addToCart(product) {
    setCart([...cart, product]);
  }
  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }
  return (
    <div className="app">
      <Header cartCount={cart.length} />
      <h2 className="title"> MarketPlace</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={addToCart} />
        ))}
      </div>
      <Cart cart={cart} onRemove={removeFromCart} />
    </div>
  );
}

export default App;
