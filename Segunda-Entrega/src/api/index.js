const ProductosMongoDB = require(`../api/Producto/productosMongo`);
const CarritoMongoDB = require(`../api/Carrito/CarritoMongo`);

const ProductosFiles = require(`../api/Producto/ProductosFiles`);
const CarritoFiles = require(`../api/Carrito/CarritoFiles`);

const getStorage = () => {
    const storage = `MongoDB`;
    switch (storage) {
        case `MongoDB`:
            return {
                productos: new ProductosMongoDB(),
                carrito: new CarritoMongoDB()
            }
            break
        case `archivo`:
            return {
                productos: new ProductosFiles(),
                carrito: new CarritoFiles()
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