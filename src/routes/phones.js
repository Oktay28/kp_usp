const express = require("express");
const {getPhonesController, getPhonesFilterController} = require("../controllers/controllers");
const router = express.Router();

module.exports = () => {
    router.get("/phones", (getPhonesController));

    router.get("/phones/filter", (getPhonesFilterController));

    return router;
}