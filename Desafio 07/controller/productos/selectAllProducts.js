const { mySQLContenedor } = require('../../api/Contenedor');

selectAllProducts = async () => {
    try {
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