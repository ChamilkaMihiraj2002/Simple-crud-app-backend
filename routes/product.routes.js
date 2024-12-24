const express = require('express')
const router = express.Router();
const ProductController = require('../controller/product.controller.js');

router.get('/', ProductController.getProducts); // get all products
router.get('/:id', ProductController.getProduct); // get a single product
router.post('/', ProductController.addProduct); // add a new product
router.put('/:id', ProductController.updateProduct); // update a product
router.delete('/:id', ProductController.deleteProduct); // delete a product

module.exports = router;