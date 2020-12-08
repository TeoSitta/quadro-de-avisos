const dotenv = require('dotenv')
dotenv.config()

const knex = require('knex')({
    client: 'myslq2',
    Connection:{
        host: process.env.BD_HOST,
        user: process.env.BD_USER,
        password: process.env.BD_PASS,
        database: process.env.BD_DATABASE
    }
})

module.exports = knex