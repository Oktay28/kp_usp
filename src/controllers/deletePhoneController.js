const {Phone, Image} = require("../models/db");

module.exports = (options = {}) => {
    const deletePhoneController = async (req, res) => {
        await Phone.destroy({
            where: {
                id: req.body.id
            }
        })

        await Image.destroy({
            where: {
                phone_id: req.body.id
            }
        })

        res.json(1);
    }

    return deletePhoneController;
}