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
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(newData, null, 2))
            return console.log('guardado\n')
        } catch (err) {
            console.log('[falla al guardar]', err)
            await fs.promises.writeFile(`./${this.name}`, '[]')
            console.log('archivo creado, vuelve a intentar\n')
        }
    }
    async getById(id) {
        try{
            const data = fs.readFileSync(`${this.name}`)
            const dataJson = JSON.parse(data)
            return dataJson.find((item) => item.id === id)
        }catch (err){
            console.log(`Hubo un error al intentar obtener un elemento por su ID`)
        }
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
    async deleteById(id) {
        try{
            const data = fs.readFileSync(`${this.name}`)
            const dataJson = JSON.parse(data)
            const newData = dataJson.filter((item) => item.id !== id)
            fs.writeFileSync(`${this.name}`, JSON.stringify(newData))
        }catch(err){
            console.log(`Hubo un error al intentar eliminar un elemento por su ID`)
        }
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

const express = require('express')
const app = express()
const nuevoProducto = new Contenedor('producto.txt')
const PORT = 8080

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hola Mundo..!')
});

app.get('/productos',async(req,res)=>{
        const resultado = await nuevoProducto.getAll()
        res.send(resultado)
})

app.get('/productoRandom',async(req,res)=>{
    const data = await nuevoProducto.getAll()
    const random = Math.floor(Math.random()*data.length)
    const random_Producto = await nuevoProducto.getById(parseInt(random+1))
    res.send(random_Producto)
})

const server = app.listen(PORT, () => {
    console.log(`>>>> Servidor http://localhost:${PORT}`)
})