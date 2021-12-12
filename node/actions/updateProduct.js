const Product = require("../models/product");

const updateProduct = async (req, res) => {
    try{
        await Product.updateOne({ _id: req.params.id }, { $set: {name: req.body.name, price : req.body.price, url: req.body.url, section: req.body.section} });
        res.status(200);
    }catch ( e ) {
        console.log("err ", e);
    }
}

module.exports = { updateProduct }