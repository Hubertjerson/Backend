const express = require('express')
const router = express.Router()

const productos = require('../api/productos')

router.get('/productos/listar', (req, res) => {

    res.json(productos.listarProducto)
})

router.get('/productos/listar/:id', (req, res) => {

    const id = productos.mostrarProducto(req.params.id)
    res.json(id)
})

router.post('/productos/guardar', (req, res) => {
    const toAdd = productos.nuevoProducto(req.body)
    res.json(toAdd)
})

router.put('/productos/actualizar/:id', (req, res) => {
    const toChange =productos.actualizarProducto(req.body, req.params.id)
    res.json(toChange)
})

router.delete('/productos/borrar/:id', (req, res) => {
    const id = productos.eliminarProducto(req.params.id)
    res.json(id)
})



module.exports = router