const express = require('express');
const app = express();
const PORT =8080;
const { engine } = require('express-handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'index',
    layoutsDir: __dirname +'/views/layouts',
    partialsDir: __dirname +'/views',
}));

app.set('view engine', 'hbs');
app.set('views', './views');

const router = require('./routes/router');
app.use('/api', router);


const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

server.on('error', (err) => {
    console.log('Error en el servidor', err);
});