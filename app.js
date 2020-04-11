"use strict";

require("dotenv/config");
const express = require("express");
const fs = require("fs");
const path = require("path");
const {sequelize} = require("./src/models/db");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

sequelize.authenticate().then(() => {
    sequelize.sync().catch(err => console.log("sequelize sync error ", error));
})

const PORT = process.env.PORT || 8080; //port

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/public", express.static("./public"));

["front", "back"].forEach(route => {
    fs.readdirSync(`./src/routes/${route}`).forEach(file => {
        app.use(require(`./src/routes/${route}/${file}`)());
    })
})

app.use(fileUpload());

app.post("/upload", (req, res) => {

    let url = `public/images/phones/`;

    if (!fs.existsSync(url)){
        fs.mkdirSync(url);
    }
    
    url += req.files.media.name;

    req.files.media.mv(url, (error)=>{
        if(error) console.log("file can not be uploaded!");
        else console.log("file successfully uploaded!");
    })

    res.end(`/${url}`);
})


app.listen(PORT, () => {
    console.log(`server listening - port ${PORT}`);//comment1
})



    const {Brand} = require("./src/models/db");
    Brand.findOne().then((b)=>{
        if(b == null){
            const brands = require("./public/js/brands.json");
            Brand.bulkCreate(brands.map(brand => ({name: brand})));
        }
    })
