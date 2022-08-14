'use strict';

module.exports = {
  up: async  (queryInterface, Sequelize) =>  queryInterface.bulkInsert('Tasks', [
    {
      title: 'doctor',
      description: 'hearts',
      when_date: '2022/12/12',
      duration: '10:00:00'
    },
    {
      title: 'doctor',
      description: 'feet',
      when_date: '2022/05/12',
      duration: '09:00:00'
    },
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Tasks', null, {})
};
