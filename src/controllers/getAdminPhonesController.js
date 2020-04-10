module.exports = () => {
    const getAdminPhonesController = (req, res) => {
        res.render("back/phones");
    }

    return getAdminPhonesController;
}