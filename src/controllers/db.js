const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Root',
  database: 'products_database',
  connectionLimit: 10
});

module.exports = pool;
