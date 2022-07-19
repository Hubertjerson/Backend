const { queryCarritos, queryProductos, FieldValue } = require(`../../config/firebase`);
const CrudFirebase = require(`../../lib/Firebase/carritoFirebase`);

class CarritoDAOFirebase extends CrudFirebase {
    constructor() {
        super(queryCarritos, queryProductos, FieldValue);
    };
};

module.exports = CarritoDAOFirebase;