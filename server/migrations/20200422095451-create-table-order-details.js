/* eslint arrow-body-style: 0 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orderDetails', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      attributes: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      unitCost: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    }).then(() => {
      return queryInterface.addConstraint('orderDetails', ['orderId'], {
        type: 'foreign key',
        name: 'fk_orderDetailsOrderId',
        references: {
          table: 'orders',
          field: 'id',
        },
      }), queryInterface.addConstraint('orderDetails', ['productId'], {
        type: 'foreign key',
        name: 'fk_orderDetailsProductId',
        references: {
          table: 'product',
          field: 'id',
        },
      })
    });
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0'),
      queryInterface.sequelize.query('ALTER TABLE roles DROP FOREIGN KEY fk_orderDetailsOrderId'),
      queryInterface.sequelize.query('ALTER TABLE roles DROP FOREIGN KEY fk_orderDetailsProductId'),
      queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1'),
      queryInterface.dropTable('orderDetails'),
    ]);
  },
};
