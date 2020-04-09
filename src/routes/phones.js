const express = require("express");
const {getPhonesController} = require("../controllers/controllers");
const router = express.Router();

module.exports = () => {
    router.get("/phones", (getPhonesController));

    return router;
}