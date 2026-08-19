const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:Array,required:true},
    catagory:{type:String,required:true},
    subcatagory:{type:String,required:true},
    sizes:{type:Array,required:true},
    bestsellers:{type:Boolean,required:true},
    Date:{type:Number,required:true},

})
module.exports=mongoose.model('product',productSchema)