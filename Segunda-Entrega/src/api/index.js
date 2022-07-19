const ProductosMongoDB = require(`../api/Producto/productosMongo`);
const CarritoMongoDB = require(`../api/Carrito/CarritoMongo`);

const ProductosFirebase = require('../api/Producto/ProductoFirebase');
const CarritoFirebase = require(`../api/Carrito/CarritoFirebase`);

const getStorage = () => {
    const storage = `firebase`;
    switch (storage) {
        case `MongoDB`:
            return {
                productos: new ProductosMongoDB(),
                carrito: new CarritoMongoDB()
            }
            break
        case `firebase`:
            return {
                productos: new ProductosFirebase(),
                carrito: new CarritoFirebase()
            }
            break
        default:
            return {
                productos: new ProductosMongoDB(),
                carrito: new CarritoMongoDB()
            }
            break
    }
}

module.exports = getStorage;