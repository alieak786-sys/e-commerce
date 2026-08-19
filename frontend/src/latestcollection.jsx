import react, { useContext, useEffect, useState } from "react";
import {Shopcontext} from './shopcontext'
import Title from "./title";
import Productitem from './productitem'
const Latestcollection=()=>{
const {products} =useContext(Shopcontext)
const [latestproducts,setlatestproducts]=useState([])
useEffect(()=>{
setlatestproducts(products.slice(0,10))
},[products])

    
    return(
           <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>

            <div style={{ textAlign: 'center' }}>
                <Title txt1={'LATEST'} txt2={'COLLECTION'} />
            </div>

            <p style={{
                textAlign: 'center',
                color: '#888',
                fontSize: '15px',
                lineHeight: '1.8',
                maxWidth: '560px',
                margin: '0 auto',
            }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
                blanditiis unde sunt pariatur itaque eum sapiente facilis rerum a,
                provident enim fugit laboriosam dolorum ipsa sequi? Odit quidem incidunt adipisci.
            </p>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '2rem' }}>
    {latestproducts.map((item,idx)=>(
<Productitem key={idx} id={item._id} name={item.name} image={item.image} price={item.price}/>
    ))}
</div>
        </div>
    )
}
export default Latestcollection