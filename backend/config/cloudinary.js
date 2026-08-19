const cloudinary=require('cloudinary').v2
const cloudinaryconfig=async()=>{
    try{
cloudinary.config(
    {
        cloud_name:process.env.CLAUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLAUDINARY_SECRET_KEY

    }
)}catch(err){
        console.log(err);
        
    }
}
cloudinaryconfig()
module.exports=cloudinaryconfig