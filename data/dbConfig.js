const knex = require('knex');
const config = require('../knexfile.js');
const dbEnv = process.env.DB_ENV || 'development';

// the value of dbEnv will be either 'development' or 'testing'
// we pass it within brackets to select the corresponding configuration
// from knexfile.js
module.exports = knex(config[dbEnv]);