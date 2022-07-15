const mongoDB = require(`../../config/mongoDB`);

const carritoModel = require(`../../models/carrito`);
const productsModel = require(`../../models/producto`);

const CrudMongoDB = require(`../../lib/MongoDB/carritoCrud`);

class CarritoDAOMongoDB extends CrudMongoDB {
    constructor() {
        super(mongoDB, carritoModel, productsModel);
    };
};

module.exports = CarritoDAOMongoDB;