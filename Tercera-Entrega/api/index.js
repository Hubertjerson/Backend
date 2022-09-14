const ProductosMongoDB = require('./productosApi');
const CarritoMongoDB = require('./carritoApi');

const getStorage = () => {
    const storage = `firebase`;
    switch (storage) {
        case `MongoDB`:
            return {
                productos: new ProductosMongoDB(),
                carrito: new CarritoMongoDB()
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