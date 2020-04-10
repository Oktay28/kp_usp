const express = require("express");
const {getDashboardController} = require("../../controllers/controllers");
const router = express.Router();

module.exports = () => {
    router.get("/admin", getDashboardController);

    return router;
}