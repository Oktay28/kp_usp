module.exports = () => {
    const getPhoneController = (req, res) => {
        res.render("phone");
    }

    return getPhoneController;
}