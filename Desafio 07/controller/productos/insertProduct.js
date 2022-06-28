const { mySQLContenedor } = require('../../api/Contenedor');

insertProduct = async (product) => {
    try {
        let inserProduct = await mySQLContenedor.getKnex()
            .into(`products`)
            .insert(product);

        const allProducts = await mySQLContenedor.knex()
            .select(`*`)
            .from(`products`);
        return allProducts[allProducts.length - 1];

    } catch (err) {
        console.log(`Error ${err}`);
    }
};


module.exports = {
    insertProduct
}