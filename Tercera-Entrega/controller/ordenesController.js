const verifyToken = require("../middlewares/token");
const Usuario = require("../models/usuario");
const carritoModel = require('../models/carrito');

const checkout = async (req, res) => {
    try {
        const idCart = req.params.id

        const cart = await carritoModel.findOne(idCart)

        const productos = `${JSON.stringify(cart.products)}`

        console.log(productos)
        return res.json(productos);

    } catch (err) {
        res.status(404).json({ err: `Error al intentar comprar ${err}` });
    }
}
module.exports = {
    checkout
}