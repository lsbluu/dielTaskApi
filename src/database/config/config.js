require('dotenv').config();
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOSTNAME,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: '12345678',
    database: "dielTasks",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: '12345678',
    database: "dielTasks",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
