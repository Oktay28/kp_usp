module.exports = () => {
    const addToCart = (req, res) => {

        if(typeof req.session.cartPhones == "undefined"){
            req.session.cartPhones = [];
        }
        
        if(!req.session.cartPhones.some((item)=>(item == req.params.id))){
            req.session.cartPhones.push(req.params.id);
        }

        req.session.save(function(){
            res.redirect("/phones");
        })
        
    }

    return addToCart;
}