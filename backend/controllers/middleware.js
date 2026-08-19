const jwt=require('jsonwebtoken')

const adminauth=(req,res,next)=>{
    try{
const {token}=req.headers
console.log(req.headers);

if(!token){ 
return res.status(200).json({success:false,message:"not is authorized"})
}

const token_decode=jwt.verify(token,process.env.SECRET)
if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
return res.status(200).json({success:false,message:"not authorized"})

}
next()
    }
    catch(err){
        console.log(err.message);
        
    }
}



const userauth=async(req,res,next)=>{
const {token}=req.headers
if(!token){
return res.status(200).json('plz login again ')
}
try{
const token_decode=jwt.verify(token,process.env.SECRET)
req.body.userid=token_decode.id;
next()
}catch(err){console.log(err.message);
}}
module.exports={adminauth,userauth}