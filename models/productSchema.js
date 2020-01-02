const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: new Date()
    },
    quantity:{
        type: Number,
        required: true,
        default: 0
    },
    price:{
        type: Number,
        required: true
    },
    expireMonths:{
        type: Number,
        required: true,
        default: 6
    },
    productId:{
        type: String,
        required: true
    },
    expireDate:{
        type:Date,
        required: true
    }
})

module.exports = mongoose.model('Product',productSchema);