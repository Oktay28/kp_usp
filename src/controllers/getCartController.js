module.exports = (options={})=>{
    
    const getCartController = (req, res) => {
        options.cartPhones = res.locals.cartPhones || [];
        res.render("front/cart");
    }

    return getCartController;
}