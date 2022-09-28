const request = require(`supertest`)(`http://localhost:8080/api/test`);
const expect = require(`chai`).expect;

//Test BDD:
describe(`Test Api`, () => {
    //describe(`GET / `, () => {
//
    //    it(`Debería retornar status 200`, async () => {
    //        const response = await request.get(`/`);
//
    //        expect(response.status).to.eql(200);
    //    });
//
    //    it(`Debería retornar un arreglo`, async () => {
    //        const response = await request.get(`/`);
//
    //        expect(typeof response._body).to.eql(`object`);
    //    });
    //});

    describe(`POST /`, () => {
        it(`Debería agregar un producto`, async () => {
            const response = await request.post(`/`).send({
                nombre: `producto desde supertest api`,
                precio: 1234,
                thumbnail: `URL desde supertest api`,
                descripcion: `descripción desde supertest api`,
                codigo: 123,
                stock: 10,
            });

            expect(response.status).to.eql(201);
        });
    });

    //describe(`DELETE / `, () => {
//
    //    it(`Debería retornar status 200`, async () => {
    //        //Colocar id conocido de la DB
    //        const response = await request.delete(`/630649420257d0ab34ff18c7`);
//
    //        expect(response.status).to.eql(200);
    //    });
    //});


});