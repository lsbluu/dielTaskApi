'use strict';

module.exports = {
  up: async  (queryInterface, Sequelize) =>  queryInterface.bulkInsert('Tasks', [
    {
      title: 'doctor',
      description: 'hearts',
      when_date: '2022/12/09 10:30',
      duration: 1
    },
    {
      title: 'doctor',
      description: 'feet',
      when_date: '2022/05/11 11:35',
      duration: 1
    },
    {
      title: 'doctor',
      description: 'head',
      when_date: '2022/06/10 09:20',
      duration: 1
    },
    {
      title: 'doctor',
      description: 'eyes',
      when_date: '2022/07/13 08:30',
      duration: 1
    },
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Tasks', null, {})
};
