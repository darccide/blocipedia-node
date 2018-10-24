'use strict';

const faker = require("faker");

let users = [];
for (let i = 1; i < 15; i++) {
  users.push({
    username: faker.internet.userName(),
    email: faker.internet.exampleEmail(),
    password: faker.internet.password(),
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Wikis", null, {});
  }
};
