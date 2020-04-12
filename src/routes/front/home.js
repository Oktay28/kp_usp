const express = require("express");
const {getHomePageController} = require("../../controllers/controllers");
const router = express.Router();
const {loadCartProducts} = require("../../middlewares");

module.exports = () => {

    router.get("/", loadCartProducts, getHomePageController);

    return router;
}