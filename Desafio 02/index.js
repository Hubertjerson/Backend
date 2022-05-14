
//Implementar programa que contenga una clase llamada Contenedor que reciba
//el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:
//-save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
//-getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
//-getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
//-deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
//-deleteAll(): void - Elimina todos los objetos presentes en el archivo.

//...Aspectos a incluir en el entregable:
//.-El método save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.
//.-Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.
//.-Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.
//.-Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”
//.-Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído.


const fs = require('fs')

class Contenedor {
    constructor(name) {
        this.name = name
    }

    async save(object) {
        try {
            const data = await fs.promises.readFile(`./${this.name}`, 'utf-8')
            const result = JSON.parse(data)
            const newData = [...result]
            const payload = {
                title: object.title,
                price: object.price,
                thumbnail: object.thumbnail,
                id: result.length + 1
            }
            newData.push(payload)
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(newData,null,2))
            return console.log('guardado\n')
        } catch (err) {
            console.log('[falla al guardar]', err)
            await fs.promises.writeFile(`./${this.name}`, '[]')
            console.log('archivo creado, vuelve a intentar\n')
        }
    }
    async getById(id) {
        const data = fs.readFileSync(`${this.name}`)
        const dataJson = JSON.parse(data)
        return dataJson.find((item) => item.id === id)
    }
    async getAll() {
        try {
            const data = fs.readFileSync(`./${this.name}`, 'utf-8')
            const dataJson = JSON.parse(data)
            return dataJson
        } catch (err) {
            return err
        }
    }
    deleteById(id) {
        const data = fs.readFileSync(`${this.name}`)
        const dataJson = JSON.parse(data)
        const newData = dataJson.filter((item) => item.id !== id)
        fs.writeFileSync(`${this.name}`, JSON.stringify(newData))
    }
    async deleteAll() {
        try {
            await fs.promises.unlink(`./${this.name}`)
            return 'borrado\n'
        } catch (error) {
            return `[Falla al borrar] ${error}`
        }
    }
}


const contenedor = new Contenedor("productos.txt");

const main = async () => {

  const id1 = await contenedor.save({ title: "Escuadra", price: 75.66, thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png" });
  const id2 = await contenedor.save({ title: "Calculadora", price: 57.75, thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png" });
  const id3 = await contenedor.save({ title: "Globo Terráqueo", price: 100, thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png" });

  // LLAMANDO A UN OBJETO CON UN "ID" DADO POR USUARIO
  //const object2 = await contenedor.getById(3);
  //console.log(object2);


  //        BORRAR UN ID
  //await contenedor.deleteById();


  // DEVOLVER UN ARRAY CON TODOS LOS OBJETOS GUARDADOS
  //const allCurrentObjects = await contenedor.getAll();
  //console.log(allCurrentObjects);

};

main();