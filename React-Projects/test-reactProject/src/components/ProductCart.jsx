function ProductCard({ product, onAdd }) {
  return (
    <div className="cart">
      <h3> {product.name}</h3>

      <p className="price"> ${product.price}/Month</p>

      <button onClick={() => onAdd(product)} className="btn">
        
        Add To Subscription
      </button>
    </div>
  );
}

export default ProductCard;
