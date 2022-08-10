const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const routes = require("./routes/index");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(process.env.PORT || 8080, () => {
    console.log("SERVER ON");
});