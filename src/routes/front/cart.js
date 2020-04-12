const express = require("express");
const {addToCart, removeFromCart} = require("../../controllers/controllers")
const router = express.Router();

module.exports = () => {
    router.get("/add-to-cart/:id", addToCart);
    router.post("/remove-from-cart", removeFromCart);

    return router;
}