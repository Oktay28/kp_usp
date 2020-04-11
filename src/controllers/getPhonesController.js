const {Phone} = require("../models/db");
module.exports = (options={}) => {

    const getPhonesController = async (req, res) => {
        options.phones = await Phone.findAll({
            attributes: ["id", "model", "image", "price"],
            raw: true
        });
        
        res.render("front/phones", options);
    }

    return getPhonesController;
}