const mongoDB = require('../db/config/mongoDB');
const productsModel = require(`../db/models/productoModels`);;

const CrudMongoDB = require(`../services/productoServices`);

class ProductosDAOMongoDB extends CrudMongoDB {
    constructor() {
        super(mongoDB, productsModel);
    };
};

module.exports = ProductosDAOMongoDB;