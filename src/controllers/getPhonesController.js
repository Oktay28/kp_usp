const {Phone, Brand } = require("../models/db");
module.exports = (options={}) => {

    const getPhonesController = async (req, res) => {
        const phonesPerPage = 1;
        options.page = req.query.page || 1;

        options.pageCount = await Phone.count() / phonesPerPage || 1;

        console.log("path", req.path)

        delete req.query.page;

        const searchData = {
            attributes: ["id", "model", "image", "price"],
            raw: true,
            limit: phonesPerPage,
            offset: (options.page - 1) * phonesPerPage
        };
        if(req.query.filter == 1){
            searchData.where = req.query;
            delete req.query.filter;
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