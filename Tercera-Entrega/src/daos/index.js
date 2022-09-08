const ProductosDAOMongoDB = require('../daos/productoDao')
const CarritoDAOMongoDB = require('../daos/carritoDao');
const OrdenesDAOMongoDB = require('../daos/ordenesDao')

const getStorage = () => {
    //const storage = process.env.STORAGE;
    const storage = `MongoDb`; //Prueba: forzar variable para trabajar con la DB deseada.

    switch (storage) {

        case `MongoDB`:
            return {
                productos: new ProductosDAOMongoDB(),
                carrito: new CarritoDAOMongoDB(),
                ordenes: new OrdenesDAOMongoDB()
            }
            break

        default:
            return {
                productos: new ProductosDAOMongoDB(),
                carrito: new CarritoDAOMongoDB(),
                ordenes: new OrdenesDAOMongoDB()
            }
            break
    }
}

module.exports = getStorage;