'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      whenDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'when_date',
      },
      duration: {
        allowNull: false,
        type: Sequelize.TIME
      }
      
    }, {timestamps: false});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  }
};