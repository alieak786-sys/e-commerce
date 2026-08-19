import Home from "./home.jsx"
import Collection from './collection.jsx'
import About from './about.jsx'
import Contact from './contact.jsx'
import Product from './product.jsx'
import Placeorder from './placeorder.jsx'
import Order from './order.jsx'
import Navbar from './nav.jsx'
import Cart from "./cart.jsx"
import Hero from "./hero.jsx"
import Footer from "./footer.jsx"
import { Route,Routes } from "react-router-dom"
import Searchbar from "./search.jsx"  
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer} from 'react-toastify'
import Login from "./login.jsx"
import { useContext } from "react"
import { Shopcontext } from "./shopcontext.jsx"

const App=()=>{
    const {token,navigate}=useContext(Shopcontext)

return(<>          <ToastContainer />

<div className="main">
    <Navbar />
  
    <Routes>
        <Route path="/"                   element={<Home/>}/>
        <Route path="/collections"        element={token?<Collection/>:navigate('/login')}/>
        <Route path="/about"              element={<About/>}/>
        <Route path="/contact"            element={<Contact/>}/>
         <Route path="/login"            element={<Login/>}/>
        <Route path="/product/:productid" element={<Product/>}/>
        <Route path="/place-order"         element={token?<Placeorder/>:navigate('./login')}/>
        <Route path="/orders"              element={token?<Order/>:navigate('./login')}/>
        <Route path="/cart"               element={token?<Cart/>:navigate('./login')}/>

    </Routes><Footer/>
    </div>
    </>)
}
export default App
