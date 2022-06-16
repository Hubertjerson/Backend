const e = require('express');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = 8080;

const productos = require('./productos')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index', { root: '__dirname' });
});

app.post('/guardar', (req, res) => {
    productos.agregar(req.body);
    res.redirect('/');
});

let chat = [];
//let users = [];

io.on('connection', channel => {

    emitir();
    //sendUsers();
    productosActualizar();

    channel.on('guardar', data => {
        console.log(data)
        productos.agregar(data)
        productosActualizar
    })

    channel.on('incomingMessage', message => {
        //users.indexOf(message.nombre) === -1 ? null : channel.emit("changeName");
        chat.push(message);
        //users.push(message.nombre);
        emitir();
        //sendUsers();
    });
});


const emitir = () => io.sockets.emit('chat', chat);
//const sendUsers = () => io.sockets.emit('usersList', users);
const productosActualizar = () => io.sockets.emit('actualizar-productos', productos.listar);

server.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});