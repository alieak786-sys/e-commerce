 import { toast } from 'react-toastify'
import axios from 'axios'
import { createContext, useEffect, useState } from "react" 
//import Products from "./products";
import { useNavigate } from 'react-router-dom';
export const Shopcontext=createContext()
     const backendurl=import.meta.env.VITE_BACKEND_URL

const Shopcontextprovider=({children})=>{
    const currency='$'
    const delivery_fee=10
    const [token,settoken]=useState('')
    const [search,setsearch]=useState('')
    const [showsearch,setshowsearch]=useState(true)
    const [cart,setcart]=useState({})
    const [products,setproducts]=useState([])
    const navigate=useNavigate()
    const addtocart=async(itemid,size)=>{
        if(!size){
toast.error("selest the size") 
return        }
let cartdata=structuredClone(cart)
if(cartdata[itemid]){
    if(cartdata[itemid][size]){
        cartdata[itemid][size] +=1
    }
    else{        cartdata[itemid][size] =1
}
}else{
    cartdata[itemid]={}
    cartdata[itemid][size]=1
}
setcart(cartdata)
if(token){
  const res=  await axios.post(backendurl+'/api/addtocart',{itemid,size},{headers:{token}})
    console.log(res);
    
}
 
    }
    const getcart=()=>{
        let totalcount=0
        for(const items in cart){
            for(const item in cart[items]){
                try{
                    if(cart[items][item]>0){
                        totalcount += cart[items][item]
                    }
                }
                catch(err){

                }
            }
            return totalcount;
        }
    }
    const updatecart=async(itemid,size,quantity)=>{
let cartdata=structuredClone(cart)
cartdata[itemid][size]=quantity
setcart(cartdata)
if(token){
    const res=await axios.post(backendurl+'/api/updatecart',{itemid,size,quantity})
console.log(res)
}
    }
    const getcartamount=()=>{
        let totalamount=0

      for(const items in cart){
        let iteminfo=products.find((product)=>product._id===items)
        for(const item in cart[items]){
            if(cart[items][item]>0){
                totalamount += iteminfo.price * cart[items][item]
            }
        }
      }
      return totalamount
    }
    const getcartproducts=async(token)=>{
const res=await axios.get(backendurl+'/api/getcart',{},{headers:{token}})
if(res.data.success){
    setcart(res.data.cartData)
}
    }
   const fetchproducts=async()=>{
const res=await axios.get(backendurl+ '/api/listproduct')
if(res.data.success){
    setproducts(res.data.productlist)
}
    }   
     useEffect(()=>{

fetchproducts()
},[])
//need understanding
   useEffect(()=>{
if(!token && localStorage.getItem('token')){
   settoken(localStorage.getItem('token'))
getcartproducts(localStorage.getItem('token')   )
}
},[])
    const   value={
          products,
          currency,
          delivery_fee,
          search,setsearch,showsearch,setshowsearch,
          addtocart,cart,setcart,
          getcart,updatecart,backendurl,
          getcartamount,navigate,token,settoken

    }
 
    return(
<Shopcontext.Provider value={value}>
    {children}
</Shopcontext.Provider>
    )
}
export default Shopcontextprovider