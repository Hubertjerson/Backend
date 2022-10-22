# PROYECTO FINAL BACKEND CODERHOUSE
## Consejos
Todo es por via POSTMAN <br>
Se Necesita un Token Para acceder algunas Rutas <br>
El Token se genera Luego de Iniciar sesion <br>
Si deseo Hacer una orden de compra Necesita hacer un login para obtener su token

## Rutas

| Método | Endpoint                | Descripción                                                                                                                                                                                                                 |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST    | **/login**     | Inicio de sesion de usuarios se les dara un Token para que puedan Acceder a las demas rutas                                                                                                                                                                         |
| POST    | **/register**     | Registro de usuarios se alamacena en MongoDB |
| GET    | **/User**     | Envia a ver la informacion del usuario que se registro / Se necesita Token                                                                                                                                                                          |
| GET    | **/api/productos**     | Me permite listar todos los productos disponibles                                                                                                                                                                           |
| POST   | **/api/productos**     | Para incorporar productos al listado / Se necesita Token                                                                                                                                                                                         |
| GET    | **/api/productos/:id** | Permite ver un producto especifico dando en ID / Se necesita Token                                                                                                                                                           |
| PUT    | **/api/productos/:id**     | Permite Editar el producto Seleccionado por ID / Se necesita Token  |
| DELETE    | **/api/productos/:id**     | Permite Eliminar un Producto seleccionado por ID / Se necesita Token |
| POST    | **/api/carrito**     | Me permite crear un carrito / Se necesita Token |
| GET    | **/api/carrito/:id/productos**     | Me permite ver el carrito seleccionado por ID y sus productos / Se necesita Token |
| POST    | **/api/carrito/:idCar/:idProd**        | Me permite ver el carrito seleccionado por ID y el producto seleccionado por ID / Se necesita Token|
| DELETE    | **/api/carrito/id**        |Me permite eliminar un carrito seleccionado por ID / Se necesita Token|
| DELETE    | **/api/carrito/:id/productos/:idProd**        |Me permite eliminar un producto seleccionado por ID  del carrito seleccionado por ID / Se necesita Token|
| GET   | **/api/ordenes/:idCar**        |Se genera una orden de compra con respecto al carrito del ID dado y le llega un mensaje al usuario que lo genero / Se necesita Token|


### Link de Heroku

**Deploy:**
https://backendcoderjerson.herokuapp.com/
