const ProductosLibs= require('../libs/productoLibs');
const assert = require(`assert`);

describe(`Test sobre DAO Productos MondoDB`, () => {
    //Se parte del valor conocido que la DB tiene productos cargados:
    it(`Debería obtener todos los productos`, async () => {
        const productoDAO = new ProductosLibs();
        const allProducts = await productoDAO.getAll();
        assert(allProducts.length > 0);
    });
    it(`Debería crear un producto`, async () => {
        const productoDAO = new ProductosLibs();
        const allProductsBefore = await productoDAO.getAll();
        const newProducto = {
            nombre: `producto desde test`,
            precio: 1234,
            url: `URL desde test`,
            descripcion: `descripción desde test`,
            timestamp: new Date().toDateString(),
            thumbnail: `URL desde test`,
            codigo: 33333,
            stock: 3,
            cantidad: 0
        }
        await productoDAO.save(newProducto);
        const allProductsAfter = await productoDAO.getAll();
        assert(allProductsAfter.length > allProductsBefore.length);
    });
    it(`Debería modificar un producto`, async () => {
        const productoDAO = new ProductosLibs();
        //Colocar un id conocido de la DB
        const id = `62d1a09d253500d44bcfb496`;
        const productBefore = await productoDAO.getById(id);
        console.log(`productBefore`);
        console.log(productBefore);
        const productUpdate = await productoDAO.updateById(
            id,
            `modificado desde Test1`,
            9,
            `URL modificada desde test`,
            `Descripción modificada desde test`,
            new Date().toDateString(),
            9999,
            1
        );
        console.log(`productUpdate`);
        console.log(productUpdate);
        assert(productBefore.nombre != productUpdate.nombre);
    });
    //Para ejecutar esta función, es mejor comentar el de agregar producto
    it(`Debería borrar un producto`, async () => {
        const productoDAO = new ProductosLibs();
        const allProductsBefore = await productoDAO.getAll();
        //Colocar un id conocido de la DB
        await productoDAO.deleteById(`62d1a09d253500d44bcfb496`);
        const allProductsAfter = await productoDAO.getAll();
        assert(allProductsBefore.length > allProductsAfter.length);
    });
});
