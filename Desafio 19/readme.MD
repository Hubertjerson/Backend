## Reformar para usar GraphQL

### Consignas

- En base al último proyecto entregable de servidor API RESTful, reformar la capa de routeo y el controlador para que los requests puedan ser realizados a través del lenguaje de query GraphQL.
- Si tuviésemos un frontend, reformarlo para soportar GraphQL y poder dialogar apropiadamente con el backend y así realizar las distintas operaciones de pedir, guardar, actualizar y borrar recursos.
- Utilizar GraphiQL para realizar la prueba funcional de los querys y las mutaciones.

----

# Para acceder a GraphiQL ingresa a

### `http://localhost:8080/graphql`

## Comandos

    query getProducts{
    getAllProducts{
        id
        nombre
        stock
        }
    }

    query getProductByID{
        getProductById (id:"6338beb822de3760a5894afa"){
        nombre
        stock
        }
    }

    mutation updateProduct{
        updateProductById(id:"6338beb822de3760a5894afa", data:{
            nombre: "producto graphql",
            descripcion: "modificado graphql",
            codigo: 50,
            thumbnail: "URL graphql",
            precio: 99,
            stock: 99
            }){
        nombre
        id
        }
    }

    mutation deleteProduct{
        deleteProductById(id:"6338beb822de3760a5894afa")
    }