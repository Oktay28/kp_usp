module.exports = (options={}) =>{

    const getHomePageController = (req, res) => {
        options.cartPhones = res.locals.cartPhones || [];
        res.render("front/index", options);
    }

    return getHomePageController;
}