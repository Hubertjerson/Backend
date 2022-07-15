const fs = require('fs');
const archivo = require (`../../data/productos.txt`)
const CrudArchivo = require(`../../lib/FilesTXT/productosCrud`);

class ProductosDAOArchivo extends CrudArchivo {
    constructor() {
        super(archivo, fs);
    };
};

module.exports = ProductosDAOArchivo;