import { useContext } from "react"
import { Shopcontext } from "./shopcontext"
import Title from "./title"

const Carttotal=()=>{
    const {currency,delivery_fee,getcartamount,navigate}=useContext(Shopcontext)
    return(
   <div className="carttotal">
    <div className="carttotal__title">
        <Title txt1={'CART'} txt2={'TOTALS'} />
    </div>
    <div className="carttotal__row">
        <p>Subtotal</p>
        <p>{currency}{getcartamount()}.00</p>
    </div>
    <div className="carttotal__row">
        <p>Shipping</p>
        <p>{currency}{delivery_fee}</p>
    </div>
    <div className="carttotal__total">
        <p>Total</p>
        <p>{currency}{getcartamount() === 0 ? 0 : getcartamount() + delivery_fee}</p>
    </div>
    <button onClick={()=>navigate('place-order')} className="carttotal__checkout">PROCEED TO CHECKOUT</button>
</div>
    )
}
export default Carttotal