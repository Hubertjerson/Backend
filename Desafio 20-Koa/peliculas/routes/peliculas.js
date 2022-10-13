const Router = require('koa-router');
const router = new Router({prefix: '/peliculas'});

let peliculas = [];

router.get('/', (ctx, next) => {
    ctx.body ={
        status:'sucess',
        message:peliculas
    };
    next();
});

router.get('/:anio', (ctx, next) => {
    const { anio } = ctx.request.params;
    let pelicula = peliculas.find(pelicula => pelicula.anio == anio);

    if(pelicula){
        ctx.body=pelicula;
    }else{
        ctx.response.status = 404;
        ctx.body = {
            status:'error',
            message:"Pelicula no encontrado"
        }
    }
    next()
});

router.post('/new', (ctx, next) => {
    const {request, response} = ctx;
    const { pelicula , anio , marca , genero} = request.body;

    if(!pelicula || !anio || !marca || !genero){
        response.status = 400;
        ctx.body ={
            status:'error',
            message:"No ingreso todos los datos"
        };
        next();
    } else{
        peliculas.push({pelicula,anio,marca, genero});
        response.status=201;
        ctx.body ={
            status:'success',
            message:"Se agrego una nueva pelicula"
        }
    };
    next();
})

router.put('/:anio', (ctx, next) => {

    const { pelicula , anio , marca , genero} = ctx.request.body;

    if(!pelicula || !anio || !marca || !genero){
        response.status = 400;
        ctx.body ={
            status:'error',
            message:"No ingreso todos los datos"
        };
        next();
    } else{
        let anioNuevo = ctx.request.params.anio;
        let peli = peliculas.find( pelicula => pelicula.anio == anioNuevo)
        peliculas.splice(peli,1,ctx.request.doby);

        ctx.response.status=201;
        ctx.body ={
            status:'success',
            message:"Se edito una pelicua"
        }
    };
    next();
})

router.delete('/:anio',(ctx , next) => {
    let { anio } = ctx.request.params;

    if(!anio) {
        response.status = 400;
        ctx.body = {
            status:'error',
            message:"No ingreso correcto los datos"
        };
        next();
    }else{
        let index = peliculas.find(pelicula => pelicula.anio == anio);
        peliculas.splice(index, 1);

        ctx.response.status =201;
        ctx.body={
            status:'success',
            message:"Se elimino una pelicula"
        }
    };
    next();
})

module.exports= router;