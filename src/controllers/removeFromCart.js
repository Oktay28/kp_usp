module.exports = () => {
    const removeFromCart = (req, res) => {
        req.session.cartPhones.forEach((id, i) => {
            if(id == req.body.id){
                req.session.cartPhones.splice(i,1);
                return res.json(1);
            }
        });

        
    }
    return removeFromCart;
}