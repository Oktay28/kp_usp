const express = require("express");
const {getHomePageController} = require("../../controllers/controllers");
const router = express.Router();

module.exports = (options = {}) => {

    router.get("/", getHomePageController);

    return router;
}