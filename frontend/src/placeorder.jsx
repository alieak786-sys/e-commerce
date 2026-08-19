import axios from "axios"
import Title from "./title"
import Carttotal from "./carttotal"
import { useContext, useState } from "react"
import { Shopcontext } from "./shopcontext"

const Placeorder = () => {
    const [method,setmethod]=useState('cash')
    const { products,
          currency,
          delivery_fee,
          search,setsearch,showsearch,setshowsearch,
          addtocart,cart,setcart,
          getcart,updatecart,backendurl,
          getcartamount,navigate,token,settoken}=useContext(Shopcontext)
    const [form,setform]=useState({
      firstname:'',
      lastname:'',
      email:"",
      street:"",
      city:"",
      state:"",
      zipcode:"",
      country:"",
      phone:""
    })
    const onchangehandler=(e)=>{
      const name=e.target.name
      const value=e.target.value
      setform(data=>({...data,[name]:value}))
    }
    const onsubmithandler=async(e)=>{
e.preventDefault()
let orderitems=[]
for(const items in cart){
  for(const item in cart[items]){
if(cart[items][item]>0){
  const iteminfo=structuredClone(products.find(product=>product._id===items))
  if(iteminfo){
    iteminfo.size=item
    iteminfo.quantity=cart[items][item]
    orderitems.push(iteminfo)

    let orderdata={
      address:form,
      items:orderitems,
      amount:getcartamount()+delivery_fee
    }
    switch (method){
      case 'cash':
        const res=await axios.post(backendurl+'/api/placeorder',orderdata,{headers:{token}})
                  navigate('/orders')
                  setcart({})
                  break;
                  case 'stripe':
                    const resstp=await axios.post(backendurl+'/api/stripe',orderdata,{headers:{token}})
                    const {session_url}=resstp.data
                    window.location.replace(session_url)

          
      
    }


  }
}
  }
}
    }
      return (
    <form onChange={onchangehandler} onSubmit={onsubmithandler} className="placeorder">

      {/* Left - Delivery Info */}
      <div className="placeorder__left">
        <div className="placeorder__title">
          <Title txt1={'DELIVERY'} txt2={'INFORMATION'} />
        </div>

        <div className="placeorder__form">
          <div className="placeorder__row">
            <input required onChange={onchangehandler} name="firstname" value={form.firstname} className="placeorder__input" type="text" placeholder="First name" />
            <input onChange={onchangehandler} name="lastname" value={form.lastname} className="placeorder__input" type="text" placeholder="Last name" />
          </div>
          <input onChange={onchangehandler} name="email" value={form.email} className="placeorder__input placeorder__input--full" type="email" placeholder="Email address" />
          <input onChange={onchangehandler} name="street" value={form.street} className="placeorder__input placeorder__input--full" type="text" placeholder="Street" />
          <div className="placeorder__row">
            <input onChange={onchangehandler} name="city" value={form.city} className="placeorder__input" type="text" placeholder="City" />
            <input onChange={onchangehandler} name="state" value={form.state} className="placeorder__input" type="text" placeholder="State" />
          </div>
          <div className="placeorder__row">
            <input onChange={onchangehandler} name="zipcode" value={form.zipcode} className="placeorder__input" type="text" placeholder="Zipcode" />
            <input onChange={onchangehandler} name="country" value={form.country} className="placeorder__input" type="text" placeholder="Country" />
          </div>
          <input onChange={onchangehandler} name="phone" value={form.phone} className="placeorder__input placeorder__input--full" type="tel" placeholder="Phone" />
        </div>
      </div>

      {/* Right - Cart Total + Payment */}
      <div className="placeorder__right">
        <Carttotal />

        <div className="placeorder__payment">
          <div className="placeorder__payment-title">
            <Title txt1={'PAYMENT'} txt2={'METHOD'} />
          </div>

         <div className="placeorder__methods">
  <div onClick={() => setmethod('stripe')} className={`placeorder__method ${method === 'stripe' ? 'placeorder__method--active' : ''}`}>
    <span className="placeorder__stripe">stripe</span>
  </div>
  <div onClick={() => setmethod('razorpay')} className={`placeorder__method ${method === 'razorpay' ? 'placeorder__method--active' : ''}`}>
    <span className="placeorder__razorpay">◈Razorpay</span>
  </div>
  <div onClick={() => setmethod('cash')} className={`placeorder__method ${method === 'cash' ? 'placeorder__method--active' : ''}`}>
    <span>CASH ON DELIVERY</span>
  </div>
</div>
          <button type="submit"  className="placeorder__btn">PLACE ORDER</button>
        </div>
      </div>

    </form>
  )
}

export default Placeorder