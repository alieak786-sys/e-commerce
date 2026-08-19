import { useContext, useEffect, useState } from "react"
import { Shopcontext } from "./shopcontext"
import Title from "./title"
import Productitem from "./productitem"

const Bestsellers=()=>{
    const {products} =useContext(Shopcontext)
    const [bestsell,setbestsell]=useState([])
    useEffect(()=>{
const bestproduct=products.filter((item)=>(item.bestseller));
setbestsell(bestproduct.slice(0,4))
    },[products])
    return(<>
     <div className="bestsellers">
        <div className="bestsellers__header">
            <Title txt1={'BEST'} txt2={'SELLERS'} />
        </div>
        <p className="bestsellers__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="bestsellers__grid">
            {bestsell.map((item, idx) => (
                <Productitem key={idx} name={item.name} id={item._id}
                    price={item.price} image={item.image} />
            ))}
        </div>
    </div></>)
}
export default Bestsellers