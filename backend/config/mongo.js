const mongoose=require('mongoose')
const connection=async()=>{
const cont=await mongoose.connect(`${process.env.DB_CONNECTION}/e-commerce`)
    console.log("conect");



}
 connection()
 module.exports=connection