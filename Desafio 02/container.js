const fs = require('fs')

module.exports = class Container {
    constructor(name) {
        this.name = name
    }

    //GUARDANDO UN OBJETO

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
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(newData, null,2))
            return console.log('guardado\n',JSON.parse(payload.id))
        } catch (err) {
            console.log('[falla al guardar]', err)
            await fs.promises.writeFile(`./${this.name}`, '[]')
            console.log('archivo creado, vuelve a intentar\n')
        }
    }

    //DEVUELVE UN ID SI USUARIO SELECCIONA LA OPCION

    async getById(id) {
        try{
            const data = fs.readFileSync(`${this.name}`)
            const dataJson = JSON.parse(data)
            return dataJson.find((item) => item.id === id)
        }catch(err){
            console.log(err)
        }
    }

    //DEVUELVE UN ARRAY CON LOS OBJETOS PRESENTES EN EL ARCHIVO

    async getAll() {
        try {
            const data = fs.readFileSync(`./${this.name}`, 'utf-8')
            const dataJson = JSON.parse(data)
            return dataJson
        } catch (err) {
            return`[No hay ningun producto] ${err}`
        }
    }

    // ELIMINA UN ID DEL ARCHIVO OBJETOS

    deleteById(id) {
        try{
            const data = fs.readFileSync(`${this.name}`)
            const dataJson = JSON.parse(data)
            const newData = dataJson.filter((item) => item.id !== id)
            fs.writeFileSync(`${this.name}`, JSON.stringify(newData))
            console.log('Eliminado')
        }catch(err){
            console.log(err)
        }
    }

    //ELIMINA TODOS LOS OBJETOS GUARDANDADOS EN EL ARCHIVO

    async deleteAll() {
        try {
            await fs.promises.unlink(`./${this.name}`)
            console.log('Borrado')
        } catch (error) {
            console.log( `[Falla al borrar] ${error}`)
        }
    }
}