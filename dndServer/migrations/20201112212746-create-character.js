'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      class: {
        type: Sequelize.STRING
      },
      abil: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.STRING
      },
      exp: {
        type: Sequelize.INTEGER
      },
      hp: {
        type: Sequelize.INTEGER
      },
      mp: {
        type: Sequelize.INTEGER
      },
      str: {
        type: Sequelize.INTEGER
      },
      agi: {
        type: Sequelize.INTEGER
      },
      def: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Characters');
  }
};