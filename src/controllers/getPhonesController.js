module.exports = (options={}) => {

    options.page = "phones";

    const getPhonesController = (req, res) => {
        res.render("front/phones", options);
    }

    return getPhonesController;
}