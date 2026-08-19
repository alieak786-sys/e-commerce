import { Link } from "react-router-dom"
import "./collection.css"
import { useContext, useEffect, useState } from "react"
import { Shopcontext } from "./shopcontext"
import Productitem from "./productitem"
import Searchbar from "./search"

const Collection = () => {
  
    const {products,showsearch,search}=useContext(Shopcontext)
    const [show,setshow]=useState(false)
    const [filterproducts,setfilterproducts]=useState([])
    const [category,setcatagory]=useState([])
    const [subcatagory,setsubcatagory]=useState([])
    const [sorttype,setsorttype]=useState('relevent')
    const togglecat=(e)=>{
        if(category.includes(e.target.value)){
            setcatagory(prev=>prev.filter(item=>item !== e.target.value))
        }
        else{
            setcatagory(prev=>[...prev,e.target.value])
        }
    }
        const subtogglecat=(e)=>{
        if(subcatagory.includes(e.target.value)){
            setsubcatagory(prev=>prev.filter(item=>item !== e.target.value))
        }
        else{
            setsubcatagory(prev=>[...prev,e.target.value])
        }
    }
    const applyfilter=()=>{
        let productcopy=products.slice()
        if(category.length > 0){
            productcopy=productcopy.filter(item=>category.includes(item.category))
        }
         if(subcatagory.length > 0){
            productcopy=productcopy.filter(item=>subcatagory.includes(item.subCategory))
        }
          if(search,showsearch){
            productcopy=productcopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
        }
        setfilterproducts(productcopy)
    }
   
    const sortproducts=()=>{
        let fp=filterproducts.slice()
        switch(sorttype){
            case 'low-high':
                setfilterproducts(fp.sort((a,b)=>(a.price-b.price)))
                break;
                  case 'high-low':
                setfilterproducts(fp.sort((a,b)=>(b.price-a.price)))
                break;
                default:
                    applyfilter()
                    break;
        }
    }
    useEffect(()=>{
applyfilter()

    },[subcatagory,category,search,showsearch,products])

    useEffect(()=>{
sortproducts()
    },[sorttype])
  return (<>
  <Searchbar/>
    <div className="collection">
    

      {/* Left - Filter */}
      <div  className="collection__filter">
 <div className="collection__filter-header">
          <h3 >FILTERS</h3>
          <span  onClick={()=>setshow(!show)} className="collection__arrow">&#8964;</span>
        </div>
               {show && (<>

        {/* Category */}
        <div className="collection__filter-section">
          <div className="collection__filter-title">
            <p>CATEGORY</p>
            <span className="collection__arrow">&#8964;</span>
          </div>
          <div className="collection__checkboxes">
            <label>
              <input type="checkbox" value="Men" onClick={togglecat} 
              />
              Men
            </label>
            <label>
              <input type="checkbox" value="Women"  onClick={togglecat} />
              Women
            </label>
            <label>
              <input type="checkbox" value="Kids"  onClick={togglecat}  />
              Kids
            </label>
          </div>
        </div>

        {/* Type */}
        <div className="collection__filter-section">
          <div className="collection__filter-title">
            <p>TYPE</p>
            <span className="collection__arrow">&#8964;</span>
          </div>
          <div className="collection__checkboxes">
            <label>
              <input type="checkbox" value="Topwear" onClick={subtogglecat} />
              Topwear
            </label>
            <label>
              <input type="checkbox" value="Bottomwear" onClick={subtogglecat}/>
              Bottomwear
            </label>
            <label>
              <input type="checkbox" value="Winterwear" onClick={subtogglecat}/>
              Winterwear
            </label>
          </div>
        </div></>)}
      </div>
 
      {/* Right - Products */}
      <div className="collection__products">

        {/* Top Bar */}
        <div className="collection__topbar">
          <h4>ALL COLLECTIONS</h4>
          <select onChange={(e)=>{setsorttype(e.target.value) }} className="collection__sort">
            <option value={'relevant'}>Sort by: Relevant</option>
            <option value={'low-high'}>Sort by: Low to High</option>
            <option value={'high-low'}>Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="collection__grid">
          {/* products will go here */}
          {filterproducts.map((item,idx)=>(
<Productitem key={idx} id={item._id} name={item.name} price={item.price} image={item.image}/>
          ))}

        </div>
    
 </div>
       
    </div>
    </>
  )
}

export default Collection