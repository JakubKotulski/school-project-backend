const Product = require("../models/product");

const getProducts = async (req, res) => {
    try{
        const section = req.body.section
        data = await Product.find({section: section, sold: false});
        res.json(data);
    }catch(e){
        console.log("err ", e);
    }

}

module.exports = { getProducts };