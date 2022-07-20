const express = require('express');
const app = express();
const PORT = 8080;
const { mockProductos } = require('./mocks/mocks');

app.use('/productos-test', (req, res) => {
    const { cant } = req.query;
    res.status(200).send(mockProductos(cant));
});

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
});