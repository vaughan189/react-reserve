/* eslint arrow-body-style: 0 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('productAttribute', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      attributeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
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
      return queryInterface.addConstraint('productAttribute', ['productId'], {
        type: 'foreign key',
        name: 'fk_productAttributeProductId',
        references: {
          table: 'product',
          field: 'id',
        },
      }), queryInterface.addConstraint('productAttribute', ['attributeId'], {
        type: 'foreign key',
        name: 'fk_productAttributeAttributeId',
        references: {
          table: 'attribute',
          field: 'id',
        },
      })
    });
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0'),
      queryInterface.sequelize.query('ALTER TABLE roles DROP FOREIGN KEY fk_productAttributeProductId'),
      queryInterface.sequelize.query('ALTER TABLE roles DROP FOREIGN KEY fk_productAttributeAttributeId'),
      queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1'),
      queryInterface.dropTable('productAttribute'),
    ]);
  },
};
