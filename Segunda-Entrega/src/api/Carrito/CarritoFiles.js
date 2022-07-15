const fs = require('fs');
const archivo = require(`../../lib/carrito.txt`)
const CrudArchivo = require(`../../lib/FilesTXT/carritoCrud`);

class CarritoDAOArchivo extends CrudArchivo {
    constructor() {
        super(archivo, fs);
    };
};

module.exports = CarritoDAOArchivo;