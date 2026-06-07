import { useState } from "react";

import Header from "./components/Header";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCart";
import "./App.css";
import "./index.css";

function App() {
  const [cart, setCart] = useState([]);
  const product = [
    { id: 1, name: "GitHub Pro", price: 10 },
    { id: 2, name: "AI Pro", price: 30 },
    { id: 3, name: "Vercel Pro", price: 10 },
    { id: 4, name: "Figma Pro", price: 10 }
  ];

  function addToCart(product) {
    setCart([...Cart, product]);
  }
  function removeFromCart(id) {
    setCart(Cart.filter((item) => item.id !== id));
  }
  return (
    <div>
      <Header cartCount={cart.length} />
      <h2> MarketPlace</h2>

      <div>
        {product.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={addToCart} />
        ))}
      </div>
      <Cart cart={cart} onRemove={removeFromCart} />
    </div>
  );
}

export default App;
