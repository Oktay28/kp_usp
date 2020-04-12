const {Phone, Image, Brand} = require("../models/db");
module.exports = (options = {}) => {
    const getPhoneController = async (req, res) => {
        options.cartPhones = res.locals.cartPhones || [];
        options.phone = await Phone.findOne({
            where: {
                id: req.params.id
            },
            include: Brand,
            raw: true
        })
        options.images = await Image.findAll({
            where: {
                phone_id: req.params.id
            },
            raw: true
        })
        res.render("front/phone", options);
    }

    return getPhoneController;
}