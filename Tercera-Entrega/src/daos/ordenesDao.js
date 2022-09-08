const mongoDB = require('../config/mongoDB');

const productsModel = require('../models/producto');
const userModel = require('../models/usuario');
const ordenModel = require('../models/ordenes');

const CrudMongoDB = require('../api/ordenesApi');

class OrdenesDAOMongoDB extends CrudMongoDB {
    constructor() {
        super(mongoDB, productsModel, userModel, ordenModel);
    };
};

module.exports = OrdenesDAOMongoDB;