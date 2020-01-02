const express = require('express');
const route = express.Router();
const productController = require('../controllers/productController')


route.get('/',productController.allProducts);

route.post('/',productController.addProduct);

module.exports = route;