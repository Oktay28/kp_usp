"use strict";

require("dotenv/config");
const express = require("express");
const fs = require("fs");
const path = require("path");
const {sequelize} = require("./src/models/db");
const bodyParser = require("body-parser");

sequelize.authenticate().then(() => {
    sequelize.sync({force: true}).catch(err => console.log("sequelize sync error ", error));
})

const PORT = process.env.PORT || 8080; //port

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/public", express.static("./public"));

fs.readdirSync("./src/routes").forEach(file => {
    app.use(require(`./src/routes/${file}`)());
})

app.listen(PORT, () => {
    console.log(`server listening - port ${PORT}`);//comment1
})