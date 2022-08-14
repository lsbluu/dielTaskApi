require('dotenv').config();
const express = require('express');
const cors = require('cors');
const task = require('./controllers/task.controller');
const middlewares = require('./middlewares/');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', task.findAll);
app.post('/', middlewares.validate, task.create);
app.put('/:id', task.update);
app.delete('/:id', task.remove);

app.get('/search/title', task.findByTitle);
app.get('/search/day', task.findByDay);
app.get('/search/month', task.findByMonth);


app.use(middlewares.erro);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Rodando na ${PORT}`);
});


