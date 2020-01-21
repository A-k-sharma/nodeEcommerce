const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userEmail:{
        type: String,
        required: true
    },
    products:{
        type: Array,
        default: []
    },
    total:{
        type: Number,
        required: true
    },
    
})

module.exports = mongoose.model('Cart',cartSchema);
