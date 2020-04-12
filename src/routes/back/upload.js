const express = require("express");
const {uploadController} = require("../../controllers/controllers");
const router = express.Router();

module.exports = () =>{
    router.post("/upload", uploadController);

    return router;
}