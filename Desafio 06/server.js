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

let chat = [];
//let users = [];
let productos = [];

io.on('connection', channel => {

    //emitir();
    //sendUsers();
    //actualizar_producto();
    channel.emit('productos',productos);
    channel.emit('chat',chat);

    channel.on('guardar', data => {
        console.log(data);
        productos.push(data);
        actualizar_producto();
    })

    channel.on('incomingMessage', message => {
        console.log(message);
        //chat.indexOf(message) === -1 ? null : channel.emit("changeName");
        chat.push(message);
        //users.push(message.nombre);
        emitir();
        //sendUsers();
    });
});


const emitir = () => io.sockets.emit('chat', chat);
//const sendUsers = () => io.sockets.emit('usersList', users);
const actualizar_producto = () => io.sockets.emit('productos', productos);

server.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});