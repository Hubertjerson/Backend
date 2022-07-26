
const { Router } = require("express");
const router = Router();

const productsRouter = require('./productsRouter')
const fakerRouter = require('./fakerRouter')
const sessionRouter = require('./sessionRouter')

router.use('/productos', productsRouter)
router.use('/', fakerRouter)
router.use('/', sessionRouter)

module.exports = router;