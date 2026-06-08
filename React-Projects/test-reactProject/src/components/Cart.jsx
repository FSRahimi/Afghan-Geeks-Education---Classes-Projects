function Cart({ cart, onRemove }) {
  return (
    <div className="cart">
      <h2> Subscription Cart</h2>

      {cart.length === 0 ? (
        <p className="empty"> NO Subscription Selected </p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <span> {item.name}</span>
              <span> ${item.price}</span>
              <button onClick={() => onRemove(item.id)}  className="price">Remove</button>
            </li>
          ))}
        </ul>
      )}

      <div className="total"> Total Items: {cart.length}</div>
    </div>
  );
}

export default Cart;
