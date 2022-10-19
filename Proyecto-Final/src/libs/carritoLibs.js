const mongoDB = require('../db/config/mongoDB');

const carritoModel = require('../db/models/carritoModels');
const productsModel = require(`../db/models/productoModels`);

const CrudMongoDB = require('../services/carritoServices');

class CarritoDAOMongoDB extends CrudMongoDB {
    constructor() {
        super(mongoDB, carritoModel, productsModel);
    };
};

module.exports = CarritoDAOMongoDB;