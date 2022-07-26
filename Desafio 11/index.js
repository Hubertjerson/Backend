const express = require("express");
const session = require("express-session");
const expbs = require("express-handlebars");
require("dotenv").config({ path: "./config/.env" });
const { Server: HttpServer } = require("http");
const path = require("path");
const routes = require("./routers/index");

const app = express();
const httpServer = new HttpServer(app);

/*      PERSISTENCIA POR MONGO ATLAS     */
const MongoStore = require("connect-mongo");
const adavancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };
/* ------------------------------------- */

//Session config
app.use(
    session({
        store: MongoStore.create({
            mongoUrl: process.env.MONGOATLAS,
            mongoOptions: adavancedOptions,
        }),
        secret: "secreto",
        resave: false,
        saveUninitialized: false,
    })
);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./views/layouts"));
app.use("/", routes);

//Motor de plantillas
app.engine(
    "hbs",
    expbs.engine({
        defaultLayout: "main",
        partialsDir: path.join(__dirname, "views/partials"),
        extname: ".hbs",
    })
);
app.set("views", "./views");
app.set("views engine", "hbs");

//Server
httpServer.listen(process.env.PORT || 8080, () => {
    console.log("SERVER ON ,");
});