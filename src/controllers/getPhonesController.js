module.exports = (options={}) => {

    options.page = "phones";

    const getPhonesController = (req, res) => {
        res.render("phones", options);
    }

    return getPhonesController;
}