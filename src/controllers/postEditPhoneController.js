const {Phone, Image, Sequelize} = require("../models/db");
const Op = Sequelize.Op;

module.exports = (options = {}) => {
    const postEditPhoneController = async (req, res) => {
        let {imageUrls, imageIds} = req.body;
        delete req.body.imageUrls;
        delete req.body.imageIds;

        req.body.availability = req.body.availability || 0;

        await Phone.update(req.body,{
            where: {
                id: req.params.id
            }
        })

        let images = (imageUrls ? imageUrls : []).map(url => ({
            name: url,
            phone_id: req.params.id
        })) || null;

        if(imageIds){
            await Image.destroy({
                where: {
                    [Op.and]: {
                        [Op.not]: {
                            id: imageIds
                        },
                        phone_id: req.params.id
                    }
                }
            })
        }

        await Image.bulkCreate(images);

        res.redirect("/admin/phones");

    }

    return postEditPhoneController;
}