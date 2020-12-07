const faker = require('faker');
const times = require('lodash.times')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const users = times(10, () => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }));
    return queryInterface.bulkInsert('user', users);
  },

  down: (queryInterface, Sequelize) => {}
};
