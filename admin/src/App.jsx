import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer} from 'react-toastify'
import {NavLink} from "react-router-dom"
import {Route,Routes} from "react-router-dom"
import Navbar from "./nav"
import Add from "./add"
import Sidebar from "./sidebar"
import Login from './login'
import { useState,useEffect } from 'react'
import List from './list'
import Order from './order'

export const backendurl= import.meta.env.VITE_BACKEND_URL
export const currency= '$'

const App=()=>{

  const [token,settoken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):"")

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])

  return ( <>
      { token ==='' ?

    
        <Login settoken={settoken}/>
        :
<><Navbar  settoken={settoken}/>
  <ToastContainer/>
  <div style={{display:'flex'}}>
  <Sidebar/>
  <Routes>
    <Route path="/add" token={token} element={<Add token={token}/>}></Route>
    <Route path="/list" token={token} element={<List token={token}/>}></Route>
    <Route path="/order" token={token} element={<Order  token={token}/>}></Route>

  </Routes></div>
 </>
 }
</>  )
  
}
export default App