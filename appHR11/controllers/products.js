const Products = require('../models/products');

getProducts = async (req, res) => {
    let products = await Products.findAll();
    res.send(products);
};

module.exports = {
    getProducts
};