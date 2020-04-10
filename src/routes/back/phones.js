const express = require("express");
const {getAdminPhonesController, getAddNewPhoneController} = require("../../controllers/controllers");
const router = express.Router();

module.exports = (options={}) => {
    router.get("/admin/phones", getAdminPhonesController)
    router.get("/admin/phones/add", getAddNewPhoneController);

    return router;
}