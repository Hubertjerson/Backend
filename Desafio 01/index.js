
// 1) Declarar una clase Usuario
//
// 2) Hacer que Usuario cuente con los siguientes atributos:
//
// nombre: String
// apellido: String
// libros: Object[]
// mascotas: String[]
// Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.
//
// 3) Hacer que Usuario cuente con los siguientes métodos:
//
// getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
//
// addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
//
// countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
//
// getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
//
// addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
//
// 4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.

class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido

        this.mascotas = []
        this.libros = []
    }

    getFullName() {
        return `${this.nombre}${this.apellido}`
    }
    addMascota(Mascotas) {
        this.mascotas.push(Mascotas)
    }
    countMascotas() {
        return this.mascotas.length
    }
    addBook(nombre, autor) {
        return this.libros.push({
            nombre:nombre,
            autor:autor,
        })
    }
    getBookNames() {
        return this.libros.map(libro => libro.nombre)
    }
}


//AGRAGAR NOMBRE Y APELLIDO
const nombre_Completo = new Usuario("cosmes", "fulanito");
// LLAMANDO NOMBRE Y APELLIDO
console.log(nombre_Completo.getFullName());


//AGREGAR MASCOTAS
nombre_Completo.addMascota("perro");
nombre_Completo.addMascota("gato");
nombre_Completo.addMascota("hasmets");
console.log(nombre_Completo.mascotas);

// CANTIDAD DE MASCOTAS
console.log("El total de mascotas es : " + nombre_Completo.countMascotas())

////AGREGAR LIBROS
nombre_Completo.addBook('El señor de los anillos', 'J.R.R. Tolkien')
nombre_Completo.addBook('Harry Potter', 'J.K. Rowling')
nombre_Completo.addBook('El Psicoanalista', 'John Katzenbach')
nombre_Completo.addBook('El Club de los Psicopatas', 'John Katzenbach')
console.log(nombre_Completo.libros);

////NOMBRE DE LIBROS

console.log(nombre_Completo.getBookNames())






