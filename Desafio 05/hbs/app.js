const express = require('express');
const {engine} = require('express-handlebars');
const productos = require('./api/productos');

const app = express();
const PORT = 8080
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
const router = express.Router()

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))


app.set('views',"./views");
app.set('view engine', 'hbs');

router.get('/productos/vista', (req, res) => {
    const items = productos.listar
    if(items.error){
        res.render('main', { hayProductos: false });
    }else{
        res.render('main', { hayProductos: true, items });
    }
})

router.get('/',(req, res)=>{
    res.render('./partials/formulario')
});


router.get('/productos/listar', (req, res) => {
    res.json(productos.listar)
})

router.get('/productos/listar/:id', (req, res) => {
    const item = productos.listarId(req.params.id)
    res.json(item ? item : { error: "Producto no encontrado" })
})

router.post('/productos/guardar', (req, res) => {
    const prodGuardado = productos.agregar(req.body)
    res.send('producto guardado')
    res.send(prodGuardado)
})

router.put('/productos/actualizar/:id', (req, res) => {
    const item = productos.actualizar(req.body, req.params.id)
    res.json(item)
})

router.delete('/productos/borrar/:id', (req, res) => {
    const item = productos.borrar(req.params.id)
    res.json(item)
})

app.use('/api', router);

const server = app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})

server.on('error',(error)=>{
    console.log('Error en el servidor ', error);
})