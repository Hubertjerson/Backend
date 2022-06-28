const { mySQLContenedor } = require('../../api/Contenedor');

selectAllProducts = async () => {
    try {
        // SELECT * FROM products
        let allProducts = await mySQLContenedor.getKnex()
            .select(`*`)
            .from(`products`);

        return allProducts;
    } catch (err) {
        console.log(`Error ${err}`);
    }
};

module.exports = {
    selectAllProducts
}