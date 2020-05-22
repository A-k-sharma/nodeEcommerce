const express = require('express');
const route = express.Router();
const productController = require('../controllers/productController');
const tokenVerification = require('../middlewares/tokenVerification');



route.get('/',tokenVerification,productController.allProducts);

route.post('/',tokenVerification,productController.addProduct);

module.exports = route;