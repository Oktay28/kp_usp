module.exports = (options={}) => {
    const getPhonesFilterController = (req, res) => {
        console.log(req.params, req.body, req.query);
        res.render("phones");
    }

    return getPhonesFilterController;
}