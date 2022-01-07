const mysql = require('mysql2')

const config = {
    host: 'localhost',
    user: '**********',
    password: '**********',
    database: 'sklad',
}

const pool = mysql.createPool(config)
///const pool = mysql.createPool(config).promise()

module.exports = pool