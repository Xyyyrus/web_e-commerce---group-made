const { fetchBuyerById, updateBuyerById, fetchAllProductInCart, addToCart } = require('../controllers/cartController');

const express = require('express');

const router = express.Router();

router.route('/:id').get(fetchAllProductInCart);

router.route('/add-to-cart').post(addToCart);



module.exports = router;
