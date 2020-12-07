/* eslint arrow-body-style: 0 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('attributeValue', {
      id: {
        type: queryInterface.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      attributeId: {
        type: queryInterface.INTEGER,
        allowNull: false
      },
      value: {
        type: queryInterface.STRING,
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
      return queryInterface.addConstraint('productCategory', ['attributeId'], {
        type: 'foreign key',
        name: 'fk_followersAttributeId',
        references: {
          table: 'attribute',
          field: 'id',
        },
      });
    });
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0'),
      queryInterface.sequelize.query('ALTER TABLE roles DROP FOREIGN KEY fk_followersAttributeId'),
      queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1'),
      queryInterface.dropTable('attributeValue'),
    ]);
  },
};
