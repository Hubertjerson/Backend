# DIVIDIR EN CAPAS NUESTRO PROYECTO
## Consigna:
 Dividir en capas el proyecto entregable con el que venimos trabajando (entregable clase 16: loggers y profilers), agrupando apropiadamente las capas de ruteo, controlador, lógica de negocio y persistencia.

Considerar agrupar las rutas por funcionalidad, con sus controladores, lógica de negocio con los casos de uso, y capa de persistencia.

La capa de persistencia contendrá los métodos necesarios para atender la interacción de la lógica de negocio con los propios datos.

## Consejos
Todo es por via POSTMAN <br>
Se Necesita un Token Para acceder algunas Rutas <br>
El Token se genera Luego de Iniciar sesion
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
| GET    | **/api/test/info**        | Muestra información relativa a la app |
