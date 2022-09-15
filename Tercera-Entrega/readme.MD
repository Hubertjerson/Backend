# Tercer entrega del proyecto final
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

## Consejos
Todo es por via POSTMAN <br>
Se Necesita un Token Para acceder algunas Rutas <br>
El Token se genera Luego de Iniciar sesion


# Registro de usuarios y aviso por email de la operación

- Creamos un nuevo usuario

<img src="img\Creacion.png"/>

- Observamos que se ha creado un nuevo usuario y se encripto la contraseña

<img src="img\Registro.png"/>

- Recibimos un correo electrónico informando el la creacion del nuevo usuario

<img src="img\Correo.png"/>

# Obtener Token

- Cuando ingresamos a la ruta Login se nos habilitara un token (Dura 24Hrs).
    Dicho Token nos permitira Navegar por algunas rutas donde sera necesario habernos logeado.

<img src="img\login.png"/>

- Ejemplo de accediendo a una ruta con Token

<img src="img\User.png"/>

- En caso No de no habernos logeado se nos habilitara un mensaje diciendo que falta Token

<img src="img\Token.png"/>
