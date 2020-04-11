const {Phone, Brand, Image} = require("../models/db");

module.exports = (options = {}) => {
    const getEditPhoneController = async (req, res) => {


        options.brands = await Brand.findAll({
            raw: true
        })

        options.phone = await Phone.findOne({
            where: {
                id: req.params.id
            },
            raw: true
        })

        options.images = await Image.findAll({
            where: {
                phone_id: req.params.id
            }
        })

        res.render("back/configurePhone", options);

    }

    return getEditPhoneController;
}