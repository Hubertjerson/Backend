const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const URL = process.env.URL_MONGO;

const conecction = mongoose.connect(URL,{
    useNewUrlParser: true
});

module.exports = conecction;
