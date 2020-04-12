const {
    Phone
} = require("../models/db");

module.exports = () => {
    const loadCartProductsController = async (req, res, next) => {

        try {
            res.locals.cartPhones = await Phone.findAll({
                attributes: ["id", "model", "image", "price"],
                where: {
                    id: req.session.cartPhones
                },
                raw: true
            })
        } catch {
            res.locals.cartPhones = [];
        }



        next();

    }

    return loadCartProductsController;
}