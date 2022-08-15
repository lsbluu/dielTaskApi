const { Task } = require('../database/models');
const { Op, Sequelize } = require("sequelize");



const findAll = async () => {
  const rows = await Task.findAll();
  return rows;
};

const create = async (title, description, whenDate, duration) => {  
  const result = await Task.create({title, description, whenDate, duration});
  return result;
};


const findByTitle = async (title) => {
  const result = await Task.findAll({
    where: {
      title: {
        [Op.like]: `%${title}%`
      }
    }
  })
  return result;
}

const findByDay = async (whenDate) => {

  
  const result = await Task.findAll({
    where: 
    Sequelize.where(Sequelize.fn('date_part', 'DAY', 
    Sequelize.col('when_date')), whenDate ),    

  })

  return result;
}

const findByMonth = async (whenDate) => {

  
  const result = await Task.findAll({
    where: 
     Sequelize.where(Sequelize.fn('date_part', 'MONTH', 
     Sequelize.col('when_date')), whenDate ),    
  })

  return result;
}

const update = async (id, title, description, whenDate, duration) => {
  await Task.update({title, description, whenDate, duration}, {
    where: {id}
  });
}

const remove = async (id) => {
  await Task.destroy({
    where: {id}
  });
}

module.exports = {
  findAll,
  create,
  update,
  remove,
  findByTitle,
  findByDay,
  findByMonth,
};

