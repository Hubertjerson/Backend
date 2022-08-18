const { Router } = require("express");
const router = Router();

const info = require('./info-random')

router.use('/', info)

module.exports = router;