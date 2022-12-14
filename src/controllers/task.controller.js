const task = require ('../services/task.service');

const findAll = async (_req, res, next) => {
  try {
    const rows = await task.findAll();
  res.status(200).json(rows);
  } catch (error) {
    next(error)
  }
}

const findByDay = async (req, res, next) => {
  try {
    const { day } = req.query;
  const result = await task.findByDay(day);
  res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const findByMonth = async (req, res, next) => {
  try {
    const { month } = req.query;
  const result = await task.findByMonth(month);
  res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const findByTitle = async (req, res, next) => {
  try {
    const { title } = req.query;
  const result = await task.findByTitle(title);
  res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const create = async (req, res, next) => {
  try {
    const { title, description, whenDate, duration} = req.body;
  const result = await task.create( title, description, whenDate, duration );
  res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

const update = async (req, res,next) => {
  try {
    const { id } = req.params;
  const { title, description, whenDate, duration} = req.body;
await task.update(id,title, description, whenDate, duration );
res.status(200).json({message: 'Updated!'});
  } catch (error) {
    next(error)
  }
}

const remove = async (req, res,next) => {
  try {
    const { id } = req.params;
  await task.remove(id);
  res.status(204).json({message: 'Removed!'});
  } catch (error) {
    next(error)
  }
}



module.exports = {
  findAll,
  create,
  update,
  remove,
  findByTitle,
  findByDay,
  findByMonth,
}