const mongoose = require('mongoose');
require('dotenv').config()

const URL = process.env.MONGOURL;

//  database connection with mongoose

const connection = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Conectado a MONGODB"))
    .catch((e) => console.log("Error en la coneccion de MONGODB", e))

module.exports = connection;