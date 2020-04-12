const express = require("express");
const {getPhonesController} = require("../../controllers/controllers");
const router = express.Router();
const {loadCartProducts} = require("../../middlewares");

module.exports = () => {
    router.get("/phones", loadCartProducts, getPhonesController);

    return router;
}