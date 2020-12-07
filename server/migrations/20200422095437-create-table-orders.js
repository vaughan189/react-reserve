/* eslint arrow-body-style: 0 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      shippingId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      totalAmount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: '0.00'
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      comments: {
        type: Sequelize.STRING,
        allowNull: true
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
      return queryInterface.addConstraint('orders', ['customerId'], {
        type: 'foreign key',
        name: 'fk_ordersCustomerId',
        references: {
          table: 'customer',
          field: 'id',
        },
      }), queryInterface.addConstraint('orders', ['shippingId'], {
        type: 'foreign key',
        name: 'fk_ordersShippingId',
        references: {
          table: 'shipping',
          field: 'id',
        },
      })
    });
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0'),
      queryInterface.sequelize.query('ALTER TABLE roles DROP FOREIGN KEY fk_ordersCustomerId'),
      queryInterface.sequelize.query('ALTER TABLE roles DROP FOREIGN KEY fk_ordersShippingId'),
      queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1'),
      queryInterface.dropTable('orders'),
    ]);
  },
};
