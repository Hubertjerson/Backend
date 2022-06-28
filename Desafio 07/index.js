const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

/*PRODUCTOS*/
const { selectAllProducts } = require('./controller/productos/selectAllProducts');
const { insertProduct } = require('./controller/productos/insertProduct');
/*MENSAJES*/
const { insertMessage } = require('./controller/mensajes/insertMessage');
const { selectAllMessage } = require('./controller/mensajes/selectAllMessage');

io.on('connection', socket => {

    socket.on('sendProduct', async () => {
        try {
            const allProducts = await selectAllProducts();
            socket.emit('allProducts', allProducts);
        } catch (err) {
            console.log(`Error: ${err}`)
        }
    });

    socket.on('addProducts', async data => {
        try {
            const newProducto = {
                title: `${data.name}`,
                price: `${data.price}`,
                thumbnail: `${data.img}`,
            }
            const product = await insertProduct(newProducto);

            io.socket.emit('refreshTable', product);
        } catch (err) {
            console.log(`Error: ${err}`)
        }
    })
})


server.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});