const { Schema, model } = require(`mongoose`);
const mongoose = require('mongoose');

const carritoSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now(),
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productos'
    },
    ]
});

module.exports = model(`Carritos`, carritoSchema);