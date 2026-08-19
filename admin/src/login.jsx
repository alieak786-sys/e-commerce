import { useState } from "react"
import axios from 'axios'
import { backendurl } from "./App"
import { toast} from 'react-toastify'
const Login = ({settoken}) => {
      const [email,setemail]=useState('')
      const [password,setpassword]=useState('')
      
      const submit =async()=>{
        try{
        const res= await axios.post(backendurl + "/api/admin",{email,password})
        if(res.data.success){

      settoken(res.data.token)
      toast.success(res.data.message)

        }
        else{
          
          toast.error(res.data.message)

        }
           }
    catch(err){
      console.log(err.message);
      
    }
      }
 
  return (
    <div className="admin-login">
      <div className="admin-login__box">

        <h2 className="admin-login__title">Admin Panel</h2>
        <div className="admin-login__underline"></div>

        <input value={email} onChange={(e)=>setemail(e.target.value)}  className="admin-login__input" type="email" placeholder="Email address" />
        <input value={password} onChange={(e)=>setpassword(e.target.value)} className="admin-login__input" type="password" placeholder="Password" />

      <button onClick={submit} className="admin-login__btn">LOGIN</button>

        <p className="admin-login__forgot">Forgot password?</p>

      </div>
    </div>
  )
}
 
export default Login


