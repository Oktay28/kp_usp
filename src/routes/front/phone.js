const express = require("express");
const {Phone} = require("../../models/db");
const {getPhoneController} = require("../../controllers/controllers");

const router = express.Router();

module.exports = () => {

    router.get("/phone/1", getPhoneController);

    return router;
}