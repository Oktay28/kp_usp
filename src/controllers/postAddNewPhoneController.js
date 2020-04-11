const {Phone, Image} = require("../models/db");

module.exports = (options = {}) => {
    const postAddNewPhoneController = async (req, res) => {

        const imageUrls = req.body.imageUrls;
        delete req.body.imageUrls;

        const {id} = {dataValues} = await Phone.create(req.body);
        
        const images = imageUrls.map(image => {
            return {
                name: image,
                phone_id: id
            }
        })

        Image.bulkCreate(images);

        res.redirect("/admin/phones");
    }

    return postAddNewPhoneController;
}