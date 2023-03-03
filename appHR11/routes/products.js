const router = require('express').Router();
const controller = require('../controllers/products');

router.get('/products', (req,res)=>controller.getProducts(req,res))

module.exports = router;
