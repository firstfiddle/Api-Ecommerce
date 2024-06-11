const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true,
        default: 1
    },
    rating: {
        type: String,
        default: 0,
        required: true
    },
   
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            requiredd: true,
        },
      },                          
    category: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });


var productModel = mongoose.model('products', productSchema);
module.exports = productModel;