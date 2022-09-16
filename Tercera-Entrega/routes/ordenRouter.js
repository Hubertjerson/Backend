const express = require('express')
const ordenRouter = express.Router();
const {
    checkout
} = require('../controller/ordenesController')

ordenRouter.get('/:idCar', checkout);

module.exports = ordenRouter