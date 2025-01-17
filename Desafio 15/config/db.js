const mongoose = require('mongoose');
const log4js = require('../utils/logs');
const loggerArchiveError = log4js.getLogger(`errorArchive`);
const loggerConsole = log4js.getLogger('default');
const URL = 'mongodb://localhost:27017/ecommerce';

//  database connection with mongoose

const connection = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => loggerConsole.info("Conectado a MONGODB"))
    .catch((e) => loggerArchiveError.error("Error en la coneccion de MONGODB", e))

module.exports = connection;