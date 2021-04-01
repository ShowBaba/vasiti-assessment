const productService = require('../services/product.service');

module.exports = {
  createProduct: async (req, res, next) => {
    try {
      const createdProduct = await productService.addProduct(req.body);
      if (createdProduct.error) {
        return res.status(403).json({
          success: false,
          message: 'Invalid input(s) in request body',
        });
      }
      res.status(201).json({
        success: true,
        message: 'Product created!',
        data: createdProduct,
      });
    } catch (error) {
      next(error);
    }
  },

  updateProduct: async (req, res, next) => {
    const { id } = req.params;
    try {
      await productService.updateSingleProduct(id, req.body);
      res.status(200).json({
        success: true,
        message: 'Product updated!',
      });
    } catch (error) {
      next(error);
    }
  },
  removeProductVariation: async (req, res, next) => {
    const { id } = req.params;
    try {
      const product = await productService.removeVarieties(id);
      res.status(201).json({
        success: true,
        message: 'Variation removed!',
        data: product,
      });
    } catch (error) {
      next(error);
    }
  },
  listProducts: async (req, res, next) => {
    try {
      const products = await productService.getAllProduts();
      res.status(200).json({
        success: true,
        message: 'Get all products',
        products,
      });
    } catch (error) {
      next(error);
    }
  },
};
