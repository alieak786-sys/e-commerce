const express=require('express')
const controllers=require('./controllers/controller')
const upload=require('./controllers/multer')
const authentication=require('./controllers/middleware')
const router=express.Router()

router.post('/register',controllers.registeruser)
router.post('/login',controllers.loginuser)
router.post('/admin',controllers.adminuser)
router.post('/addproduct',authentication.adminauth,
upload.fields([{name:'img1',maxCount:1},{name:'img2',maxCount:2},{name:'img3',maxCount:3},{name:'img4',maxCount:4},]),
controllers.addproduct)
router.post('/singleproduct/:id',controllers.findproduct)
router.get('/listproduct',controllers.listproduct)
router.post('/removeproduct/:id',controllers.removeproduct)

router.post('/addtocart',authentication.userauth,controllers.addtocart)
router.get('/getcart',authentication.userauth,controllers.getcart)
router.post('/updatecart',authentication.userauth,controllers.updatecart)
//for orders
router.post('/userorder',authentication.userauth,controllers.userorder)
router.post('/stripe',authentication.userauth,controllers.stripe)
router.post('/rozorpay',authentication.userauth,controllers.rozorpay)
router.post('/listorders',authentication.adminauth,controllers.listorders)
router.post('/orderstatus',authentication.adminauth,controllers.orderstatus)
router.post('/placeorder',authentication.userauth,controllers.placeorder)
//userorder,stripe,rozorpay,listorders,orderstatus,placeorder

module.exports=router