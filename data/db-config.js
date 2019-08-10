// get knex
const knex = require('knex');
// get a configuration object out of knexfile.js
const config = require('../knexfile');

// create a database object/method using knex, passing in our
// "development" config object (from the knexfile.js file)
const db = knex(config.development);

// export the database object/method ... otherwise, why even... ?
module.exports = db;