const express = require('express')
const router = express.Router()

const productos = require('../api/productos')

router.get('/productos/listar', (req, res) => {

    res.status(200).json(productos.listarProducto)
})

router.get('/productos/listar/:id', (req, res) => {

    let id = req.params.id
    res.status(200).json(productos.mostrarProducto(id))
})

router.post('/productos/guardar', (req, res) => {
    let toAdd = req.body
    let prod = productos.nuevoProducto(toAdd)
    res.status(201).json(prod)
})

router.put('/productos/actualizar/:id', (req, res) => {
    let toChange = req.body
    let id = req.params.id
    res.status(200).json(productos.actualizarProducto(toChange, id))
})

router.delete('/productos/borrar/:id', (req, res) => {
    let id = req.params.id
    res.status(200).json(productos.eliminarProducto(id))
})



module.exports = router