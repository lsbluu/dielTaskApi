'use strict';
const Task = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    whenDate: {
      type: DataTypes.DATE,
      field: 'when_date'
    },
    duration: DataTypes.TIME,
  }, {timestamps: false});

  return Task;
}

module.exports = Task;