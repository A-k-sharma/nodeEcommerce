const express = require('express');
const route = express.Router();
const cartController = require('../controllers/cartController');


// route.get('/',cartController.getCartDetails);

route.post('/',cartController.createCart);

route.put('/',cartController.addProducts);

route.delete('/',cartController.deleteProduct);

module.exports = route;