const {Phone, Brand } = require("../models/db");
module.exports = (options={}) => {

    const getPhonesController = async (req, res) => {
        const phonesPerPage = 16;
        options.page = req.query.page || 1;

        delete req.query.page;

        const searchData = {
            attributes: ["id", "model", "image", "price"],
            raw: true,
            limit: phonesPerPage,
            offset: (options.page - 1) * phonesPerPage
        };
        let renderFile;
        if(req.originalUrl.indexOf("admin") == -1){
            renderFile = "front/phones";
        }
        else {
            searchData.include = Brand
            renderFile = "back/phones";
        }
        if(req.query.filter == 1){
            searchData.where = req.query;
            delete req.query.filter;
        }
        options.brands = await Brand.findAll();
        try{
            options.phones = await Phone.findAll(searchData);
            let p = await Phone.findAll({
                where: searchData.where,
                raw: true,
                attributes: ["id"]
            })
            options.pageCount = Math.ceil(p.length / phonesPerPage) || 1;
            
        } catch (e) {
            options.phones = await Phone.findAll({
                limit: phonesPerPage,
                raw: true,
                attributes: ["id", "model", "image", "price"]
            });
            options.pageCount = Math.ceil(await Phone.count() / phonesPerPage) || 1;
        }

        options.cartPhones = res.locals.cartPhones || [];
        
        options.filterData = Object.entries(req.query) || [];
        res.render(renderFile, options);
    }

    return getPhonesController;
}