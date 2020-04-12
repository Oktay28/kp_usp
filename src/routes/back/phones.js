const express = require("express");
const {
    getPhonesController,
    getAddNewPhoneController,
    postAddNewPhoneController,
    getEditPhoneController,
    postEditPhoneController,
    deletePhoneController
} = require("../../controllers/controllers");
const router = express.Router();

module.exports = (options={}) => {
    router.get("/admin/phones", getPhonesController)
    router.get("/admin/phones/add", getAddNewPhoneController);
    router.post("/admin/phones/add", postAddNewPhoneController);
    router.get("/admin/phones/edit/:id", getEditPhoneController);
    router.post("/admin/phones/edit/:id", postEditPhoneController);
    router.delete("/admin/phones/delete", deletePhoneController);

    return router;
}