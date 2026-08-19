const express=require('express')
const dotenv=require('dotenv').config()
const cors=require('cors')
const router=require('./routes')
const  cloudinary  = require('./config/cloudinary')
const  connection  = require('./config/mongo')

const app=express()
app.use(cors())
app.use(express.json())
const port=process.env.PORT ||4000

app.use('/api/',router)


app.listen(port,()=>{
    console.log('port is running',port);
    
})