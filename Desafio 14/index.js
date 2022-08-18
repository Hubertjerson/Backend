const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const routes = require("./routes/index");
const PORT = parseInt(process.env[2]) || 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(process.env.PORT || 8080, () => {
    console.log("SERVER ON");
});


