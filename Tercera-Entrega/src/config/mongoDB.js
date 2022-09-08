const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const URL = 'mongodb://localhost:27017/ecommerce';

const conecction = mongoose.connect(URL,{
    useNewUrlParser: true
});

module.exports = conecction;
