const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userEmail:{
        type: String,
        required: true
    },
    products:[
        new Schema({
            productId:{type:String, required: true},
            productName: {type: String, required: true},
            quantity: {type: Number, required: true}
        })
    ],
    total:{
        type: Number,
        required: true
    },
    
})

module.exports = mongoose.model('Cart',cartSchema);
