import { useContext, useEffect, useState } from "react"
import { Shopcontext } from "./shopcontext"
import Title from "./title"
import Carttotal from "./carttotal"
 
const Cart=()=>{
    const {products,currency,cart,updatecart}=useContext(Shopcontext)
    const [cartdata,setcartdata]=useState([])
    
          useEffect(()=>{
if(products.length>0){
const temdata=[]
for(const items in cart){
    for(const item in cart[items]){
        if(cart[items][item]>0){
            temdata.push({
                _id:items,
                size:item,
                quantity:cart[items][item],
            })
        }
}
} 
setcartdata(temdata);
 }
    },[cart,products])
   
  
    return(<>
    <div className="cart">
        <div className="cartname">
            <Title txt1={'YOUR'} txt2={'CART'}/>

        </div>
        <div className="cartobj">
            {cartdata.map((item,idx)=>{
                const dataproduct=products.find((product)=>product._id===item._id)
                return(
                    <div key={idx}>
<img src={dataproduct.image[0]} alt="" /> 
 <div>{dataproduct.name} </div>
 <div className="cart__price">{currency}{dataproduct.price}</div>
<p className="cart__size">{item.size}</p>
<input onChange={(e)=>e.target.value===""||e.target.value==="0" ?null:updatecart(item._id,item.size,Number(e.target.value))} className="cart__quantity" type='number' min={1} defaultValue={item.quantity} />
<svg
    onClick={() => updatecart(item._id, item.size, 0)}
    className="cart__delete"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4h6v2" />
</svg>
                    </div>
                  
                )
            })}
        </div>
        <div>
            <div>
                <Carttotal/>
            </div>
        </div>
    </div>
    </>)
}
export default Cart