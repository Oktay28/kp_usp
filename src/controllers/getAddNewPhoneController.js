module.exports = (options={}) => {
    const getAddNewPhoneController = (req, res) => {
        res.render("back/configurePhone");
    }

    return getAddNewPhoneController;
}