import { useContext, useEffect, useState } from "react"
import { Shopcontext } from "./shopcontext"
import Title from "./title"
import axios from "axios"

const Order=()=>{
const {backendurl,token,currency}=useContext(Shopcontext)
const [orderdata,setorderdata]=useState([])
const loadorderdata=async()=>{
if(!token){
    return null
}
const res=await axios.post(backendurl+'/api/userorder',{},{headers:{token}})
console.log(res.data)
if(res.data.success){
    let allorderitems=[]
    res.data.orders.map((order)=>{
        order.items.map((item)=>{
            item['status']=order.status
                        item['paymentmethod']=order.paymentmethod
            item['payment']=order.payment
            item['date']=order.date
allorderitems.push(item)
        })
    })
    setorderdata(allorderitems)
}
}
useEffect(()=>{
    loadorderdata()
},[token])
return(
  <div className="order">
    <div className="order__title">
        <Title txt1={'YOUR'} txt2={'ORDER'} />
    </div>
    <div className="order__list">
        {orderdata.map((item, idx) => (
            <div key={idx} className="order__item">
                <img className="order__img" src={item.image[0]} alt="" />
                <div className="order__name">{item.name}</div>
                <div className="order__price">{currency}{item.price}</div>
                <div className="order__meta">Quantity:{item.quantity}</div>
                <div className="order__meta">Size:{item.size}</div>
                <div className="order__date">Date:{new Date(item.date).toDateString()}</div>
                <div className="order__status">Ready to ship</div>
                <button className="order__track">Track your order</button>
            </div>
        ))}
    </div>
</div>
)
}
export default Order