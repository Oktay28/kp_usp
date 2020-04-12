const express = require("express");
const {loadCartProductsController} = require("./controllers/controllers");

module.exports = {
    loadCartProducts : loadCartProductsController
}
