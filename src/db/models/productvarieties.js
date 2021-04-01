const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductVarieties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductVarieties.belongsTo(models.Product, {
        as: 'product_varieties',
        foreignKey: 'productId'
      });
    }
  }
  ProductVarieties.init({
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    quantity: DataTypes.STRING,
    images: DataTypes.ARRAY(DataTypes.STRING),
    price: DataTypes.STRING,
    productId: DataTypes.INTEGER,
  }, {
    timestamps: false,
    sequelize,
    modelName: 'ProductVarieties',
  });
  return ProductVarieties;
};
