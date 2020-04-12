const {Phone} = require("../models/db");

module.exports = () => {
    const loadCartProductsController = async (req, res, next) => {

        res.locals.cartPhones = await Phone.findAll({
            attributes: ["id", "model", "image", "price"],
            where: {
                id: req.session.cartPhones
            },
            raw: true
        })

            next();
       
    }

    return loadCartProductsController;
}