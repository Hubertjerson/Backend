const fs = require('fs');

class ContenedorCarrito{
    constructor(archivo){
        this.archivo = archivo;
    }

    async read(){
        try{
            let data = await fs.promises.readFile(`./${this.archivo}`, `utf-8`);
            return data;
        }catch(error){
            return{error: `Error Al Leer el Archivo ${error}`};
        }
    }

    async write(datos, msg){
        try{
            await fs.promises.writeFile(`./${this.archivo}`, JSON.stringify(datos, null, 2));
            console.log(msg);
        }catch(error){
            return{error: `Error Al Escribir en el Archivo ${error}`};
        }
    }

    async guardarCarrito(){
        let nuevoCarrito;
        let date = new Date().toDateString();
        let carrito={
            id: 0,
            fecha: date,
            products: []
        };
        let data = await this.read();
        let datos = JSON.parse(data);

        if(datos.length===0){
            carrito.id = 1;
            nuevoCarrito = carrito;
        }else{
            carrito.id = datos[datos.length-1].id+1;
            nuevoCarrito = carrito;
        }
        datos.push(nuevoCarrito);
        await this.write(datos, `Carrito Guardado`);
        return carrito.id;
    }

    async listarCarrito(){
        let data = await this.read();
        let datos = JSON.parse(data);
        return datos;
    }

    async productoId(idCart){
        let data = await this.read();
        let datos = JSON.parse(data);
        let carrito = datos.filter(cart => cart.id === idCart);
        if(carrito.length===0){
            return []
        }else{
            return carrito[0].products;
        }
    }

    async carritoId(myId){
        let data = await this.read();
        let datos = JSON.parse(data);
        let result = datos.filter(cart => cart.id === myId);
        return result;
    }

    async borrarCarrito(idCart){
        try{
            let data = await this.read();
            let datos = JSON.parse(data);
            let carrito = datos.find(cart => cart.id === idCart);
            if(!carrito){
                return{error: `No existe el carrito con el id ${idCart}`};
            }else{
                let index = datos.indexOf(carrito);
                datos.splice(index, 1);
                await this.write(datos,  `Carrito con ID: ${idCart} Borrado`);
            }
        }catch (error){
            return{error: `Error Al Borrar el Carrito ${error}`};
        }
    }

    async eliminarProducto(idCart, idProd){
        try{
            let data = await this.read();
            let datos = JSON.parse(data);
            let carrito = datos.find(cart => cart.id === idCart);
            let product = carrito.products.find(prod => prod.id === idProd);
            if(!carrito && !product){
                return{error: `No existe el carrito y producto no existen`};
            }else{
                let indexProduct = carrito.products.indexOf(product);
                carrito.products.splice(indexProduct, 1);
                await this.write(datos,   `Producto  con ID: ${idP} del carrito con ID ${idC} fue borrado`);
            }
        }catch (error){
            return{error: `Error Al Borrar el Producto ${error}`};
        }
    }

    async eliminar(){
        let data = [];
        await this.write(data, `Se elmino todos los productos del carrito`);
    }
}
module.exports = ContenedorCarrito;