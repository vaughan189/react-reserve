/* eslint arrow-body-style: 0 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('review', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      review: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      rating: {
        type: Sequelize.INTEGER,
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
      return queryInterface.addConstraint('review', ['productId'], {
        type: 'foreign key',
        name: 'fk_reviewProductId',
        references: {
          table: 'product',
          field: 'id',
        },
      }), queryInterface.addConstraint('review', ['customerId'], {
        type: 'foreign key',
        name: 'fk_reviewCustomerId',
        references: {
          table: 'customer',
          field: 'id',
        },
      })
    });
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0'),
      queryInterface.sequelize.query('ALTER TABLE roles DROP FOREIGN KEY fk_reviewProductId'),
      queryInterface.sequelize.query('ALTER TABLE roles DROP FOREIGN KEY fk_reviewCustomerId'),
      queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1'),
      queryInterface.dropTable('review'),
    ]);
  },
};
