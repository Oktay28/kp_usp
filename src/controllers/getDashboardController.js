module.exports = (options={}) => {
    const getDashboardController = (req, res) => {
        res.render("back/dashboard");
    }

    return getDashboardController;
}