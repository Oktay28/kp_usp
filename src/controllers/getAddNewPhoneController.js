const {Brand} = require("../models/db");
module.exports = (options={}) => {
    const getAddNewPhoneController = async (req, res) => {
        options.brands = await Brand.findAll({
            raw: true
        })
        options.phone = {};
        options.images = [];
        res.render("back/configurePhone", options);
    }

    return getAddNewPhoneController;
}