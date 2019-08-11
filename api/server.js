const express = require('express');
const helmet = require('helmet');
const vehiclesRouter = require('../vehicles/vehicles-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/vehicles', vehiclesRouter);

server.get('/', (req,res)=>{
    res.send(`<h1>Visit the correct endpoint to make access the vehicle data.</h1>`);
});

module.exports = server;