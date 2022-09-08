const mongoDB = require('../config/mongoDB');

const carritoModel = require('../models/carrito');
const productsModel = require('../models/producto');
const userModel = require('../models/usuario');

const CrudMongoDB = require('../api/carritoApi');

class CarritoDAOMongoDB extends CrudMongoDB {
    constructor() {
        super(mongoDB, carritoModel, productsModel, userModel);
    };
};

module.exports = CarritoDAOMongoDB;

/*
    NOTA:
        -Se deja la lógica en el programa, en este entregable se decidió generar el carrito en el usuario.
        -Se agregaron las ordenes
*/