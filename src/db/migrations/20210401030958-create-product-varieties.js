module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductVarieties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        type: Sequelize.INTEGER,
        referances: {
          model: 'Products',
          key: 'id',
        },
      },
      size: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.STRING,
      },
      images: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
          return this.getDataValue('images').split(';');
        },
        set(val) {
          this.setDataValue('images', val.join(';'));
        },
      },
      price: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductVarieties');
  },
};
