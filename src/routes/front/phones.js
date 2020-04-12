const express = require("express");
const {getPhonesController, getPhonesFilterController} = require("../../controllers/controllers");
const router = express.Router();
const {loadCartProducts} = require("../../middlewares");

module.exports = () => {
    router.get("/phones", loadCartProducts, getPhonesController);

    router.get("/phones/filter", loadCartProducts, getPhonesFilterController);

    return router;
}