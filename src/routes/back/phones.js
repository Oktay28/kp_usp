const express = require("express");
const {getAdminPhonesController} = require("../../controllers/controllers");
const router = express.Router();

module.exports = (options={}) => {
    router.get("/admin/phones", getAdminPhonesController)

    return router;
}