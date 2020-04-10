module.exports = () => {
    const getPhoneController = (req, res) => {
        res.render("front/phone");
    }

    return getPhoneController;
}