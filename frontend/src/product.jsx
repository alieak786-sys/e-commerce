import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Shopcontext } from "./shopcontext"
import Related from "./relatedproducts"

const Product=()=>{
    const {productid}= useParams()
    const {products,currency,addtocart}=useContext(Shopcontext)
    const [prodata,setprodata]=useState(false);
    const [img,setimg]=useState('')
    const [size,setsize]=useState('')

    const fetchdata=()=>{
         if(!Array.isArray(products)) return
products.map((item)=>{
    if(item._id===productid){
        setprodata(item)
        setimg(item.image[0])
    }
})
    }
    useEffect(()=>{
fetchdata()
    },[productid,products])


    return prodata?(<>
   <div className="product">

            {/* Left - Images */}
            <div className="product__images">

                {/* Thumbnails */}
                <div className="product__thumbs">
                    {prodata.image.map((item, idx) => (
                        <img
                            onClick={() => setimg(item)}
                            src={item}
                            alt=""
                            key={idx}
                            className="product__thumb"
                        />
                    ))}
                </div>

                {/* Main Image */}
                <div className="product__main-img">
                    <img src={img} alt={prodata.name} />
                </div>

            </div>

            {/* Right - Info */}
            <div className="product__info">

                <h1 className="product__name">{prodata.name}</h1>

                {/* Stars */}
                <div className="product__stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                    <p>(122 reviews)</p>
                </div>

                <p className="product__price">{currency}{prodata.price}</p>

                <p className="product__desc">{prodata.description}</p>

                <div className="product__divider"></div>

                {/* Size */}
                <div className="product__sizes">
                    <p className="product__sizes-label">Select Size</p>
                    <div className="product__sizes-grid">
                        {prodata.sizes.map((item,idx)=>(
                            <button onClick={()=>setsize(item)}className={`${item===size?"product__size product__size--active" : "product__size"}`} key={idx}>{item}</button>
                        ))}
                    </div>
                </div>

                <button onClick={()=>addtocart(prodata._id,size)} className="product__add-btn">ADD TO CART</button>

                <div className="product__divider"></div>

                {/* Extra Info */}
                <div className="product__meta">
                    <p>✔ 100% Original product</p>
                    <p>✔ Cash on delivery available</p>
                    <p>✔ Easy return & exchange within 7 days</p>
                </div>
<Related catagory={prodata.catagory} subcategory={prodata.subcategory}/>
            </div>
        </div>
    </>):<div >load...</div>
}
export default Product