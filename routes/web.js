const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()
const{ChangeUserAuth} = require('../middleware/auth')
const ProductController = require('../controllers/ProductController')
const CategoryController = require('../controllers/CategoryController')
const SliderController =require('../controllers/SliderController')


//usercontroller
router.get('/getalluser', UserController.getalluser)
router.get('/admin/getUser/:id', UserController.getSingleUser)
router.post('/userinsert', UserController.userinsert)
router.post('/loginUser', UserController.loginUser)
router.get('/logout', UserController.logout)
router.post('/updatePassword', ChangeUserAuth, UserController.updatePassword)
router.post('/updateProfile', ChangeUserAuth, UserController.updateProfile)
router.get('/me', ChangeUserAuth, UserController.getUserDetail)
router.get('/admin/deleteUser/:id', UserController.deleteUser)


 //PRODUCTCONTROLLER
router.get('/products', ProductController.getAllProducts)
router.get('/getProductDetail/:id', ProductController.getProductDetail)
router.get('/product/getAdminProduct', ProductController.getAdminProduct)
router.get('/product/deleteProduct/:id', ProductController.deleteProduct)
router.post('/productcreate', ProductController.createProduct)

//CATEGORY CONTROLLER
router.get('/getAllCategories', CategoryController.view);
router.post('/insertCategory', CategoryController.insert);
router.get('/getCategory/:id', CategoryController.display);
router.put('/updateCategory/:id', CategoryController.update);
router.delete('/deleteCategory/:id', CategoryController.delete);

// slider controller
router.get('/slider', SliderController.display)
router.post('/insert', SliderController.insert)
router.get('/viewSlider/:id' , SliderController.view);
router.post('/updateSlider/:id' , SliderController.update);
router.delete('/deleteSlider/:id' , SliderController.delete);


module.exports = router