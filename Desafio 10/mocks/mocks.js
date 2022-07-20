const { faker } = require('@faker-js/faker');
faker.locale = "es";

const mockProductos = (cant) => {

    const randomProductos = [];

    for (let i = 0; i < cant; i++) {
        randomProductos.push({
            id: faker.datatype.number({ 'min': 1, 'max': 50 }),
            nombre: faker.commerce.productName(),
            descripcion: faker.commerce.productDescription(),
            codigo: faker.random.alphaNumeric(7),
            foto: faker.image.imageUrl(),
            precio: faker.commerce.price,
            stock: faker.datatype.number({ 'min': 0, 'max': 100 })
        })
    }
    return randomProductos;
};

module.exports = { mockProductos }