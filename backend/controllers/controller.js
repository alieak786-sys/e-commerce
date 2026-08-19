const user=require('../models/user')
const product=require('../models/product')
const bcrypt=require('bcrypt')
const validator=require('validator')
const jwt=require('jsonwebtoken')
const order = require('../models/order')
const cloudinary=require('cloudinary').v2
const Stripe=require('stripe')
const stp=new Stripe(process.env.STRIPE_SECRET_KEY)
const deliveryCharges=200
const currency='pkr'

const usertoken=(id)=>{
return jwt.sign({id},process.env.SECRET)
}

const loginuser= async(req,res)=>{
const {email,password}=req.body
const exist=await user.findOne({email})

if(!exist){
   return  res.status(200).json({message:"user donot exists",success:false})   
}
const comparepassword=await bcrypt.compare(password,exist.password)
if(comparepassword){
    const token=  usertoken(exist._id)
    console.log(token)
       return  res.status(200).json({message:'you login successfully',success:true,token})   

}
else{
           return  res.status(200).json({message:"invalid credentials",success:false})   


}
}

const registeruser= async(req,res)=>{
    try{
const {username,email,password}=req.body;

const  salt=await bcrypt.genSalt(10)
const hashpassword=await bcrypt.hash(password,salt)

const exist=await user.findOne({email})

if(exist){
  return  res.status(200).json({message:"user already exists",success:false})
}
if(!validator.isEmail(email)){
    return    res.status(200).json({message:"email is not valid",success:false})

}
if(password.length<8){
     return   res.status(200).json({message:"choose a valid password ",success:false})

}else{
const createuser=await user.create({
    username,email,
    password:hashpassword
}) 
const token=usertoken(createuser._id)
res.status(200).json({message:"you signed in successfully",success:true,token})}


}catch(err){console.log(err);
    }
}
const adminuser= async(req,res)=>{
    try{
const {email,password}=req.body
if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
    const token=jwt.sign(email+password,process.env.SECRET)
    res.status(299).json({success:true,message:"admin authenticated successfully",token})

}
else{
    res.status(200).json({success:false,message:"invalid credentials"})
}}catch(err){
        console.log(err.message)
    }
}


const addproduct= async(req,res)=>{
const {
    name,
    description,
    price,
    image,
    catagory,
    subcatagory,
    sizes,
    bestsellers,
    
}=req.body
const image1=req.files.img1 && req.files.img1[0]
const image2=req.files.img2 && req.files.img2[0]
const image3=req.files.img3 && req.files.img3[0]
const image4=req.files.img4 && req.files.img4[0]
//need to understand
const images=[image1,image2,image3,image4].filter((item)=>item!==undefined)
let imageurl=await Promise.all(
    images.map(async (item)=>{
        let result=await cloudinary.uploader.upload(item.path,{resource_type:"image"})
        return result.secure_url
    })
)
const createproduct=await product.create({
    name,
    description,
    price:Number(price),
     image:imageurl,
    catagory,
    subcatagory,
      sizes:JSON.parse(sizes),
   bestsellers:bestsellers==='true'? true:false,
    Date:Date.now()
})
res.status(200).json({success:true,message:"product is created"})
}
const listproduct= async(req,res)=>{
const productlist=await product.find({})
res.status(200).json({success:true,productlist,message:"product added"})
 
}
const findproduct= async(req,res)=>{
    const {id}=req.params
const singleproduct=await product.findById(id)
res.status(200).json({success:true,singleproduct}) 
}
const removeproduct= async(req,res)=>{
const delproduct=await product.findByIdAndDelete(req.params.id)
res.status(200).json({success:true,delproduct})
}

const addtocart=async(req,res)=>{
    try{
const {userid,itemid,size}=req.body
const userdata=await user.findById(userid)
let cartData=userdata.cartData
if(cartData[itemid]){
    if(cartData[itemid][size]){
        cartData[itemid][size] +=1

    }
    else{
        cartData[itemid][size]=1
    }

}
else{
    cartData[itemid]={}
    cartData[itemid][size]=1
}
await user.findByIdAndUpdate(userid,{cartData})
res.json({message:"added product to cart"})}catch(err){console.log(err.message)}
}
const getcart=async(req,res)=>{
const {userid}=req.body
const userdata=await user.findById(userid)
let cartData=userdata.cartData
cartData[itemid][size]=quantity
res.json({success:true, cartData: userdata.cartData, username: userdata.username})
}
const updatecart=async(req,res)=>{
const {userid,itemid,size,quantity}=req.body
const userdata=await user.findById(userid)
let cartData=userdata.cartData
await user.findByIdAndUpdate(userid,{cartData})
res.json({message:"updated cart"})
}

//for orders
const placeorder=async(req,res)=>{
const {userid,items,amount,address,status,paymentmethod,payment,date}=req.body
const orders=await order.create({
   userid,
   items,
   amount,
   address,
   paymentmethod:'cash',
   payment:false,
   date:Date.now() 
})
await user.findByIdAndUpdate(userid,{cartData:{}})
res.status(200).json({success:true,message:"order placed"})
}

const stripe=async(req,res)=>{
    try{
    const {userid,items,amount,address}=req.body
    const {origin}=req.headers
    const orderData=await order.create({
        userid,
        items,
        amount,
        address,
        payment:false,
        paymentmethod:"stripe",
        date:Date.now()
    })
const line_items=items.map((item)=>({
    price_data: {
        currency:currency,
product_data:{
    name:item.name
},
 unit_amount:item.price*100
    },
   quantity:item.quantity
}))

line_items.push({
      price_data: {
        currency:currency,
product_data:{
    name:"delivery charges"
},
 unit_amount:deliveryCharges*100
    },
   quantity:1}
)
const session=await stp.checkout.sessions.create({
    success_url:`${origin}/verify?success=true&orderid=${orderData._id}`,
    cancel_url:`${origin}/verify?success=false&orderid=${orderData._id}`,
    line_items,
    mode:'payment'

})
res.json({success:true,session_url:session.url})
}catch(err){
    console.log(err.message)
}
}

const rozorpay=async(req,res)=>{

}

const userorder=async(req,res)=>{
const {userid}=req.body
const orders=await order.find({userid})
res.json({success:true,orders})


}

const listorders=async(req,res)=>{
const orders=await order.find({})
res.json({success:true,orders})
}

const orderstatus=async(req,res)=>{
const {orderid,status}=req.body
const orders=await order.findByIdAndUpdate(orderid,{status})
res.json({success:true,message:"status updated"})
}





module.exports={userorder,stripe,rozorpay,listorders,orderstatus,placeorder,loginuser,registeruser,addtocart,adminuser,addproduct,removeproduct,findproduct,listproduct,getcart,updatecart}

