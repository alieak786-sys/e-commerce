import { useState } from 'react'
import './pages.css'
import { backendurl } from './App'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({token}) => {

    const [img1,setimg1]=useState(false)
    const [img2,setimg2]=useState(false)
    const [img3,setimg3]=useState(false)
    const [img4,setimg4]=useState(false)


    const [name,setname]=useState('')
    const [description,setdescription]=useState('')
    const [price,setprice]=useState('')
    const [catagory,setcatagory]=useState('Women')
    const [subcatagory,setsubcatagory]=useState('Topwear')
    const [bestsellers,setbestsellers]=useState(false)
    const [sizes,setsizes]=useState([])

const submit=async(e)=>{
    e.preventDefault()
    

    const formdata=new FormData()
    formdata.append('name',name)
formdata.append('description',description )
formdata.append('price',price )
formdata.append('catagory',catagory )
formdata.append('subcatagory',subcatagory )
formdata.append('bestsellers',bestsellers )
formdata.append('sizes',JSON.stringify(sizes) )
 img1 && formdata.append('img1',img1 )
 img2 && formdata.append('img2',img2 )
 img3 && formdata.append('img3',img3 )
 img4 && formdata.append('img4',img4 )
const res= await axios.post(backendurl +'/api/addproduct',formdata,{headers:{token}})
console.log(res.data);
if(res.data.success==true){
    toast.success(res.data.message)
}

}
  return (

    <form   className="add">

      {/* Images */}
      <div className="add__images">
        <label htmlFor="img1" className="add__img-label">
          <img src={!img1?"https://cdn-icons-png.flaticon.com/512/0/532.png":URL.createObjectURL(img1)} alt="upload" />
          <input onChange={(e)=>setimg1(e.target.files[0])} type="file" id="img1" />
        </label>
        <label htmlFor="img2" className="add__img-label">
          <img src={!img2?"https://cdn-icons-png.flaticon.com/512/0/532.png":URL.createObjectURL(img2)} alt="upload" />
          <input onChange={(e)=>setimg2(e.target.files[0])}  type="file" id="img2" />
        </label>
        <label htmlFor="img3" className="add__img-label">
          <img src={!img3?"https://cdn-icons-png.flaticon.com/512/0/532.png":URL.createObjectURL(img3)} alt="upload" />
          <input onChange={(e)=>setimg3(e.target.files[0])}  type="file" id="img3" />
        </label>
        <label htmlFor="img4" className="add__img-label">
          <img src={!img4?"https://cdn-icons-png.flaticon.com/512/0/532.png":URL.createObjectURL(img4)} alt="upload" />
          <input onChange={(e)=>setimg4(e.target.files[0])}  type="file" id="img4" />
        </label>
      </div>

      {/* Product Name */}
      <div className="add__field">
        <p className="add__label">Product name</p>
        <input onChange={(e)=>setname(e.target.value)} value={name} className="add__input" type="text" placeholder="Type here" />
      </div>

      {/* Product Description */}
      <div className="add__field">
        <p className="add__label">Product description</p>
        <textarea onChange={(e)=>setdescription(e.target.value)} value={description} className="add__textarea" placeholder="Write content here"></textarea>
      </div>

      {/* Category / SubCategory / Price */}
      <div className="add__row">
        <div className="add__field">
          <p className="add__label">Product category</p>
          <select onChange={(e)=>setcatagory(e.target.value)} className="add__select">
            <option>Women</option>
            <option>Men</option>
            <option>Kids</option>
          </select>
        </div>

        <div className="add__field">
          <p className="add__label">Sub category</p>
          <select onChange={(e)=>setsubcatagory(e.target.value)} className="add__select">
            <option>Topwear</option>
            <option>Bottomwear</option>
            <option>Winterwear</option>
          </select>
        </div>

        <div className="add__field">
          <p className="add__label">Product Price</p>
          <input onChange={(e)=>setprice(e.target.value)} value={price} className="add__input add__input--price" type="number" placeholder="25" />
        </div>
      </div>

      {/* Sizes */}
      <div className="add__field">
        <p className="add__label">Product Sizes</p>
        <div  className="add__sizes">
            {/* need to understand */}
          <div onClick={()=>setsizes(prev=>prev.includes('S')?prev.filter(items=>items !=='S'):[...prev,'S'])}  className={sizes.includes('S') ? "add__size add__size--active" : "add__size"}>S</div>
          <div  onClick={()=>setsizes(prev=>prev.includes('M')?prev.filter(items=>items !=='M'):[...prev,'M'])} className={sizes.includes('M') ? "add__size add__size--active" : "add__size"}>M</div>
          <div  onClick={()=>setsizes(prev=>prev.includes('L')?prev.filter(items=>items !=='L'):[...prev,'L'])} className={sizes.includes('L') ? "add__size add__size--active" : "add__size"}>L</div>
          <div  onClick={()=>setsizes(prev=>prev.includes('XL')?prev.filter(items=>items !=='XL'):[...prev,'XL'])} className={sizes.includes('XL') ? "add__size add__size--active" : "add__size"}>XL</div>
          <div  onClick={()=>setsizes(prev=>prev.includes('XXL')?prev.filter(items=>items !=='XXL'):[...prev,'XXL'])} className={sizes.includes('XL') ? "add__size add__size--active" : "add__size"}>XXL</div>
        </div>
      </div>

      {/* Bestseller */}
      <div onClick={()=>setbestsellers(prev=>!prev)} checked={bestsellers} className="add__checkbox-row">
        <input type="checkbox" id="bestseller" />
        <label htmlFor="bestseller">Add to bestseller</label>
      </div>

      {/* Submit */}
      <button type='submit'  onClick={ submit} className="add__submit-btn">ADD</button>

    </form>
  )
}

export default Add