const { fork } = require("child_process");
const os = require('os');
const randomNumbersGeneratorFork = fork('../utils/random.js')

const prosInfo = async (_req , res) =>{
    try{
        const processInfo = {
            platform: process.platform,
            version: process.version,
            title: process.title,
            execPath: process.execPath,
            processId: process.pid,
            rss: process.memoryUsage().rss,
            numberOfProcessors: os.cpus().length
        }
        res.status(200).json(processInfo);
    }catch(e){
        res.status(404).json({e:`Error en el precessInfo ${e}`});
    }
};

const generador = async (req, res) => {
    try{
        const cantidad = req.query.cantidad || 5000;
        randomNumbersGeneratorFork.on('message', (resultado) => {
            res.status(200).json(resultado);
        })
        randomNumbersGeneratorFork.send(cantidad);
        console.log('lista Generada')
    }catch(err){
        res.status(404).json({err:`Error al generar lista ${err}`});
    }
};

module.exports ={
    prosInfo,
    generador,
}