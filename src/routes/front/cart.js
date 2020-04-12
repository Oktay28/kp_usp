const express = require("express");
const {addToCart, removeFromCart, getCartController} = require("../../controllers/controllers")
const {loadCartProducts} = require("../../middlewares");
const router = express.Router();

module.exports = () => {
    router.get("/add-to-cart/:id", addToCart);
    router.post("/remove-from-cart", removeFromCart);
    router.get("/cart", loadCartProducts, getCartController);
    router.post("/cart", loadCartProducts, (req, res)=>{
        req.session.destroy();
        res.render("front/checkout");
    })

    return router;
}