const koa = require('koa');
const koaBody = require('koa-body');
const PORT = 8080;
const app = new koa();
const router = require('./routes/peliculas')

app.use(koaBody());
app.use(router.routes());

app.listen(PORT , () => {
    console.log("SERVER ON");
});