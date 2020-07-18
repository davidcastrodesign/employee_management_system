const util = require('util');
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'secret',
  database: 'emplyeesdb',
});

connection.connect();

module.exports = connection;
