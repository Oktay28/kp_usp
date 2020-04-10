module.exports = () =>{

    const getHomePageController = (req, res) => {
        res.render("front/index");
    }

    return getHomePageController;
}