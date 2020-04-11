const {Phone, Image, Sequelize} = require("../models/db");
const Op = Sequelize.Op;

module.exports = (options = {}) => {
    const postEditPhoneController = async (req, res) => {
        console.log(req.body);
        let {imageUrls, imageIds} = req.body;
        delete req.body.imageUrls;
        delete req.body.imageIds;

        await Phone.update(req.body,{
            where: {
                id: req.params.id
            }
        })

        let images = (imageUrls ? imageUrls : []).map(url => ({
            name: url,
            phone_id: req.params.id
        })) || null;

        console.log(imageIds);
        console.log(req.params.id);

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

        console.log("before redirect");

        res.redirect("/admin/phones");

    }

    return postEditPhoneController;
}