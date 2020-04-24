"use strict";

require("dotenv/config");
const express = require("express");
const fs = require("fs");
const path = require("path");
const { sequelize } = require("./src/models/db");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const { Brand } = require("./src/models/db");
const session = require("express-session");
const SessionStore = require('express-session-sequelize')(session.Store);

sequelize.authenticate().then(() => {
    sequelize.sync().then(function(){
        Brand.findOne().then((b) => {
            if (b == null) {
                const brands = require("./public/js/brands.json");
                Brand.bulkCreate(brands.map(brand => ({
                    name: brand
                })));
            }
        })
    }).catch(err => console.log("sequelize sync error ", error));
    

})

const sequelizeSessionStore = new SessionStore({
    db: sequelize
})

const PORT = process.env.PORT || 8080; //port

const app = express();

app.use(session({
    secret:"my secret",
    resave: false,
    saveUninitialized: false,
    store: sequelizeSessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    },
    unset: 'destroy'
}))

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/public", express.static("./public"));

app.use(fileUpload());

["front", "back"].forEach(route => {
    fs.readdirSync(`./src/routes/${route}`).forEach(file => {
        app.use(require(`./src/routes/${route}/${file}`)());
    })
})


app.listen(PORT, () => {
    console.log(`server listening - port ${PORT}`); //comment1
})



