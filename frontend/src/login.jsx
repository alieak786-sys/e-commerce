import { useContext, useState,useEffect } from "react"
import "./login.css"
import { Shopcontext } from "./shopcontext"
import axios from "axios"

const Login = () => {
    const {token,settoken,navigate,backendurl}=useContext(Shopcontext)
    const [currentstate, setcurrentstate] = useState('Login')
    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    
const submit=async()=>{
    try{
      
        
    if(currentstate==="Signup"){
const res=await axios.post(backendurl + '/api/register',{username,email,password})
        settoken(res.data.token)
        localStorage.setItem('token',res.data.token)

}
    else{
        if(currentstate==="Login"){
const res=await axios.post(backendurl + '/api/login',{email,password})
    
                console.log(res.data)

        settoken(res.data.token)
        console.log(res.data)
        localStorage.setItem('token',res.data.token)
    }}
}
catch(err){
     console.log("ERROR:", err.response?.data || err.message)
 }
}
useEffect(()=>{
    if(token){
            navigate('/')

    }
},[token])

    return (
        <div className="login">
            <div className="login__box">

                <h2 className="login__title">{currentstate ==='Signup'? 'Signup':'Login'}</h2>
                <div className="login__underline"></div>

             {currentstate==='Signup'? 
             <input onChange={(e)=>setusername(e.target.value)} value={username} className="login__input" type="text" placeholder="Username" /> : ""} 
                <input onChange={(e)=>setemail(e.target.value)} value={email} className="login__input" type="email" placeholder="Email address" />
                <input onChange={(e)=>setpassword(e.target.value)} value={ password} className="login__input" type="password" placeholder="Password" />
                <p className="login__forgot">Forgot password?</p>
                <button onClick={submit} className="login__btn">{currentstate  ==='Signup'? 'Signup':'Login'}</button>

                <div className="login__switch">
                    {currentstate==='Signup'?
                    <p onClick={()=>setcurrentstate('Login')}>Already have an account? <span>Login</span></p>
                    :
                    <p onClick={()=>setcurrentstate('Signup')}>create account</p>}
                </div>

            </div>
        </div>
    )
}

export default Login