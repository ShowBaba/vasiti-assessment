const models = require('../db/models');

const { Product, ProductVarieties } = models;

module.exports = {
  addProduct: async (data) => {
    // const validation = productSchema.validate(data);
    // if (validation.error) return { error: validation.error };
    const productData = { ...data };
    delete productData.product_varieties;
    const createdProduct = await Product.create(productData);
    // eslint-disable-next-line camelcase
    const { product_varieties } = data;
    product_varieties.map((variety) => {
      variety.productId = createdProduct.id;
      return variety;
    });
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < product_varieties.length; i++) {
      const variety = product_varieties[i];
      // eslint-disable-next-line no-await-in-loop
      await ProductVarieties.create(variety);
    }
    return data;
  },

  updateSingleProduct: async (id, data) => {
    const productData = { ...data };
    delete productData.product_varieties;
    await Product.update(productData, {
      where: {
        id,
      },
    });
    await ProductVarieties.destroy({
      where: {
        productId: id,
      },
    });
    // eslint-disable-next-line camelcase
    const { product_varieties } = data;
    product_varieties.map((variety) => {
      variety.productId = id;
      return variety;
    });
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < product_varieties.length; i++) {
      const variety = product_varieties[i];
      // eslint-disable-next-line no-await-in-loop
      await ProductVarieties.create(variety);
    }
    return data;
  },

  removeVarieties: async (id) => {
    const response = await ProductVarieties.destroy({
      where: {
        productId: id,
      },
    });
    return response;
  },
  getAllProduts: async () => {
    const options = {
      include: {
        model: ProductVarieties,
        as: 'product_varieties'
      }
    };
    const products = await Product.findAll(options);
    return products;
  },
};
