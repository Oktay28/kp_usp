"use strict";

// modules
require("dotenv/config");
const express = require("express");
const fs = require("fs");
const { sequelize } = require("./src/models/db");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const SessionStore = require('express-session-sequelize')(session.Store);
const functionCore = require("./src/functionCore");

// connect to db
sequelize.authenticate().then(() => {
    sequelize.sync()
    .then(async function(){
        await functionCore.loadBrands();
        if(process.argv[2] == "loadSampleData"){
            await functionCore.loadSampleData();
        }
    })
    .catch(error => console.log("sequelize sync error ", error));
})

// sessions table
const sequelizeSessionStore = new SessionStore({
    db: sequelize
})

const PORT = process.env.PORT || 8080; //port

const app = express();   // app created

app.use(session({
    secret: process.env.SESSION_SECRET,  // secret from .env
    resave: false,
    saveUninitialized: false,
    store: sequelizeSessionStore,  // store sessions to session table
    cookie: {
        maxAge: 1000 * 60 * 60 * 24  // one day
    },
    unset: 'destroy'
}))

// body-parser middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("views", "./src/views");  // views folder location
app.set("view engine", "ejs");     // set view engine to 'ejs'

app.use("/public", express.static("./public"));  // use /public folder as static

app.use(fileUpload());  // fileupload middleware

// include all routes for back and front
["front", "back"].forEach(route => {
    fs.readdirSync(`./src/routes/${route}`).forEach(file => {
        app.use(require(`./src/routes/${route}/${file}`)());
    })
})

// listening the server
app.listen(PORT, () => {
    console.log(`server listening - port ${PORT}`);
})



