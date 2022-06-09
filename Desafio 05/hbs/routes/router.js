const express = require('express')
const router = express.Router()

const productos = require('../api/productos')

router.get('/productos/vista', (req, res) => {
    const items = productos.listar
    res.render('main', { hayProductos: items })
})

router.get('/productos/listar', (req, res) => {
    res.json(productos.listar)
})

router.post('/productos/guardar', (req, res) => {
    productos.agregar(req.body)
    res.redirect('/')
})

router.get('/productos/listar/:id', (req, res) => {
    const item = productos.listarId(req.params.id)
    res.json(item ? item : { error: "Producto no encontrado" })
})

router.put('/productos/actualizar/:id', (req, res) => {
    const item = productos.actualizar(req.body, req.params.id)
    res.json(item)
})

router.delete('/productos/borrar/:id', (req, res) => {
    const item = productos.borrar(req.params.id)
    res.json(item)
})



module.exports = router