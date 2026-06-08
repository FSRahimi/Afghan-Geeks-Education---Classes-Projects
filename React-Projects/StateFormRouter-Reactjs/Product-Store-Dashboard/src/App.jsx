
import {
   BrowserRouter,
  Routes,
  Link,
  Route,
} from "react-router-dom";

import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Register from "./pages/Register"
import './App.css'

function App() {

  return (
  <BrowserRouter>
        <nav>
          <Link to="/"> Home </Link>
           <Link to="/products"> Products </Link>
            <Link to="/register"> Register </Link>
        </nav>
      

       <div>
          <Routes>
                 <Route path="/" element={<Home/>}/>
           <Route path="/products" element={<Products/>}/>
              <Route path="/products/:id" element={<ProductDetails/>}/>
               <Route path="/register" element={<Register/>}/>    
          </Routes>
       </div>
        </BrowserRouter>
)
}
  

export default App;
