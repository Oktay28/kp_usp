const {Phone} = require("../models/db");
module.exports = (options={}) => {
    const getPhonesFilterController = async (req, res) => {
        options.cartPhones = res.locals.cartPhones || [];
        options.phones = await Phone.findAll({
            where: req.query,
            attributes: ["id", "model", "image", "price"],
            raw: true
        });

        options.filterData = Object.entries(req.query);
        
        res.render("front/phones", options);
    }

    return getPhonesFilterController;
}