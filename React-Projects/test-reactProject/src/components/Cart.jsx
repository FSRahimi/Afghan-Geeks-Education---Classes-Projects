function Cart(){
    return(
        <div className="cart">
            <h2> Subscription Cart</h2>

            {Cart.length === 0 ? (<p className="empty" > NO Subscription Selected </p>) : 
            <ul>
              {Cart.map((item)=>(
                <li key={item.id}   className="cart-item">

                <span> {item.name}</span>
                  <span> ${item.price}</span>
                  <button onClick={() => onpointermove(item.id)}> Remove </button>

                </li>
              ))}
            </ul>}

            <div  className="total"> Total Items: {Cart.length}</div>
        </div>
    )
}

export default Cart;