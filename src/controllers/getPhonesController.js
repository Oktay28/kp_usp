const {Phone, Brand } = require("../models/db");
module.exports = (options={}) => {

    const getPhonesController = async (req, res) => {
        const searchData = {
            attributes: ["id", "model", "image", "price"],
            raw: true
        };
        if(req.query.filter == 1){
            searchData.where = req.query;
            delete req.query.filter;
            console.log(searchData);
        }
        options.brands = await Brand.findAll();
        try{
            options.phones = await Phone.findAll(searchData);
        } catch {
            options.phones = await Phone.findAll();
        }
        options.cartPhones = res.locals.cartPhones || [];
        
        options.filterData = Object.entries(req.query) || [];
        res.render("front/phones", options);
    }

    return getPhonesController;
}