const express = require("express");
const {getPhoneController} = require("../../controllers/controllers");
const {loadCartProducts} = require("../../middlewares");
const router = express.Router();

module.exports = () => {

    router.get("/phone/:id", loadCartProducts, getPhoneController);

    return router;
}