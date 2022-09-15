const express = require('express')
const otherRouter = express.Router()
const {
    generador,
    prosInfo,
} = require('../controller/otherController')

/* ------------------------ OtherRouter ------------------------- */

// GET api/test/info
otherRouter.get('/info', prosInfo)

// GET api/test/randoms
otherRouter.get('/randoms', generador)

module.exports = otherRouter