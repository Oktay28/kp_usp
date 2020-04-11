const {Phone, Brand} = require("../models/db");
module.exports = (options={}) => {
    const getAdminPhonesController = async (req, res) => {
        options.phones = await Phone.findAll({
            include: Brand,
            raw: true
        })
        res.render("back/phones", options);
    }

    return getAdminPhonesController;
}