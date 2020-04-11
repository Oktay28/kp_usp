const express = require("express");
const {getPhoneController} = require("../../controllers/controllers");
const router = express.Router();

module.exports = () => {

    router.get("/phone/:id", getPhoneController);

    return router;
}