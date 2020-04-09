module.exports = () =>{

    const getHomePageController = (req, res) => {
        res.render("index");
    }

    return getHomePageController;
}