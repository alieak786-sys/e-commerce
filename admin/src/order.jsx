import { useState } from "react"
import axios from 'axios'
import {backendurl,currency} from './App'
import { useEffect } from "react"
const Order=({token})=>{
    const [orders,setorders]=useState([])
    const fetchorder=async()=>{
        if(!token){return null}
const res=await axios.post(backendurl+'/api/listorders',{},{headers:{token}})
console.log(res.data)
//if(res.data.success){
    setorders(res.data.orders)
//}
}
const statushandler=async(e,orderid)=>{
    const res=await axios.post(backendurl+'/api/orderstatus',{orderid,status:e.target.value},{headers:{token}})
    await fetchorder()
}
useEffect(()=>{
fetchorder()
},[token])
    
    return(<>
   
    <div className="orders-page">
        <div className="orders-title">All Orders</div>
        <div className="orders-list">
            {orders.map((order, idx) => (
                <div className="order-card" key={idx}>
                    <img className="order-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-D3W3oS3t5MxU8GVFH8OpbH-qxUb59hiYA&s" alt="" />
                    <div className="order-items">
                        {order.items.map((item, i) => (
                            <p className="order-item" key={i}>
                                {item.name} <span className="order-qty">x {item.quantity}</span>
                                <span className="order-size">{item.size}</span>
               </p>
         ))}
                         
                    
        <p>{order.address.firstname+" "+order.address.lastname}</p>
        <div>
            <p>{order.address.street+"," }</p>
        <p>{order.address.city+","+order.address.state+","+order.address.country}</p></div>
        <p>{order.address.phone}</p>
        <div>
            <p>items : {order.items.length}</p>
            <p>method : {order.paymentmethod}</p>
            <p>payment : {order.payment ?"Done":"pending"}</p>
            <p>date : {new Date(order.date).toLocaleDateString()}</p>
            <div className="order-amount">{currency}{order.amount}</div>
            <select className="order-status-select" onChange={(e)=>statushandler(e,order._id)} value={order.status} name="" id="">
                <option  value="order-placed">order-placed</option>
                <option value="packing">packing</option>
                <option value="shipping">shipping</option>
                <option value="out for delivery">out for delivery</option>
                <option value="delivered">delivered</option>
            </select>
  </div> </div>
                </div>
            ))}        
        </div>
    </div>

    </>)
}
export default Order