function Header ({cartCount}) {
    return(
        <header className="header"> 
          <h1 > DevShop </h1>
          <div className="cart-badge">  Items in Cart :  {cartCount} </div>
        </header>
    )
}

export default Header