    // LLAMAMOS AL ARCHIVO CONTARINER

const Container = require('./container')
const nuevoProducto = new Container('producto.txt')

    //MOSTRANDO MENU AL USUARIO DE OPCIONES

const mostrarMenu = () => {
    setTimeout(() => {
        console.log(`
        Opciones:
            1.save
            2.getById
            3.getAll
            4.deleteById
            5.deleteAll
            6.exit
`)
    }, 1000)
}
mostrarMenu()

function menu() {
    let stdin = process.openStdin()

    stdin.addListener('data', function (d) {
        let option = d.toString().trim()

        switch (option) {
                // GUARDANDO Y MOSTRANDO ID GUARDADO DEL PRODUCTO
            case '1':
                const obj = {
                    // PRODUCTOS AGREGANDO
                    title: 'Productos Agregados',
                    price: 34.5,
                    thumbnail: 'Aqui Va una imagen del producto'
                }
                nuevoProducto.save(obj)
                mostrarMenu()
                break
                //  MOSTRANDO ID GUARDADO DEL PRODUCTO
            case '2':
                const id = 1
                console.log(nuevoProducto.getById(id))
                mostrarMenu()
                break
                // MOSTRANDO UN ARRAY GUARDADO DEL PRODUCTO
            case '3':
                console.log(nuevoProducto.getAll())
                mostrarMenu()
                break
                // ELIMINANDO ID ELEGIDO DEL PRODUCTO
            case '4':
                const id2 = 2
                nuevoProducto.deleteById(id2)
                mostrarMenu()
                break
                // ELIMINA TODO EL ARRAY PRODUCTO
            case '5':
                nuevoProducto.deleteAll()
                mostrarMenu()
                break
                // SALIDA
            case '6':
                process.exit(0)

            default:
                console.log('Error')
                process.exit(0)
        }
    })
}
menu()