const express = require('express');

const router = new express.Router();

const productController = require('../controllers/product.controller');

router.post('/', productController.createProduct);
router.get('/', productController.listProducts);
router.patch('/:id', productController.updateProduct);
router.delete('/product-variety/:id', productController.removeProductVariation);

module.exports = router;
