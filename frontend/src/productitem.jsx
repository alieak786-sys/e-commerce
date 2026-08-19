import { useContext } from "react"
import { Shopcontext } from "./shopcontext"
import { Link } from "react-router-dom";
const Productitem=({id,image,name,price})=>{
const {currency}=useContext(Shopcontext)
return(<>
  <Link to={`/product/${id}`} className="product-item">
      <div className="product-item__img-wrapper">
        <img src={image[0]} alt={name} />
      </div>
      <p className="product-item__name">{name}</p>
      <p className="product-item__price">{currency}{price}</p>
    </Link></>)
}
export default Productitem