import axios from "axios"
import { useEffect, useState } from "react"
import { backendurl, currency } from "./App"
import { toast } from "react-toastify"
import "./pages.css"

const List = ({token}) => {
    const [list, setlist] = useState([])
    const fetch = async () => {
        const res = await axios.get(backendurl + '/api/listproduct')
        console.log(res.data);
        if (res.data.success) {
            setlist(res.data.productlist)
          //  toast.success(res.data.message)
        }
        // else {
        //     toast.error(res.data.message)
        // }
    }
    const remove=async(id)=>{
        const res=await axios.post(backendurl+`/api/removeproduct/${id}`,{},{headers:{token}})
        if(res.data.success){
await fetch()        }
    }
    useEffect(() => {
        fetch()
    }, [])
    return (
        <div className="list">
            <h3 className="list__title">All Products List</h3>

            <div className="list__table">

                <div className="list__header">
                    <p>Image</p>
                    <p>Name</p>
                    <p>Category</p>
                    <p>Price</p>
                    <p>Action</p>
                </div>

                {list.map((item, idx) => (
                    <div key={idx} className="list__row">
                        <img className="list__img" src={item.image[0]} alt="" />
                        <p className="list__name">{item.name}</p>
                        <p className="list__category">{item.catagory}</p>
                        <p className="list__price">{currency}{item.price}</p>
                        <p onClick={()=>remove(item._id)} className="list__action">X</p>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default List