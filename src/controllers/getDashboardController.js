const { Phone } = require("../models/db");
module.exports = (options={}) => {
    const getDashboardController = async (req, res) => {
        options.amountPhones = await Phone.count();
        res.render("back/dashboard", options);
    }

    return getDashboardController;
}