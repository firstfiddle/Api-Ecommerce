const productModel = require('../models/Product')
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'durbsc1w3',
    api_key: '212474534226764',
    api_secret: 'mqEOx-aQoMKES4-wRCdP9KHTl8M',
   
});
class ProductController{

    static getAllProducts = async(req,res) => {
        try{
            const allProducts = await productModel.find()
            res.status(200).json({
                success: true,
                allProducts
            })
        }catch(err){
            res.send(err)
        }
    }

    static getProductDetail = async(req,res) => {
        try{
            const productDetail = await productModel.findById(req.params.id)
            res.status(200).json({
                success: true,
                productDetail
            })
        }catch(err){
            res.send(err)
        }
    }

    static getAdminProduct = async(req,res) => {
        try{
            const data = await productModel.find()
            res.status(200).json({
                success: true,
                data
            })
        }catch(err){
            res.send(err)
        }
    }

    static deleteProduct = async(req,res) => {
        try{
            const data = await productModel.findByIdAndDelete(req.params.id)
            res
            .status(200)
            .send({ status: "success", message: "Product deleted successfully 😃🍻"});
        }catch(err){
            res.send(err)
        }
    }
    static createProduct = async(req,res) => {
        try{
             console.log(req.body)
            
            const file = req.files.image
            console.log(file)
            const myCloud = await cloudinary.uploader.upload(file.tempFilePath,{
                folder : 'userImage'
            })
            //  console.log(myCloud)
            const {name, description, price, stock, rating, category} = req.body
            const data = new productModel({
                name: name,
                description: description,
                price: price,
                stock: stock,
                rating: rating,
                category: category,
                image: {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                },
            })
            const insertedData = await data.save()
            // console.log(insertedData);
            res
            .status(201)
            .json({ status: "success", message: "Product added Successfully 😃🍻",insertedData});
        }catch(err){
            res.status(400).json({ message: err.message });
        }
    }
    static updateProduct = async(req,res) => {
        try{
            
        }catch(err){
            res.send(err)
        }
    }
}



module.exports = ProductController