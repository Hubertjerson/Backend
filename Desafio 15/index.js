const express = require('express')
const app = express()
const session = require('express-session')
const MongoStore = require('connect-mongo')
const compression = require('compression')
const minimist = require('minimist')
const log4js = require('./utils/logs');



const loggerConsole = log4js.getLogger('default');
const loggerArchiveWarn = log4js.getLogger('warnArchive');
const loggerArchiveError = log4js.getLogger(`errorArchive`);


app.use(express.static('public'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all("*", (req, res) => {
    res.status(404).json({"error": "ruta no existente"})
  });

const options = {
    alias: {
        "p": "PORT"
    },
    default: {
        "PORT": 8080
    }
};
const { PORT } = minimist(process.argv.slice(2), options);

const server = app.listen(PORT, () => {
    loggerConsole.info(`🚀 Server started at http://localhost:${PORT}`)
    })

server.on('error', (err) => loggerArchiveError.error(err));

