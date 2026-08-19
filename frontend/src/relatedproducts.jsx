import React from "react"
import { useContext, useState, useEffect } from "react"
import { Shopcontext } from "./shopcontext"
import Title from './title'
import Productitem from "./productitem"

const Related=({catagory,subcategory})=>{
const {products} = useContext(Shopcontext)
const [relative,setrelative] =useState([])
useEffect(()=>{
if(products.length > 0){
    let productcopy=products.slice()
    productcopy=productcopy.filter((item)=>catagory===item.catagory)
        productcopy=productcopy.filter((item)=>subcategory===item.subcategory)
        setrelative(productcopy.slice(0,5));
        

}
},[products])
return(<>
<div className="related">
    <div className="related__header">
        <Title txt1={'RELATED'} txt2={'PRODUCTS'} />
    </div>
    <div className="related__grid">
        {relative.map((item, idx) => (
            <Productitem key={idx} name={item.name} price={item.price} id={item._id} image={item.image} />
        ))}
    </div>
</div></>)
}
export default Related