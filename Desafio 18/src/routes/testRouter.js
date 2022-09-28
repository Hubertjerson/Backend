const { Router } = require("express");

const {
    getAllProductsTest,
    addProductTest,
    deleteProductByIdTest,
    updateProductByIdTest
} = require("../controller/testController");

const testRouter = Router();

//Test
testRouter.get(`/`, getAllProductsTest);
testRouter.post(`/`, addProductTest);
testRouter.put(`/:id`, updateProductByIdTest);
testRouter.delete(`/:id`, deleteProductByIdTest);


module.exports = testRouter;