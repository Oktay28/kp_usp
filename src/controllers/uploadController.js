const fs = require("fs");
module.exports = (options={}) => {

    const uploadController = (req, res) => {

        let url = `public/images/phones/`;
    
        if (!fs.existsSync(url)) {
            fs.mkdirSync(url);
        }
    
        url += req.files.media.name;
    
        req.files.media.mv(url, (error) => {
            if (error) console.log("file can not be uploaded!");
            else console.log("file successfully uploaded!");
        })
    
        res.end(`/${url}`);
    }

    return uploadController;
}

