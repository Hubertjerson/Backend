const express = require('express');
const app = express();
const cors = require("cors");
const PORT = process.env.PORT ||8080;

//Router Import
const productosRouter = require('./routes/productosRouter');
const carritoRouter = require('./routes/carritoRouter');
const usuarioRouter = require('./routes/usuarioRouter')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(`${__dirname}/storage/imgs`));


app.use(`/api/productos`, productosRouter);
app.use(`/api/carrito`, carritoRouter);
app.use('/api/usuario', usuarioRouter)


app.use((req, res) => {
    res.status(404).json({ error: -2, descripcion: `ruta ${req.originalUrl} metodo ${req.method} no implementada` });
});

const server = app.listen(PORT,() => {
    console.log(`Servidor corriendo en el PORT: ${PORT}`);
});

server.on(`error`, err => console.log(`Error en el servidor: ${err}`));