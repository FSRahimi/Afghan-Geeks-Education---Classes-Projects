
import {
  Routes,
  Link,
  Route,
 BrowserRouter
} from "react-router-dom";
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Register from "./pages/Register"
import './App.css'

function App() {

  return (
  <div>
  <BrowserRouter>
        <nav>
          <Link to="/"> Home </Link>
           <Link to="/products"> Products </Link>
            <Link to="/register"> Register </Link>

        </nav>
       </BrowserRouter>

       <div>
          <Routes>
                 <Route path="/" element="{<Home/>}"/>
           <Route path="/products" element="{<Products/>}"/>
              <Route path="/products/:id" element="{<ProductDetails/>}"/>
               <Route path="/register" element="{<Register/>}"/>    
          </Routes>
       </div>
       </div>
)
}
  

export default App;
