module.exports = () =>{

        getHomePageController = (req, res) => {
        res.render("index");
    }

    return getHomePageController;
}