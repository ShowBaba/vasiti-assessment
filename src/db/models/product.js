const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.ProductVarieties, {
        as: 'product_varieties',
        foreignKey: 'productId'
      });
    }
  }
  Product.init({
    product_name: DataTypes.STRING,
    product_description: DataTypes.STRING,
    date_uploaded: DataTypes.DATE,
    date_edited: DataTypes.DATE
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
